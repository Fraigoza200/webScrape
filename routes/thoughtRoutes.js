const { Thought } = require('../models')

module.exports = app => {
    // Get all of users thoughts 
    app.get('/thoughts', (req,res) =>{
        Thought.find()
            .populate('articles')
            .then(thoughts => res.json(thoughts))
            .catch(e => console.error(e))
    })

    // Post users thoughts 
    app.post('./thoughts', (req,res) =>{
        Thought.create(req.body)
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })
}