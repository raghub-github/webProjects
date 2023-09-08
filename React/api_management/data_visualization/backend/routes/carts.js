const express = require("express");
const router = express.Router();
const {getAllProducts} = require("../controlles/products");

//Router : 1,  Get all the data using: GET method "allproducts"
router.route('/').get(getAllProducts);

module.exports = router;
