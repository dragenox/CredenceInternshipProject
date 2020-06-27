const mongoose = require("mongoose");
var LibrarySchmena  = new mongoose.Schema({
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

mongoose.model("Movie", LibrarySchmena);
