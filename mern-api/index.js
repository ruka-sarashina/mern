const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const cors = require("cors");
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

app.use(bodyParser.json()); // type JSON
app.use(cors());

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message: message, data: data });
});

mongoose.connect('mongodb+srv://taufik:AegVx03pWSSzySdJ@cluster0.zarckef.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  app.listen(4000, () => console.log('Connection Succes'));
})
.catch(err => console.log(err));
