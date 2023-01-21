const jsonServer = require('json-server')
const cors = require('cors')
const data = require('./db.json')
const path = require('path')
const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(cors())
server.use(jsonServer.bodyParser)
server.use(router)
const PORT = 5000
server.listen(PORT, () => {
    console.log('JSON Server is running')
})

module.exports = server