const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const productRoutes = require('./src/routes/products');
const authRoutes = require('./src/routes/auth');

app.use(bodyParser.json()) // type JSON
app.use(cors());

app.use("/v1/customer", productRoutes);
app.use('/v1/auth', authRoutes)

app.listen(4000);
