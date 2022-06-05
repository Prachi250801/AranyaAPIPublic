const express=require('express')
const employmentController = require('./../controller/employmentController');
const router = express.Router();
router
.route('/')
.get(employmentController.getemployment)
.post(employmentController.addemployment)
router
.route('/:id')
.patch(employmentController.updateempolyment)
module.exports=router;