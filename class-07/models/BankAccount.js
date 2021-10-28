const mongoose = require('mongoose')

const BankAccount = mongoose.model('bankaccounts', {
    holder: String,
    currentBalance: Number,
})

module.exports = BankAccount