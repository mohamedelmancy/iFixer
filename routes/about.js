var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res) {
    res.render('about', { // render from ejs file (like html)
        title : 'About us',
    });
});

module.exports = router;
