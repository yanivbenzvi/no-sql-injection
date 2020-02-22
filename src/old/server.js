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
        data += '<p>Connected to MongoDB</p>'
    } else {
        data += '<p>Not connected to MongoDB :(</p>'
    }
    res.send(data)
})
app.get('/add', (req, res) => {
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
    func3(req.query.name)
    const data = '<p>User list is in the ' + req.query.name + ' console</p>'
    res.send(data)
})

app.listen('3000', () => {
    console.log('Listening on port 3000')
})


func1 = () => {
    console.log('mongodb func1')
    var newUser = User({
        name:     'Peter Quill' + Math.random().toString(36).substr(2, 5),
        username: 'starlord55' + Math.random().toString(36).substr(2, 5),
        password: 'password' + Math.random().toString(36).substr(2, 5),
        admin:    false,
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

func3 = (userName) => {
    var User = mongoose.model('User')

    User.find({$where: "this.name === '" + userName + "'"}, function (err, users) {
        if (err) {
            throw err
        }

        // object of all the users
        console.log(users)
    })
}