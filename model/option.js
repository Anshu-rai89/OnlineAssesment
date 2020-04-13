const mongoose = require('mongoose');


const optionSchema = new mongoose.Schema({
   id:
   {
       type:Number,
       required:true
   },

   question:
   {
         type:mongoose.Schema.Types.ObjectId,
         ref:'Question',
         required:true
   },
   text:
   {
       type:String,
       required:true
   },
},{
    timestamps: true
});







const   Options = mongoose.model('Option', optionSchema);
module.exports = Options;