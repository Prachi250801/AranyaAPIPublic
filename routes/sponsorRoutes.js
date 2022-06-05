const express=require('express')
const sponsorController = require('./../controller/sponsorController');
const router = express.Router();
router
.route('/')
.get(sponsorController.getsponsors)
router
.route('/:id')
.patch(sponsorController.updatesponsors)
module.exports=router;