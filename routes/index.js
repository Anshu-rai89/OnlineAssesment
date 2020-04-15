const express=require('express');

// using express route
const router=express.Router();


router.get('/', function(req, res){
    const distPath = (path.join(__dirname, '../build/index.html'))
    res.sendFile(distPath)
})
router.use('/user',require('./user'));
router.use('/api',require('./api'));



module.exports=router;