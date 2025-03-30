const express = require('express')
const mongoose=require("mongoose");
const db=require("./config/db")
const productRoutes = require('./router/product_router');

const app = express() 

// app.use(express.json());//middleWare
// app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api/products/', productRoutes);


app.listen(3000, () =>{
    console.log('Server is running on port 3000')
});

