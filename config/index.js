module.exports = require('mongoose')
    .connect('mongodb://localhost/userdb', {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })