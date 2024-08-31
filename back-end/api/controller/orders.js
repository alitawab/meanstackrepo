const mongoose = require('mongoose');

const Order = require('../models/orders');
const Product = require('../models/products');


exports.orders_get_all = (req , res , next) => {
    console.log('here i am ');
    Order.find()
    .select("product quantity _id")
    .populate('product' , 'name')
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            orders: doc.map(doc => {
                return {
                    _id: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/orders" + doc._id
                    }
                };
            })
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
}

exports.order_create_order = (req , res , next) => {
    const order = new Order({

        _id: mongoose.Types.ObjectId(),
        contactInfo: {
            name: req.body.customer_name,
            number: req.body.customer_number
        },
        deliveryLocation: {
            latitude: req.body.address_latitude,
            longitude: req.body.address_longitude
        },
        orderedItems: {
            items: {
                item: req.body.product_id,
                qty: req.body.product_quantity,
            },
            totalQuantity: req.session.cart.totalQuantity,
            totalPrice: req.session.cart.totalPrice
        }
    });

    order.save()
        .then(result => {
            req.session.destroy();
            return res.status(200).json(order);})
        .catch(err => {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        });



    
    // Product.findById(req.body.productId)
    // .then(product => {
    //     if(!product){
    //         return res.status(404).json({
    //             message: "Product not found"
    //         });
    //     }
    //     const order = new Order({
    //         _id: mongoose.Types.ObjectId(),
    //         quantity: req.body.quantity,
    //         product: req.bosy.productId
    //     });
    //     return order.save();
    // })
    // .then(result => {
    //     return res.status(201).json({
    //         message: "Order stored",
    //         createdOrder: {
    //             _id: result._id,
    //             product: result.product,
    //             quantity: result.quantity
    //         },
    //         request: {
    //             type: "GET",
    //             url: "http://localhost:3000/orders" + result._id
    //         }
    //     });
    // })
    // .catch(err => {
    //     return res.status(500).json({
    //         error: err
    //     });
    // });
}

exports.order_get_order = (req , res , next) => {
    Order.findById(req.params.orderId)
    .populate('product')
    .exec()
    .then(order => {
        if(!order){
            return res.status(404).json({
                message: "Order not found"
            });
        }
        return res.status(200).json({
            order: order,
            request: {
                type: "GET",
                url: "http://localhost:3000/orders"
            }
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
}

exports.order_delete_order = (req , res , next) => {
    Order.remove({_id: req.params.orderId})
    .exec()
    .then(result => {
        return res.status(200).json({
            message: "Order deleted",
            reauest: {
                type: "POST",
                url: "http://localhost:3000/orders",
                body: { productId: "ID" ,   quantity: "Number" }
            }
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
}