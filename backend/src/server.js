import express from "express";
import dotenv from "dotenv";
import path from "path";
import {ENV} from "./lib/env.js"
dotenv.config();
const app=express();

const __dirname=path.resolve();
console.log(process.env.PORT);

if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}
app.listen(ENV.PORT,()=>{
    console.log("server is listen on port 3000");
})