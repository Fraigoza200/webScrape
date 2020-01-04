module.exports = (model, Schema) => {
    const Article = new Schema({
        headline: String,
        summary: String,
        URL: String,
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }]
    })

    return model('Article', Article)
}