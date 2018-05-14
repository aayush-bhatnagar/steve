var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('delete', { var1: 'This is delete from JS' });
});

module.exports = router;
