const express = require('express');
const router = express.Router();
// custom routes go here

router.get('/hello', (req, res) => {
    console.log(req.query)
    res.send("We're Rich! *Compressed Gold.png*" + req.query.name )
})

router.get('/sayHi', (req, res) => {
    res.send('Hello! This is a test!!!')
    })

module.exports = router;