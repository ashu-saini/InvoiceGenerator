var express = require('express');
var router = express.Router();

router.get('/test', (req, res) => {
    res.send('Testing Route');
});

router.post('/post-route', (req,res) => {
//do later
});

router.put('/put-route', (req,res) => {
    // do later
})

router.delete('/delete-route', (req,res) => {
    // do later
})

module.exports = router;