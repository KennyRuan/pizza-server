var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu', { title: req.session.userid });
});

module.exports = router;
