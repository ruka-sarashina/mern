const express = require("express");

const app = express();
const productRoutes =require('./src/routes/products');

//? cara mengatasi error CORS  
//! 1. bisa menggunakan cara manual 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
})

//! 2. dengan package cors 
// const cors = require('cors');
// app.use(cors())

app.use("/v1/customer", productRoutes);

app.listen(4000);
