const router = require('express').Router()
const { createNewPhone, getAllPhones} = require('../controller/phones')

const PREFIX = process.env.PREFIX

router
    .route(`${PREFIX}/phones`)
        .get(getAllPhones)
        .post(createNewPhone)
    





module.exports = router