const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/userRoutes')
const app = express()

// Port 
const PORT = process.env.PORT || 5000

// body Parser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}/`)
})