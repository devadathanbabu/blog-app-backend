const express=require("express")
const postModel=require("../models/postmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    console.log(data)
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("userId","name  mobileNo  -_id")
    .exec()
    res.json(result)
})

module.exports=router
