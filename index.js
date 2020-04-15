const express=require('express');
const port=9000;
// creating express app
const app=express();

//  requiring Database
const db=require('./config/mongoose');

// using passport lib for authentication
const passport=require('passport');


const passportjwt=require('./config/passport-jwt');
const cors=require('cors');
const passportgoogle=require('./config/passport-googleoauth');

// var fallback = require('express-history-api-fallback')

// using middlewares

app.use(express.urlencoded());
app.use(cors());




// setting our routes 
app.use('/',require('./routes'));

//  firing server here 
app.listen(port,function(err)
{
     if(err)  {console.log(`Error in running server:${port}`);return;}

     console.log(`Surver is up and Running at POrt :${port}`); return;
});