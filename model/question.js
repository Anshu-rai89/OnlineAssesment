const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
  title:
  {
      type:String,
      required:true
  },

  options:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Option'
      }
  ],
  marks:
  {
      type:Number,
      required:true
  },
  tag:
  {
      type:String
  },
  correctAns:
  {
       type:String,
       required:true
  }
},{
    timestamps: true
});







const   Question = mongoose.model('Question', questionSchema);
module.exports = Question;