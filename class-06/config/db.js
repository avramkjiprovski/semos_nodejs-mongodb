const { connect } = require('mongoose') // samo connect ni treba



const dbConnector = async () => { // wrapper funkcija
    await connect(process.env.MONGO_URI)
}


module.exports = dbConnector

