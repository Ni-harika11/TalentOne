const mongoose=require('mongoose');

// Register schema 
const userRegister=new mongoose.Schema({
  name: {type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
}, { timestamps: true })
module.exports=mongoose.model('Users',userRegister);

 