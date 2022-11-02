const { default: mongoose } = require("mongoose");


const userSchema=new mongoose.Schema({
    username:{type:String, required:true},
    email:{type: String, unique:true},
    password:{type:String, required:true},
    bmi_history:[Number]
})

const userModel=mongoose.model('user',userSchema);

module.exports=userModel