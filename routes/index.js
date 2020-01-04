module.exports = app => {
    require('./articleRoutes.js')(app)
    require('./thoughtRoutes.js')(app)
}