var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { var1: 'This is from User.js File' });
});

module.exports = router;
