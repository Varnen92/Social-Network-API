const router = require('express').Router()

const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction
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
    .delete(deleteThought)

// /api/thoughts/:thoughtid/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
module.exports = router