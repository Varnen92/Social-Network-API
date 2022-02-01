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

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },

    createThought({ params, body}, res) { 
        console.log(body)
        console.log(params)
        Thought.create(body)
        .then(({ _id}) => {
            return User.findOneAndUpdate(
                { _id: body.userId},
                { $push: { thoughts: _id} },
                { new: true}
            )
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = thoughtController