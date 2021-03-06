const express=require('express');
const passport=require('passport');
// using express route
const router=express.Router();
const optionController=require('../../../controllers/api/v1/optionController');
const questionController=require('../../../controllers/api/v1/questionController');

router.post('/create',questionController.create);
router.get('/getQuestions',questionController.showQuestionALl);
router.post('/:id/create/option',optionController.create);
router.delete('/:id',questionController.deleteQuestion);
module.exports=router;