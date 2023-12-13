const express = require("express")
const { chats } = require("./data/data")


const app = express()

app.get('/', (req, res) =>{
    res.send("API is running")
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.listen(3001, console.log("Server is on port 3001"))