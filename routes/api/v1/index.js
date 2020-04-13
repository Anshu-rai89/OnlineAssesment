const express=require('express');

// using express route
const router=express.Router();



router.use('/question',require('./question'));



module.exports=router;