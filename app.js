const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userRouter=require("./containers/userrouter")
const postRouter=require("./containers/postrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://devadathan:10028030@cluster0.knxmb.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/post",postRouter)
app.use("/api/blog",userRouter)
app.listen(3001,()=>{
    console.log("Server Running")
})