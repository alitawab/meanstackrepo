const mongoose = require('mongoose');

const orderScehma = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    contactInfo: {
        name: {type: String , required: true},
        number: {type: String , required: true}
    },
    deliveryLocation: {
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true}
    },
    orderedItems: {
        items: {
            item: [],
            qty: []
        },
        totalQuantity: {type: Number, required: true},
        totalPrice: {type: Number, required: true}
    }
    // paymentOption: {
    //     cod: {type: Boolean, required: true},
    //     card: {type: Boolean, required: true}
    // }
});
module.exports = mongoose.model('Order', orderScehma);