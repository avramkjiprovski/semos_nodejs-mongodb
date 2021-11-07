require('dotenv').config();
/* eslint-disable */
const http = require('http');
const app = require('./app');
const dbConnector = require('./config/db');

const {PORT} = process.env;
const server = http.createServer(app);

dbConnector()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} and DB connected`);
        });
    })
    .catch(err => {
        console.log(err);
    });
