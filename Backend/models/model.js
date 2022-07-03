const mongoose = require('mongoose')
const schema = mongoose.Schema
// Users collection schema

const UsersSchema = new schema({
    Name : {type:String, required:true},
    Email : {type:String , required:true},
    Contact: {type:Number , required:true},
    Password : {type:String , required:true}
})

mongoose.model('User', UsersSchema)