require('dotenv').config();
const path = require('path');
const hbs = require('hbs');
const express = require('express');
const process = require('process');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sha256 = require('sha256');

const { helloMiddleware } = require('./middleware/allMiddleWare');
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/userRouter');

const app = express();
const PORT = 3000;

// Start server settings
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

// End server settings

// Start middleware section
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cookieParser());
app.use(session({
  store: new FileStore({}),
  secret: process.env.SECRET ?? 'qwerty',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'auth',
}));
// End middleware section
app.use(helloMiddleware)
// Start routes section
app.use('/', indexRouter);
app.use('/users', usersRouter);
// End routes section

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Server started');
});
