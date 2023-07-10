const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootDir = require('./util/path')

const usersRoutes = require('./routes/users');
const coRoutes = require('./routes/company');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(coRoutes);

app.use((req, res, next) => res.status(404).render('404', { pageTitle: '404 - Page Not Found!', path: '/', }));

const protocol = `http`;
const server = `127.0.0.1`
const port = `3000`

app.listen(3000, () => console.log(`Node.JS with Express.JS server now running @ ${protocol}://${server}:${port}.`));