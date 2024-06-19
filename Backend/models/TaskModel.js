// in the models folder write schema


const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Task",taskSchema)