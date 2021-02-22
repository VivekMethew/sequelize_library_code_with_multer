const express = require('express')
const { User } = require('../modal/user.modal')
const sharp = require('sharp')
const { upload } = require('../middleware/upload.files')
const createError = require('http-errors')
const router = express.Router()

router.get('/users', (req, res, next) => {
    res.send('users')
})

router.post('/users', upload.single('image'), async(req, res) => {
    await sharp(`./upload/${req.file.filename}`)
        .resize(1000, 1000, {
            fit: 'cover',
            width: 500,
            height: 500
        })
        .toBuffer()
        .then(data => {
            console.log(data)
            User.create({
                    fname: "vivek",
                    lname: "kumar",
                    email: "vivekmethew8@gmail.com",
                    password: "123456",
                    phone: "9718546885",
                    imgPath: `http://localhost:5000/upload/${req.file.filename}`,
                    image: 'data:image/png;base64,' + data.toString('base64')
                })
                .then((user) => {
                    res.send(user)
                }).catch((err) => {
                    if (err) throw createError.NotAcceptable('User allready exists')
                })
        })
})

module.exports = router