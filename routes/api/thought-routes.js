const router = require('express').Router()

const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought
} = require('../../controllers/thought-controller')

// /api/thoughts

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/thoughts/:id

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

module.exports = router