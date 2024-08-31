const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../api/models/user');


passport.serializeUser(function (user, done){
    done(null, user.id);
});

passport.deserializeUser(function (id , done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local' , new localStrategy ({
    
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
function (req, username, password, done) {
    
    
    // User.findOne({email: username}, (err, user) => {
    //     if(err) { return done(err); }

    //     if(!user) {
    //         return done(null, false, {
    //             message: 'User not found'
    //         });
    //     }
    //     if(!user.validPassword(password)) {
    //         return done(null, false, {
    //             message: 'Password is wrong'
    //         });
    //     }

    //     return done(null, user);
    // });

    User.findOne({username:username})
    .exec()
    .then((user) => {

        if(!user) {
            return done(null, false, {
                message: 'User not found'
            });
        }
        if(!user.validPassword(password)) {
            return done(null, false, {
                message: 'Password is wrong'
            });
        }

        return done(null, user);
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
          });
      })
}
));