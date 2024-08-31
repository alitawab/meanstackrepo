const mongoose = require('mongoose');

const categoryScehma = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String , required: true},
    categoryImage: {type: String , required: true}
});


module.exports = mongoose.model('Category', categoryScehma);