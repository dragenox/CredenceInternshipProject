const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/basic-app", {useUnifiedTopology: true, useNewUrlParser: true} ,(error) => {
    if(!error){
        console.log("Connected to mongoDB");
    } else {
        console.log("Error connecting to mongoDB");
    }
});

const Movie = require("./movie.model");