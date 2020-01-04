const { model, Schema } = require('mongoose')

const Article = require('./Article')(model,Schema)
const Thought = require('./Thought',)(model, Schema)


module.exports = { Article, Thought }