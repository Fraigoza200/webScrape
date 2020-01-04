module.exports = (model, Schema) => {

    const Thought = new Schema({

        thought: String,
        article: {
            type: Schema.Type.ObjectId,
            ref: 'Article'
        }
    })

    return model('Article', Article)
}