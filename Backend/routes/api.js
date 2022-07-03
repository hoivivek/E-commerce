const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
//creating an object of model variable

var User = mongoose.model('User')
//api to host user info
router.post('/postUserInfo', (req, res)=>{
    var body = req.body
    console.log(body)
    var user = new User(body)
    console.log(user)
    user.save().then(data=>{
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })
})
router.get('/getUserInfo', (req, res)=>{
    User.find().then(data=>{
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })
})
module.exports=router