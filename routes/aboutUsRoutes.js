const express=require('express')
const aboutUsController = require('./../controller/aboutUsController');
const router = express.Router();
router
.route('/')
.get(aboutUsController.getaboutap)
.post(aboutUsController.addabout)
router
.route('/:id')
.patch(aboutUsController.updateAbout)
module.exports=router;