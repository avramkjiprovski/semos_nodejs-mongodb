const BankAccount = require('../models/BankAccount')

const getAllBankAccounts = async (req, res, next) => {
    try {
        const allAccounts = await BankAccount.find()
        return res.status(200).json(allAccounts)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const getBankAccountByHolder = async (req, res, next) => {
    const username = req.params.username

    try {
        const account = await BankAccount.findOne({
            username,
        })
        return res.status(200).json(account)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createBankAccounts = async (req, res, next) => {
    const { holder } = req.body

    try {
        await BankAccount.create({holder, balance: 0})
        return res.status(201).json('Account created!')
    } catch (error) {
        return res.status(500).json(error)
    }
}

const editBankAccount = async (req, res, next) => {
    const username = req.params.username
    const {balance} = req.body

    try {
        await BankAccount.findOneAndUpdate({holder:username, balance})
        return res.status(200).json('Account edited!')
    } catch (error) {
        return res.status(200).json(error)
    }
}

const deleteBankAccount = async (req, res, next) => {
    const username = req.params.username

    try {
        await BankAccount.findOneAndDelete({holder: username})
        return res.status(200).json('Deleted!')
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    getAllBankAccounts,
    getBankAccountByHolder,
    createBankAccounts,
    editBankAccount,
    deleteBankAccount
}