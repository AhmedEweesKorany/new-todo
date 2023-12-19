const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    task:String
})

const mymodel = mongoose.model("myTasks",Schema)

module.exports = mymodel;