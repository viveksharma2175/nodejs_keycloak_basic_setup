const Keycloak = require('keycloak-connect');
const hogan = require('hogan-express');
const express = require('express');
const session = require('express-session');

const app = express();

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// Register '.mustache' extension with The Mustache Express
app.set('view engine', 'html');
app.set('views', require('path').join(__dirname, '/view'));
app.engine('html', hogan);

// A normal un-protected public URL.

app.get('/', function (req, res) {
  res.render('index');
});

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/', 
  protected: '/protected/resource'
}));

app.get('/login', keycloak.protect(), function (req, res) {
  res.render('index', {
    result: JSON.stringify(JSON.parse(req.session['keycloak-token']), null, 4)
  });
});


app.get('/members', keycloak.protect(), function (req, res) {
  res.render('index', {
    result: JSON.stringify(JSON.parse(req.session['keycloak-token']), null, 4)
  });
});