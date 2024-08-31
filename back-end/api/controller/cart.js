const mongoose = require("mongoose");

const Product = require("../models/products");
const Cart = require("../models/cart");
const { static } = require("express");

exports.cart_get_all_cart = (req, res, next) => {
  // Cart.find()
  //   .exec()
  //   .then(result => {
  //     res.status(200).json(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   });

  if(req.session.cart){
    let cart = new Cart(req.session.cart);
    return res.status(200).json({
      products: cart.generateArray(),
      totalPrice: cart.totalPrice,
      totalQuantity: cart.totalQuantity
    });
  } else {
    return res.status(200).json({
      products: null,
      totalPrice: 0,
      totalQuantity: 0
    });
  }
  
};

exports.cart_create_cart = function(req, res, next) {
  let cart  = new Cart({
    _id: mongoose.Types.ObjectId(),
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  });

  cart.save()
  .then(result => {
    return res.status(200).json(result);
  });
}

exports.cart_add_to_cart = function (req, res, next) {
  var id = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  
  // res.status(200).json(cart);
  // console.log(req.session.cart);

  // if(req.session.cart.items.length <= 0){
  //   console.log("in if");
  //   cart = new Cart();
  //   cart.initialize(cart);
    
  // }
  // else{
  //   console.log("in else")
  //   cart = req.session.cart;
  //   cart.initialize(req.session.cart);
  // }
  
  // if(req.session.cart) {
  //   let cart = new Cart(req.session.cart);
  // } else {
  //   console.log('{}');
  //   console.log(req.session.store);
  //   let cart = new Cart({});
  // }
  Product.findById(id , function(err , product) {
    // console.log(this.items , this.totalPrice , this.totalQuantity);
    if(err) {
      res.status(401).json(err);
    }
    cart.add(product , product._id);
    req.session.cart = cart;
    return res.status(200).json(cart);
})
 

  
  // Product.findById(id)
  // .exec()
  // .then(result => {
  //   cart.add(result);
  //   req.session.cart = cart;
  //   //console.log(cart);
  //   //console.log(req.session.cart);
  //   res.status(200).json({cart});

  // })
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).json({
  //     error: err
  //   });
  // })

  // var productadded = new Product();
  
  // const cart = new Cart({
  //   _id: mongoose.Types.ObjectId(),
  //   product: req.body.id,
  //   quantity: req.body.quantity
  // });

  // cart
  //   .save()
  //   .then(result => {
  //     console.log(result);
  //     res.status(201).json({
  //       message: "Created cart Successfully",
  //       createdCart: {
  //         _id: result._id,
  //         quantity: result.quantity,

  //         request: {
  //           type: "GET",
  //           url: "http://localhost:3000/cart" + result._id
  //         }
  //       }
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   });
};

exports.cart_decrease_cart = (req , res , next) => { 
  var productId = req.params.id;
  var cart = new Cart(req.session.cart? req.session.cart : {});
  cart.decreaseItem(productId);
  req.session.cart = cart;
  res.status(200).json(cart);
}

exports.cart_remove_cart = (req , res , next) => {
  var id = req.params.id;
  var cart = new Cart(req.session.cart? req.session.cart : {});
  cart.deleteItem(id);
  req.session.cart = cart;
  res.status(200).json(cart);
}
