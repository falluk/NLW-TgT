const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

//Midleware que criptografa a senha! 
server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3003, () => console.log("Foi!!"))