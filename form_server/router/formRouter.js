const formController = require('./../controller/formController')
const express=require('express')
const router=express.Router()

router.post('/submit',formController.submit)

module.exports=router