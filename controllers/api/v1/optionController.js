const Option=require('../../../model/option');
const Question =require('../../../model/question');

module.exports.create=async function(req,res)
{
    try
    {
        let question=await Question.findById(req.params.id);

        if(question)
        {
                
            // our id is ome more than options our question have 
            let id=question.option.length+1;
            

            // craeting our url
            let option=await Option.create(
                {
                    id:id,
                    question:question._id,
                    text:req.body.text,
        
                }
            );

            // adding option in our question option array
            question.option.push(option);
            question.save();

            return res.json(200,
                {
                    message:'option created succfully',
                    data:option
                });

        }
        else
        {
            return res.json(400,
                {
                    message:'question dosnt exits',
                });
        }


}catch(err)
{

    return res.json(500,
        {
            message:'Server error ',
            data:err
        });
}
}