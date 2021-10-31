require('dotenv').config()
const http = require('http')
const app = require('./app')
const { dbConnector } = require('./config/db.js')

const PORT = process.env.PORT || 8080
const server = http.createServer(app)


dbConnector()
    .then( () => {
        server.listen(PORT, () => {
            console.log(`Server running on port: ${PORT} and DB is connected!`)
        })
    })
    .catch( error => {
        console.log(error)
    })
