import React from 'react';
import ReactDOM from 'react-dom/server';
import Root from '../src/apps/test/root';
import Html from '../src/helpers/Html';
var express = require('express');
var router = express.Router();
var fetch=  require("request");//async
var request = require('sync-request');//sync
var rp = require('request-promise');
var swig = require('swig');
var path = require("path");
var Bluebird = require('bluebird');
var rp = require('request-promise');
var logger = require("../logs/logHelper").helper;  
router.get('/', function(req, res, next) {
	// res.render('s-pages/index', { title: '页面管理'});
    res.send("this is a string");
});
router.get('/test', function(req, res, next) {
	res.render('pages/test', { title: 'test',html:"this is a swig test page.(with swig template)"});
});
router.get('/ssr', function(req, res, next) {
	console.log(ReactDOM)
	try {
		var html = ReactDOM.renderToString(<Root />);
	}catch(err) {
		console.log(err)
	}
	console.log(3)
	res.send(html);
});
router.get('/page', function(req, res, next) {
	const component = (
      <Root />
    );
	res.send('<!doctype html>\n' +
      ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component}/>));
});
module.exports = router;
// > node-inspector
// > supervisor --debug-brk debugme.js
// > supervisor --debug ./bin/www
////http://127.0.0.1:8080/?port=5858