const express = require('express');
const router = express.Router();


router.get('/add', (req, res) => {
    res.send('Response from  product add route');
});


module.exports = router;