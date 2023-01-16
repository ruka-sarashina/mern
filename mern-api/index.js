const express = require('express');
const app = express();

app.use(() => {
    console.log("hello server");
    console.log('hello satu dua');
    console.log('hello satu tiga');
    console.log('aaa');
    console.log('aaa');
    console.log('ab');
    console.log('ab');
})

app.listen(4000);



