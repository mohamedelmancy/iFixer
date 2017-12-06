var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res) {
    res.render('life', { // render from ejs file (like html)
        title : 'Lifetime Warranty',
    });
});

module.exports = router;
