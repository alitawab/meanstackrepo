const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');


const router = express.Router();
const path = require('path');

const Admin = require('../admin/admin.model');
const Product = require('../models/products');
const Order = require('../models/orders');
const Category = require('../models/category');

const fs = require('file-system');
const products = require('../models/products');
const category = require('../models/category');
  


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null,"./uploads/product");
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + "." + file.originalname);
    }
  });
  
  const uploadProduct = multer({
    storage: storage,
    //limits :{fileSize: 1024 * 1024 * 10}  ,
    //fileFilter: fileFilter
  }).array('productImage');

  const storagecat = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null,"./uploads/category");
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + "." + file.originalname);
    }
  });
  
  const uploadCategory = multer({
    storage: storagecat,
    //limits :{fileSize: 1024 * 1024 * 10}  ,
    //fileFilter: fileFilter
  }).single('categoryImage');


router.get('/', (req, res, next)=>{
  
  //////////////////// UNCHECK IF YOU WANT TO CREATE A NEW ADMIN //////////////////////////
  // const admin = new Admin();
  // admin._id = mongoose.Types.ObjectId();
  // admin.username = 'admin';
  // admin.setPassword('admin');
  // admin.save().then(result => {console.log(result);}).catch();
  
  return res.render('login.ejs');
});
  

router.post('/login' , (req, res, next) => {
  const username = req.body.admin_username;
  const password = req.body.admin_password;
  Admin.findOne({username:username})
  .exec()
  .then((admin) => {
    if(!admin){
      return res.status(400).json({error:'invalid credentials'});
    }
    if(!admin.validPassword(password)){
      return res.status(400).json({error:'invalid credentials'});
    }
    if(admin) {
      req.session.admin = admin;
      return res.status(200).redirect('/admin/profile');
    }
  })
  .catch(err => {
    console.log(err);
    return res.status(500).json(err);
  });
});

router.get('/profile' , (req, res, next) => {
  let prod = new Product();
  let order = new Order();

  if(req.session.admin){
    Order.find()
    .exec()
    .then(docs => {
      order = docs;
      return res.status(200).render('index.ejs', {orders:order,products:prod});
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
  }
  else {
    return res.status(400).json({error:'private profile'});
  }
});

router.post('/catselected' , (req, res, next) => {
  
  Product.find()
  .where('category').equals(req.body.value)
  .exec()
  .then(result => {
    console.log(result);
    return res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    return res.status(500).json({
      error: err
    });
  });
});

router.post('/upload' , (req, res, next) => {
    uploadProduct(req, res, function(err) {
      if (err) {
        return res.status(501).json({ error: err });
      }      
      const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        category: req.body.category,
        offer: req.body.offer,
        price: req.body.price,
        qty: req.body.qty
      });

      product.productImage = [];
      for(var i in req.files){
        var img = req.files[i];
        product.productImage[i] = {image:img['filename']};
      }      
      product.save()
        .then(result => {
          return res.status(200).redirect('/admin/profile');
        })
        .catch(err => {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        });
    });
  });

  router.post('/uploadcat' , (req, res, next) => {  
      uploadCategory(req, res, function(err) {
        console.log(req.file)
        if (err) {
          return res.status(501).json({ error: err });
        }   
          const category = new Category({
            _id: mongoose.Types.ObjectId(),
            title: req.body.title,
            categoryImage: req.file.filename
          });
          category.save()
            .then(result => {
              return res.status(200).redirect('/admin/profile');
            })
            .catch(err => {
              console.log(err);
              return res.status(500).json({
                error: err
              });
            });
      });
  });
  

  router.get('/delete/:id', (req, res, next) => {  
    const {id} = req.params.id;

    Product.findOne({_id:id}, (err , product)=>{
      if(err){
        return res.status(300).redirect('/');
      }

      Product.deleteOne({_id: product._id}, (err , result) => {
        if(err){
          return res.status(200).redirect('/');
        }
        product.productImage.forEach((i) => {
          fs.unlink(__dirname + '../../../uploads/product/' + i.image, (err , stats)=>{
            if(err){
              console.log(err);
            }
            else {
              return res.status(200);
            }
          });
        });
      });
    });
      // product.delete()
      //   .then(result => {
      //     console.log('product added');
      //     return res.redirect('/admin');
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     return res.status(500).json({
      //       error: err
      //     });
      //   });
  });

  router.post('/edit', (req, res, next) => {
    const id = req.body.update_product_id;
    var objForUpdate = {};
    if (req.body.update_product_name) objForUpdate.name = req.body.update_product_name;
    if (req.body.update_product_category) objForUpdate.category = req.body.update_product_category;
    if (req.body.update_product_offer) objForUpdate.offer = req.body.update_product_offer;
    if (req.body.update_product_price) objForUpdate.price = req.body.update_product_price;
    if (req.body.update_product_qty) objForUpdate.qty = req.body.update_product_qty;
    if (req.body.update_product_productImage) {
      uploadProduct(req, res, function(err) {
        if (err) {
          return res.status(501).json({ error: err });
        }
        objForUpdate.productImage = req.body.update_product_productImage;

      });
    }
    
    objForUpdate = {$set: objForUpdate};

    Product.update({_id:id},objForUpdate)
    .then(result => {})
    .catch(err => {
      console.log(err);
    })
    

    return res.status(200).redirect('/admin/profile');

  });
  


module.exports = router;