var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res) {
    res.render('contact', { // render from ejs file (like html)
        title : 'Contact us',
    });
});

module.exports = router;
