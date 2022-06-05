const express=require('express')
const teamController = require('./../controller/teamController');
const router = express.Router();
router
.route('/')
.get(teamController.getteam)
.post(teamController.addTeam)
router
.route('/:id')
.patch(teamController.updateteam)
module.exports=router;