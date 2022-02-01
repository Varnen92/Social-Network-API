const { Thought, User } = require('../models')

const thoughtController = {
    // get all thoughts
    getAllThoughts(req,res) {
        Thought.find({})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },
    // get a thought by the :id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },
    // create a new thought and push to the username's array of thoughts
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
    },

    // Update an existing thought by :id
    updateThought({ params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id}, body, { new:true})
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id'})
                return
                }
                res.json(dbThoughtData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = thoughtController