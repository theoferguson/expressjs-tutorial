const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('Users')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', { firstName: req.body.firstName })
    }
})

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "theo" })
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`get user ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`get user with ${req.params.id}`)
    }).delete((req, res) => {
        res.send(`get user with ${req.params.id}`)
    })

const users = [{ name: 'kyle' }, { name: 'john' }]

// allows capture of params without defining within each route accessable by req.user
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router