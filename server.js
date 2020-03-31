var express = require("express");
var app = express();
const config = require("./Config");
const db = require('./Config/database');
const userRounter = require('./Routes/User');

const cors = (req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Access-Control-Allow-Headers','*');
    next();
}


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors);

app.use('/user',userRounter);

app.listen(config.port, console.log("Server started on port %s ", config.port));

