const express=require('express')
const productsController = require('./../controller/productsController');
const router = express.Router();
router
.route('/')
.get(productsController.getproducts)
router
.route('/:id')
.patch(productsController.updateproducts)
module.exports=router;