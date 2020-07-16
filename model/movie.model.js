const mongoose = require("mongoose");
var movieSchema  = new mongoose.Schema({
    title : {
        type : String,
        required : "Required"
    },
    img : {
        type : String,
        required : "Required"
    },
    summary : {
        type : String,
        required : "Required"
    },
});

module.exports = Movie = mongoose.model("Movie", movieSchema);
