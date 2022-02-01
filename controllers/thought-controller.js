const { Thought, User } = require('../models')

const thoughtController = {
    getAllThoughts(req,res) {
        Thought.find({})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },

}

module.exports = thoughtController