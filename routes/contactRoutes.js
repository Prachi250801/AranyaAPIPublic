const express=require('express')
const contactController = require('./../controller/contactController');
const router = express.Router();
router
.route('/')
.get(contactController.getcontact)
.post(contactController.addContact)

router
.route('/:id')
.patch(contactController.updatecontact)
module.exports=router;