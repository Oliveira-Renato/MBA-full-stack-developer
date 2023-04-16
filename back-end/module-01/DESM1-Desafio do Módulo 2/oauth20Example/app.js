const express = require('express')
  , passport = require('passport')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , config = require('./configuration/config')
  , app = express();

//var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// passport.use(new GoogleStrategy({
//   clientID: config.client_id,
//   clientSecret: config.client_secret,
//   callbackURL: config.callback_url
// },
//   function (accessToken, refreshToken, profile, done) {
//     return done(null, profile);
//   }
// ));

passport.use(new FacebookStrategy({
  clientID: config.facebook_app_id,
  clientSecret: config.facebook_app_secret,
  callbackURL: config.facebook_callback_url,
  profileFields: ['id', 'displayName', 'photos', 'email']
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

// Passport session setup.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { user: req.user });
});

// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }),
//   function (req, res) {
//     res.redirect('/');
//   }
// );

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => console.log('Server up'));