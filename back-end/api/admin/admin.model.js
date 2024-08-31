const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


const adminScehma = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String, 
        unique: true, 
        required:'Username can\'t be empty'
    },
    hash: String,
    salt: String
});

adminScehma.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt , 1000 , 64 , 'sha512').toString('hex');
};

adminScehma.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

adminScehma.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate());

    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(((expiry.getTime() + 100000 ) / 1000)),
    }, process.env.JWT_SECRET);

};

module.exports = mongoose.model('Admin', adminScehma);
