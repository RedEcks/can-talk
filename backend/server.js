const express = require("express")
const { chats } = require("./data/data")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler} = require('./middleware/errorMiddleware')

const app = express()
dotenv.config()
connectDB()
app.use(express.json()) // to accept JSON Data

app.get('/', (req, res) =>{
    res.send("It's alive!")
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(3001, console.log(`Server is on port ${PORT}`))