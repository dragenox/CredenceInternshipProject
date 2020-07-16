const connectDB = require("./model/connection");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const MovieController =  require("./controllers/movies")
const port = 3000;

application.use(bodyparser.urlencoded({
    extended : true
}));

application.set("views", path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine", "hbs")

application.get("/", (request, response) =>{
    // response.send('<h1>Hello World</h1>')
    response.render("index", {})
})

application.use("/movies", MovieController)

connectDB(function(){
    application.listen(port, () => {
        console.log("2 Server Started")
    });
})