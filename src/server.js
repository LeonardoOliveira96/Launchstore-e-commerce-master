const express = require('express') 
const nunjucks = require('nunjucks') 
const routes = require('./routes')
const methodOverride = require('method-override')
const path = require('path')



const server = express()
server.use(express.static(__dirname + 'public'))
server.use(express.urlencoded({ extended: true }))
server.use(methodOverride('_method'))
server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log('Run Server Run!!!')
})