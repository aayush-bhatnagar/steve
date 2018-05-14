var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('called Steve.html');
  res.render('steve');
});

module.exports = router;
