const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../../config/db');


const userScehma = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String, 
        unique: true, 
        required:'Username can\'t be empty'
    },
    email: {
        type: String, 
        unique: true, 
        required:'Email can\'t be empty'
    },
    hash: String,
    salt: String,
    resetLink: {
        data: String,
        default:''
    },
    confirmed: {
        type: Boolean,
        defaultValue: false
    }
});

userScehma.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt , 1000 , 64 , 'sha512').toString('hex');
};

userScehma.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userScehma.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate());

    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(((expiry.getTime() + 100000 ) / 1000)),
    }, config.jwtSecret);

};

module.exports = mongoose.model('User', userScehma);


// const mongoose = require('mongoose');

// var userSchema = new mongoose.Schema({
//     _id: {
//         type:mongoose.Types.ObjectId
//     },
//     username: {
//         type: String,
//         required: 'Full name can\'t be empty',
//         unique: true
//     },
//     email: {
//         type: String,
//         required: 'Email can\'t be empty',
//         unique: true
//     },
//     password: {
//         type: String,
//         required: 'Password can\'t be empty',
//         minlength : [6,'Password must be atleast 6 character long']
//     },
//     saltSecret: String
// });

// // Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// module.exports = mongoose.model('User', userSchema);