const express=require('express');
const router=express.Router();

const practiseController=require('../controllers/practise_controller');
router.get('/p',practiseController.p);

module.exports=router;