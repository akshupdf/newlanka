const jsonServer = require('json-server')
const cors = require('cors')
const data = require('./db.json')
const path = require('path')
const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = require('./range')



server.use(middlewares)
server.use(cors({
    methods: ["GET","OPTIONS","PATCH","DELETE","POST","PUT"],
    header : ("Access-Control-Allow-Headers" , "Content-Range 0-50/10" , 'Content-Range', '0-50/10' ,'Access-Control-Expose-Headers', 'Content-Range 0-50/10'),
    
}))
server.use(jsonServer.bodyParser)
server.use(router)
const PORT = 5000
server.listen(PORT, () => {
    console.log('JSON Server is running')
})

module.exports = server