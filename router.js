//console.log("I am executed immediately.")
//module.exports = "I am the export for the router file"

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    // homepage view rendern
    res.render('home-guest')
})

// Beispiel für router
router.get('/about', function(req, res) {
    res.send("This is our about page")
})

module.exports = router