module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;
  
    this.add = function(item , id) {
        let storedItem = this.items[id];
        if(!storedItem) {
            storedItem = this.items[id] = {item: item , quantity: 0 , price: 0};
        }
        storedItem.quantity++;
        storedItem.price = storedItem.item.price * storedItem.quantity;
        this.totalQuantity++;
        this.totalPrice = parseInt(this.totalPrice) + parseInt(storedItem.item.price);
    };

    this.decreaseItem = function(id) {
        this.items[id].quantity--;
        this.items[id].price = this.items[id].price - this.items[id].item.price;
        this.totalQuantity--;
        this.totalPrice = this.totalPrice - this.items[id].item.price;

        if(this.items[id].quantity <= 0) {
            delete this.items[id];
        }
    };

    this.deleteItem = function(id) {
        this.totalPrice = this.totalPrice - this.items[id].price;
        this.totalQuantity = this.totalQuantity - this.items[id].quantity;
        delete this.items[id];
    }

    this.generateArray = function() {
        let arr = [];
        for (let id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};
// const mongoose = require('mongoose');

// const cartScehma = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     items: [{type: Object , required: true }],
//     totalQuantity: {type: Number , required: true },
//     totalPrice: {type: Number , required: true }
// });

// cartScehma.methods.initialize = function(oldCart) {
//     this._id = mongoose.Types.ObjectId();
//     this.items = oldCart.items || [];
//     this.totalQuantity = oldCart.totalQuantity || 0;
//     this.totalPrice = oldCart.totalPrice || 0;
// }

// cartScehma.methods.addItem = function (product , id) {
//     let storedItem = this.items[id];
//         if(!storedItem) {
//             this.items[id] = {item: product , qty: 0 , price: 0};
//             storedItem = this.items[id];
//             console.log(this.items[id]);
//             console.log(storedItem);
//         }
//         storedItem.qty++;
//         storedItem.price = parseInt(storedItem.item.price) * storedItem.qty;
//         this.totalQuantity++;
//         this.totalPrice = parseInt(this.totalPrice) + parseInt(storedItem.item.price);
// }

// cartScehma.methods.removeItem = function(id) {
//     let storedItem = this.items[id];
//     if(storedItem) {
//         storedItem = this.items[id] = null
//     }
//     storedItem.qty--;
//     storedItem.price = (storedItem.item.price * storedItem.qty) - storedItem.item.price;
//     this.totalQuantity--;
//     this.totalPrice = parseInt(this.totalPrice) - parseInt(storedItem.item.price);


// }

// cartScehma.methods.generateArray = function() {
//     let arr = [];
//     for (let id in this.items) {
//         arr.push(this.items[id]);
//     }
//     return arr;
// };


// module.exports = mongoose.model('Cart', cartScehma);