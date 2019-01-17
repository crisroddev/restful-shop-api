const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require("../middleware/check-auth");
const ProductsController = require('../controller/products');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// GET allproducts
router.get("/", ProductsController.products_get_all);

// POST create product
router.post("/", checkAuth, upload.single('productImage'), ProductsController.products_create_product);

// GET product by ID
router.get("/:productId", checkAuth, ProductsController.products_get_product);

// PATCH update product
router.patch("/:productId", checkAuth, ProductsController.products_update_product);

//DELETE product
router.delete("/:productId", checkAuth, ProductsController, delete_product);

module.exports = router;