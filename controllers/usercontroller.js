const jwt=require('jsonwebtoken');

const User=require('../model/user');
const Question =require('../model/question');

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
        name:user.name,
        report:user.report
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


module.exports.generateReport=async function(req,res)
{
   try
    {
        console.log(req.body);
        let questions=await Question.find({});

        let total=0;
        let marksScored=0;
        questions.map((question,index)=>
        {
            if(question.correctAns==req.body[`Q${index+1}`][0])
            {
                marksScored+=question.marks;
                total+=question.marks;
            }
        })
 
        let percentageScore=(marksScored/total)*100;
        let msg;
        if(percentageScore>90)
        {
            msg='Great Job We are Proud of You'
        }
        else if(percentageScore>80)
        {
            msg='Good Keep it Up '
        }
        else if (percentageScore>60)
        {
            msg='Improvement Needed Work Hard'
        }
        else 
        {
            msg='You Failed Try Again All The Best'
        }

        let obj={msg:msg,score:percentageScore}
        console.log(obj);
        console.log('user',req.body.id);
        let user=await User.findById(req.body['id']);
       
        user.report.push(obj);
        user.save();
        return res.json(200,
            {
                message:'Report Generated Succussfully',
                data:obj
            })
    }catch(err)
    {
        console.log(err);
        return res.json(500,
            {
                messgae:"error ",
                data:err
            });
    }
}
  