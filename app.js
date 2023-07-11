const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	res.render('company', {
		pageTitle: 'Our Company',
		path: '/',
	});
});

app.post('/add-user', (req, res, next) => {
	users.push({ name: req.body.username });
	res.redirect('/users');
});

app.get('/users', (req, res, next) => {
	console.log(users);
	res.render('users', {
		pageTitle: 'Our Users',
		path: '/users',
		hasUsers: users.length > 0,
		users: users,
	});
});

app.use((req, res, next) => {
	res.status(404).render('404', {pageTitle: '404 - Page Not Found!', path: '/'});
});

const protocol = `http`;
const server = `127.0.0.1`
const port = `3000`

app.listen(3000, () => console.log(`Node.JS with Express.JS server now running @ ${protocol}://${server}:${port}.`));