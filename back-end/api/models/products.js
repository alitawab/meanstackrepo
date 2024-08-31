const mongoose = require('mongoose');

const productScehma = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    category: {type: String},
    offer: {type: String},
    price: {type: String},
    available: {type: Number},
    productImage:[{image: {type:String}}]
});


module.exports = mongoose.model('Product', productScehma);