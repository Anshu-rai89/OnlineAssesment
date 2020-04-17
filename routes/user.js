const express=require('express');
const passport=require('passport');
// using express route
const router=express.Router();
const userController=require('./../controllers/usercontroller');

router.post('/create',userController.create);
router.post('/create-session',userController.createsession);
router.post('/result',userController.generateReport);


module.exports=router;