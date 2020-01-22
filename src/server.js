const User     = require('./models/user')
const express  = require('express')
const mongoose = require('mongoose')
const app      = express()

mongoose.connect('mongodb://192.168.44.15:27017/myapp', {useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log('Database connected')
})

mongoose.connection.on('error', error => {
    console.log('Database connection failed')
    console.log(error)
})

app.get('/', (req, res) => {
    let data = '<p>Hello Vagrant!</p>'
    if (mongoose.connection.readyState) {
        func1()
        data += '<p>Connected to MongoDB</p>'
    } else {
        data += '<p>Not connected to MongoDB :(</p>'
    }
    res.send(data)
})


app.get('/find', (req, res) => {
    console.log('trying to find users')
    func2()
    const data  = '<p>User list is in the ' + req.query.id + ' console</p>'
    res.send(data)
})

app.listen('3000', () => {
    console.log('Listening on port 3000')
})


func1 = () => {
    console.log('mongodb func1')
    var Schema = mongoose.Schema

    // create a schema
    var userSchema = new Schema({
        name:       String,
        username:   {type: String, required: true, unique: true},
        password:   {type: String, required: true},
        admin:      Boolean,
        location:   String,
        meta:       {
            age:     Number,
            website: String,
        },
        created_at: Date,
        updated_at: Date,
    })

    // the schema is useless so far
    // we need to create a model using it
    var User = mongoose.model('User', userSchema)

    var newUser = User({
        name:     'Peter Quill',
        username: 'starlord55' + Math.random().toString(36).substr(2, 5),
        password: 'password',
        admin:    true,
    })

    // save the user
    newUser.save(function (err) {
        if (err) {
            throw err
        }

        console.log('User created!')
    })

}

func2 = () => {
    var User = mongoose.model('User')

    User.find({}, function (err, users) {
        if (err) {
            throw err
        }

        // object of all the users
        console.log(users)
    })
}