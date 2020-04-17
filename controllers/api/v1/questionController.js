const Question=require('../../../model/question');
const Option=require('../../../model/option');

module.exports.create=async function (req,res)
{
    try
    {
        console.log(req.user);
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

        let question=await Question.find({}).populate({path:'options'});
        
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


module.exports.deleteQuestion=async function(req,res)
{
    try
    {
          let question=await Question.findById(req.params.id);
          
          console.log(question.title);
          if(question)
          {
                
            await Option.deleteMany({question:req.params.id});
            console.log('question deleted');
            question= await Question.findByIdAndDelete(question._id);

            return res.json(200,
                {
                    message:'Question deleted'
                });
          }else
          {
              return res.json(400,
                {
                    message:'Question dosnt exits'
                });
          }
    }catch(err)
    {   console.log(err);
        return res.json(500,
            {
                message:'internal server error'
            });
    }
}