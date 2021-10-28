const mongoose = require('mongoose')

const dbConnector = async () => {
    await mongoose.connect(process.env.DB_URI)
}


module.exports = dbConnector