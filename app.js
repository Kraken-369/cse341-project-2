const express = require('express');
const bodyParser = require('body-parser');
const { initDB, getDB } = require('./connects/db');
const passport = require('passport');
const session = require('express-session');
const githubStrategy = require('passport-github2').Strategy;
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app
  .use(session({ 
    secret: 'secret',
    resave: false,
    saveUninitialized: true
  }))
  .use(passport.initialize())
  .use(passport.session());
app
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE'
    );
    next();
  })
  .use(cors({ methods: 'GET, POST, PUT, DELETE' }))
  .use(cors({ origin: '*' }))
  .use('/', require('./routers/'));

passport.use(new githubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
  }, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, user);
});

app
  .get('/', (req, res) => res.send(req.session.user !== undefined ? `Hello, ${req.session.user.username}` : 'Hello, guest'))
  .get('/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs',
    session: false
  }), (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  }
);

(async () => {
  try {
    await initDB();
    const db = getDB();

    app.listen(port, () => console.log('-==::APP is running::==-'));
  } catch (error) {
    console.error('Failed to initialize DB:', error);
  }
})();