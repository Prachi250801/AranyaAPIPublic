const express=require('express')
const clientTestController = require('./../controller/clientTestController');
const router = express.Router();
router
.route('/')
.get(clientTestController.getTestimonials)
.post(clientTestController.addClient)
router
.route('/:id')
.patch(clientTestController.updateTestimonials)
module.exports=router;