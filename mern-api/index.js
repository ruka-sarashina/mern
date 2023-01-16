const { Router } = require('express');
const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    // console.log('request: ', req);
    // console.log('url:', req.originalUrl);
    // console.log('method:', req.method);
    res.json({name: "Taufik", email: "testing@gmail.com"})
    next();
})

router.use('/price', (req, res, next) => {
    res.json({price: 30000})
    next();
})

router.get('/customers', (req, res, next) => {
    res.json({title: "Customer"})
    next();
})

// router.delete('/customers', (req, res, next) => {
//     res.json({title: "Customer"})
//     next();
// })


app.use('/', router)

app.listen(4000);



