const jwt=require('jsonwebtoken');

const User=require('../model/user');


// function to create session
module.exports.createsession = async function(req,res)
{  
    // finding the user 
   try{
    let user= await User.findOne({email:req.body.email});

    if(!user || user.password!=req.body.password)
    {
        return res.json(422,
            {
                message:" invalid user "
            });
    }

    let userInfo={
        _id:user._id,
        name:user.name
    }
//  returning json token
    return res.json(200,
        {
           message:'Sign in find your token and keep it safe ',
           data:
           {
               token:jwt.sign(user.toJSON(),'zcWSL8dB5WEn5k9Af5r7nHWGPOUCiARe',{expiresIn:'1000000'}),
               user:userInfo
           }
        });
} catch(err)
    {
         return res.json(500,
            {
                messgae:"internal server error "
            });
    }

}




module.exports.create=async function(req,res)
{
    try
    {
            
        console.log('inside create',req.body.email);
     
          console.log('craeting user',req.body);
            // crating doctor in db
            let user =await User.create(req.body);
            console.log(user);
            return res.json(200,
                {
                    message:'user created succesffuly'
                });
        
    }catch(err)
    {
         
        return res.json(500,
            {
                messgae:"error ",
                data:err
            });
    }
}