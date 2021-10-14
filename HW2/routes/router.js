const express = require('express')
const router = express.Router()

const { getAllContent, addNewContent } = require('../controllers/content')

router.get('/', getAllContent)
router.post('/', addNewContent)
// router.put('/', editThisContent)
// router.delete('/', deleteThisContent)

module.exports = router;

