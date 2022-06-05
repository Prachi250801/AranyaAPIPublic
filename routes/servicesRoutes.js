const express=require('express')
const servicesController = require('./../controller/servicesController');
const router = express.Router();
router
.route('/')
.get(servicesController.getservices)
.post(servicesController.addService)
router
.route('/:id')
.patch(servicesController.updateservices)
module.exports=router;