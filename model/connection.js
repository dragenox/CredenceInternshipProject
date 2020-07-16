const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/basic-app";

module.exports = function connectDB(callback){
    mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});
    var database = mongoose.connection;
    database.on("error", function(error){
        console.log("Error connecting to mongoDB");
        process.exit(1);
    });
    database.once("open", function(){
        console.log("1 Connected to mongoDB");
        callback();
    });
};

const Movie = require("./movie.model");

