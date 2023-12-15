const express = require("express")
const { chats } = require("./data/data")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

const app = express()
dotenv.config()
connectDB()
app.use(express.json()) // to accept JSON Data

app.get('/', (req, res) =>{
    res.send("It's alive!")
})

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 3001

app.listen(3001, console.log(`Server is on port ${PORT}`))