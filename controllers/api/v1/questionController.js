const Question=require('../../../model/question');


module.exports.create=async function (req,res)
{
    try
    {
      let question=await Question.create(req.body);

      return res.json(200,
        {
            message:'question created ',
            data:question
        })
    }
    catch(err)
    {
        return res.json(500,
            {
                message:'internal server error'
            });
    }
}


module.exports.showQuestionALl= async function(req,res)
{
    try{

        let question=await Question.find({}).populate({path:'option'});
        
        return res.json(200,
            {
                message:'questions  ',
                data:question
            })

    }catch(err)
    {
        return res.json(500,
            {
                message:'internal server error'
            });
    }
}