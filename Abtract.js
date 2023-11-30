const express=require("express");

const router=express.Router();

router.get("/add",(req,res)=>{
    res.send("add");
})
.post("/post",(req,res)=>{
    res.send("post");
})

module.exports=router;