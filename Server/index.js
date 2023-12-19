const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app =express()
const model = require('./models/data')

mongoose.connect("")/// add your database link here (mongoDB link !!)

app.use(cors())
app.use(express.json())

app.get('/get',(req,res)=>{
    model.find().then(e=>res.json(e)).catch(e=>console.log(e))
})

app.post('/add',(req,res)=>{
    const task = req.body.task

    model.create({
        task:task
    }).then(e=>res.json(e)).catch(e=>res.json(e))
})

app.delete("/delete/:id",(req,res)=>{
    const userID = req.params.id.trim();
    model.findByIdAndDelete({_id:userID}).then(e=>res.json(e)).catch(e=>res.json(e))
})

app.listen(3010,()=>{

    console.log(`your server is running on port https://localhost:3010`)
})
