const { Article } = require('../models')

module.exports = app => {


    // Get all articles 
    app.get('./articles', (req,res) => {
        Article.find()
            .populate('notes')
            .then(articles => res.json(articles))
            .catch(e => console.error(e))
    })

    // Post on articles 
    app.post('./articles', (req,res) => {
        Article.create(req.body)
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })
}