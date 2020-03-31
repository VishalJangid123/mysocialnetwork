var mongoose = require("mongoose");
var config = require("./index");

const db = mongoose.connect(config.mongo_url, { useNewUrlParser:true})
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('An error occured',err));
module.exports = db;