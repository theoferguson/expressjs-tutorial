const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// logger defined first, will show up in console for all routes vs. if below index or /users
// app.use(logger)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', { text123: "Hello World" })
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)

