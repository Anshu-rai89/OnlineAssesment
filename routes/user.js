const express=require('express');

// using express route
const router=express.Router();
const userController=require('./../controllers/usercontroller');

router.post('/create',userController.create);
router.post('/create-session',userController.createsession);



module.exports=router;