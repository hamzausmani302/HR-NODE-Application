

const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema({
    name : String,
    id : {type : String , unique : true},
    position : String,
    contactNumber : String,
    experience : Number
})


const Developer = mongoose.model("Developer" , developerSchema);


module.exports = Developer;