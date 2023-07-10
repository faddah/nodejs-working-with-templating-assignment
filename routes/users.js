const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/users', (req, res, next) => {
	res.render('users', {
		pageTitle: 'Our Users',
		path: '/users',
	});
});

exports.routes = router;