const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/userRoutes')
const morgan = require('morgan')
const app = express()

// Port 
const PORT = process.env.PORT || 5000

// body Parser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

// Set headers
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,token,Accept, Authorization')
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({})
    }
    req.headers['content-type'] = req.headers['content-type'] || 'application/json';
    next();
});

app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}/`)
})