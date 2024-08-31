const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const mailgun = require('mailgun-js');
const DOMAIN = "sandbox73d1b146bc23467ba083de9a420b4cfc.mailgun.org";
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});

const crypto = require('crypto');

const User = require('../models/user');

exports.signup = (req , res , next) => {
    const {username, email, password} = req.body;
    // const user = new User({
    //     _id: mongoose.Types.ObjectId(),
    //     email: req.body.email
    // });
    
    User.findOne({email}).exec((err, user) => {
        if(user){
            return res.status(400).json({message: "User with this email already exists."})
        }
        const activationToken = jwt.sign({username,email,password},process.env.JWT_ACC_ACTIVATE,{expiresIn:'20m'});

        const data = {
            from: 'noreply@osb.com',
            to: email,
            subject: 'Account Activation',
            html: `
            <h2>Please click on the link to activate account</h2>
            <p><a href="${process.env.HEROKU_LINK_HOME_URL}/activation/${activationToken}">${process.env.HEROKU_LINK_HOME_URL}/activation/${activationToken}</a></p>
            `
        };
        mg.messages().send(data, function (error, body) {
        });
        return res.status(200).json({message: "Email has been sent kindly activate your account. "})
        
    });
    // user._id = mongoose.Types.ObjectId();
    // user.email = req.body.email;
    // user.salt = crypto.randomBytes(16).toString('hex');
    // user.hash = crypto.pbkdf2Sync(req.body.password, user.salt , 1000 , 64 , 'sha512').toString('hex');

    // user.save(function(err){
    //     let token;
    //     token = user.generateJwt();
    //     res.status(200).json({
    //         'token': token
    //     });
    // });
};

exports.activation = (req, res, next) => {
    const {token} = req.params;
    
    if(token){
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, (err, decodedToken) => {
            if(err) {
                return res.status(400).json({error: 'Incorrect or expired activation link '});
            }
            const {username, email, password} = decodedToken;
            User.findOne({email}).exec((err, user) => {
                if(user){
                    return res.status(400).json({message: 'Email already exists !'});
                }
                const newuser = new User();
                newuser._id = mongoose.Types.ObjectId();
                newuser.username = username;
                newuser.email = email;
                newuser.setPassword(password);
                newuser.confirmed = true;
            
                newuser.save()
                .then(result => {
                    let sessiontoken;
                    sessiontoken = newuser.generateJwt();
                    return res.status(200).json({'token':sessiontoken});
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).json({
                        error: err
                    });
                })
            });
        });
    }
}

exports.login = (req , res , next) => {
    passport.authenticate('local', (error , user , info) => {
        let token;
        if(error){
            res.status(404).json(error);
            return;
        }
        if(user) {
            token = user.generateJwt();
            return res.status(200).json({
                'token': token
            });
        } else {
            return res.status(401).json(info);
        }
    })(req , res , next);
};

exports.profileRead = (req , res , next) => {
    if(!req.payload._id) {
        return res.status(401).json({
            'message': 'Unauthorized error: private profile'
        });
    } else {
        User.findById(req.payload._id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
              error: err
            });
          });
    }
};

exports.reset = (req , res , next) => {
    const {email} = req.body;

    User.findOne({email} , (err , user) => {
        if(err || !user){
            return res.status(400).json({
                error: 'user with this email doesnot exist'
            });
        } 
        const resetpwdToken = jwt.sign({_id: user._id}, "MY_RESET_SECRET", {expiresIn: '20m'});
        const data ={
            from: 'noreply@onlineshopping.com',
            to: email,
            subject: 'Password Reset link',
            html: `
            <h2>Please click on the link to reset your password </h2>
            <p>${process.env.HEROKU_LINK_HOME_URL}/user/reset/${resetpwdToken}</p>
            `
        };
        return user.updateOne({resetLink: resetpwdToken}, (error, success) => {
            if(error){
                return res.json({
                    error: err.message
                })
            }
            return res.json({message: 'Email has been sent, kindly follow the instructions'})
        })

    });
};