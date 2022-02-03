const router = require('express').Router()
const thoughtRoutes = require('./thought-routes')
const userRoutes = require('./user-routes')

// Routes API's with /users or /thoughts
router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes) 

module.exports = router