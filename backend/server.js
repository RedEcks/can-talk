const express = require("express")
const { chats } = require("./data/data")
const dotenv = require('dotenv')
const connectDB = require("./config/db")

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) =>{
    res.send("It's alive!")
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id', (req,res)=>{
    //console.log(req.params.id)
    const singleChat = chats.find(c=>c._id ===req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 3001

app.listen(3001, console.log(`Server is on port ${PORT}`))