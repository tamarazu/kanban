const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(`WELCOME`)
})

module.exports = router