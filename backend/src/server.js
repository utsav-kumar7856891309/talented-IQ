import express from "express";
import dotenv from "dotenv";
import {ENV} from "./lib/env.js"
dotenv.config();
const app=express();
console.log(process.env.PORT);
app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from backend hitting"});
})
app.listen(ENV.PORT,()=>{
    console.log("server is listen on port 3000");
})