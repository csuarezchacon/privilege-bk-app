const { Router } = require('express')
const { getPublisher } = require('./publisher.controller')
const router = Router()

router.route('/')
  .get(getPublisher)

module.exports = router