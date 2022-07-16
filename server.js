const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const PORT = process.env.PORT || process.env.API_PORT

const app = express()
app.use(express.json())
app.use(cors())

//register
app.use('/api/auth',authRoutes)

const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`Server is listetning on ${PORT}`)
})

const monogUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/mongodb`
mongoose.connect(monogUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},console.log('connected')
)