const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json(['Allen', 'Tony', 'Rose'])
})

router.get('/:id', (req, res, next) => {
  res.json(`the info of user${req.params.id}`)
})

router.post('/', (req, res, next) => {
  res.json('create user success')
})

module.exports = router