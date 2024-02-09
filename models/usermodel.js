const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name :String,
        age :String,
        mobileNo:String,
        address:String,
        pincode:String,
        eMail:String,
        password:String

    }
)

module.exports=mongoose.model("user",userSchema)