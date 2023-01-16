const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const productRoutes = require('./src/routes/products');

app.use(bodyParser.json()) // type JSON
app.use(cors())

app.use("/v1/customer", productRoutes);

app.listen(4000);
