const mongoose = require("mongoose");
const path = require('path');

const Product = require('../models/products');

exports.products_get_all = (req, res, next) => {
  const type = req.query.productType;
  const re = new RegExp(type);
  Product.find()
  .where('category').equals(type)
  .exec()
  .then(result => {
    console.log(res);
    return res.status(200).json(result);
    
  })
  .catch(err => {
    console.log(err);
    return res.status(500).json({
      error: err
    });
  });
};

exports.products_search_product = (req , res , next) => {
  const value = req.params.searchterm;
  
  Product.find()
  .where('name').equals({$regex: new RegExp(value)})
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

exports.products_get_image = (req, res, next) => {
  const id = req.params.productId;
  var filePath = [];
  Product.findById(id)
    .exec()
    .then(docs => {
      docs.productImage.forEach(element => {
        filePath = path.join(__dirname,'../../uploads/product/') + element.image;
      })
      return res.sendFile(filePath);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err
      });
    });
}

function findImage(value , callback){
  var str;
  value.forEach(element => {  
    if(element.view.indexOf('front')){
      str = element.image;
    } else {
      str = element.image;
    }
  });
  return callback(str);
}

exports.products_get_numberimages = (req, res, next) => {
  const id = req.params.productId;
  var arr = [];
  Product.findById(id)
  .select()
  .exec()
  .then(docs => {
    return res.status(200).json({
      size: docs.productImage.length,
      details: docs
    });
  })
  .catch(err => {
    console.log(err);
    return res.status(500).json({
      error: err
    });
  });
}


exports.products_get_allimages = (req, res, next) => {
  const id = req.params.productId;
  const i = req.params.number;
  var filePath;
  Product.findById(id)
  .select('productImage.image')
  .exec()
  .then(docs => {
    filePath = path.join(__dirname,'../../uploads/product/') + docs.productImage[i].image;
    return res.status(200).sendFile(filePath);
  })
  .catch(err => {
    console.log(err);
    return res.status(500).json({
      error: err
    });
  });
}


exports.products_get_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('_id name price productImage')
    .exec()
    .then(docs => {
      return res.sendFile(docs);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err
      });
    });  
};

exports.products_special_product = (req, res, next) => {
  
  const offer = req.query.productOffer;
  Product.find()
  .where('offer').equals(offer)
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

exports.product_random_products = (req, res, next) => {
  let cat = req.query.category;
  Product.countDocuments()
  .where('category').equals(cat)
  .exec(function (err , count) {
    if(err) {
      return res.status(404).json({error: err});
    }
    let random = Math.floor(Math.random() * count);

    Product.find().skip(random)
    .exec(function (err, result) {
      return res.status(200).json(result);
    })

  })

}

exports.products_update_product = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      return res.status(200).json({
        message: "Product Updated",
        request: {
          type: "GET",
          url: "htt[//localhost:3000/products/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err
      });
    });
};

exports.products_delete_product = (req, res, next) => {
  const id = req.params.productId;
  Product.deleteOne({ _id: id })
    .exec()
    .then(result => {
      return res.status(200).json({
        message: "Product Deleted",
        request: {
          type: "POST",
          url: "http//localhost:3000/products",
          body: { name: "String", price: "Number" }
        }
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err
      });
    });
};
