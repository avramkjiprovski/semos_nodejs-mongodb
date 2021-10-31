const mongoose = require('mongoose')

exports.dbConnector = async () => {
    await mongoose.connect(process.env.DB_URI)
}