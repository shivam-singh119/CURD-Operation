const mongoose=require("mongoose");
require('dotenv').config()

let string = process.env.DB_STRING;

mongoose.connect(string).then(()=>console.log("Connected to atlas "))
.catch((error)=>{console.log("Hence error occure",error)});

module.exports=mongoose;