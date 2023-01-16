const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

app.use(bodyParser.json()) // type JSON
app.use(cors());

app.use('/v1/auth', authRoutes)
app.use('/v1/blog', blogRoutes)

app.listen(4000);
