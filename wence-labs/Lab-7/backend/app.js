const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { passport } = require('./config/googleOAuth');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const googleRoutes = require('./routes/googleRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(session({ secret: 'supersecretkey', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});


// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', googleRoutes);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
