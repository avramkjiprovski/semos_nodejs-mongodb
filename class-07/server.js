require('dotenv').config()
const http = require('http')
const app = require('./app')
const dbConnector = require('./config/db')

const server = http.createServer(app)
const PORT = process.env.PORT || 8080

dbConnector()
    .then(()=>{
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}. MongoDB connected!`)
        })
    })
    .catch(err => {
        console.log(err)
    })