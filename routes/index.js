const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controllers')

router.get('/',homeController.home);
//any req which come for users
router.use('/users',require('./users'));
router.use('/practise',require('./practise'));
//for any other routes acess from here
//router.use('/routerName',require('routerFile'))
module.exports=router;