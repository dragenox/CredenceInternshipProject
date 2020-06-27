const express = require("express");
const mongoose = require("mongoose");
const { request } = require("express");

const router = express.Router();

const MovieModel = mongoose.model("Movie")

router.get("/add", (request, response)=>{
    response.render("add-movie")
})
router.post("/add", (request, response)=>{
    //Setter
    console.log(request.body);
    var movie = new MovieModel();
    movie.title = request.body.name;
    movie.img = request.body.img;
    movie.summary = request.body.summary;
    movie.save((error, document)=>{
        if(!error){
            response.redirect("/movies/list")
        } else {
            response.send("Error Occured!")
        }
    })
})

router.get("/list", (request, response) => {
    //Getter
    MovieModel.find({}).lean().exec(function (error, documents){
        if(!error){
            console.log(documents);
            response.render("list", {data : documents})
        }
    })
});

router.get("/list-json",(request, response) => {
    //API
    MovieModel.find((error,documents) => {
        if(!error){
            console.log(documents);
            response.send(documents);
        } else {
            response.send("Error: Unable to get movie List JSON!")
        }
    })
})

module.exports = router;
