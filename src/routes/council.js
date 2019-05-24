let express = require('express')

let router = express.Router()

router.get('/council', (req, res) => {
  res.send('You have requested a councilmember')
})

module.exports = router
