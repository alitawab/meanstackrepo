const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const Category = require("../models/category");

exports.category_get_all_category = (req, res, next) => {
  
  Category.find()
    .exec()
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      (err);
      return res.status(500).json({
        error: err
      });
    });
};

exports.category_get_image = (req, res, next) => {
  const id = req.params.categoryId;
  Category.findById(id)
    .exec()
    .then(result => {
      filePath = path.join(__dirname, "../../uploads/category/") + result.categoryImage;
      return res.sendFile(filePath);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err
      });
    });
};


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/category");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "." + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadCategory = multer({
  storage: storage
  //limits :{fileSize: 1024 * 1024 * 10}  ,
  //fileFilter: fileFilter
}).single('categoryImage');

exports.category_add_category = (req, res, next) => {
  uploadCategory(req, res, function(err) {
    if (err) {
      return res.status(501).json({ error: err });
    }   
      const category = new Category({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        categoryImage: req.file.filename
      });
      category
        .save()
        .then(result => {
          return res.status(201).json({
            message: "Created category Successfully",
            createdCategory: {
              title: result.title,
              _id: result._id,
              categoryImage: req.file.filename,

              request: {
                type: "POST",
                url: "http://localhost:3000/category/addcategory" + result._id
              }
            }
          });
        })
        .catch(err => {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        });
  });
};
