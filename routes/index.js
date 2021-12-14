var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const debug = require('debug')('not-for-lars-eyes:index');
const controller = require('../bin/Controller/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather Info' });
});

module.exports = router;
