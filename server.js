const axios = require('axios')
const cheerio = require('cheerio')
const { join } = require('path')
const express = require('express')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// require('mongoose')
//   .connection
//   .once('open', () => 

app.listen(8080)