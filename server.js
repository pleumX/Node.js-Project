const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get("/", (req,res) =>{

    res.send("hello Patamawat");


})

app.listen(port, () =>{
    console.log("Server is running on " + port);
})