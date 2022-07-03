const Express= require('express')
const Cors = require('cors')
const Mongoose= require('mongoose')
const Cookie= require('cookie-parser')

const app= Express()


Mongoose.connect('mongodb://127.0.0.1:27017/Users', {useNewUrlParser:true}).then(()=>{
    console.log('MongoDB connected')
}).catch(err=>(console.log(err)))

var server= app.listen(3000, ()=>{
    console.log('Server is running on port no. %d', server.address().port)
})

var options = {
    origin : ['http://localhost:4200'],
    methods : 'GET, POST, PUT, DELETE',
    credentials : true
}
require('./models/model')
app.use(Express.json())
app.use(Express.urlencoded({extended : true}))
app.use(Cookie())
app.use(Cors(options))
app.use('/api', require('./routes/api'))


module.exports = app