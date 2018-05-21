"use strict"
const 
express = require("express"),
app = express(),
bodyParser   = require('body-parser'),
cfg = require('./app/config'),
core = require('./app/models')
;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

// Trust the X-Forwarded-* header
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//including configuration file
app.set('cfg', cfg);
app.set('core', core(app , cfg));
app.use((req, res, next) => {
	res.api = {
		'data' : {},
		'error' : [],
		'status' : 200
	};
	next();
});

require('./app/router')(app);


app.listen(app.get('cfg').web.port);
console.log('Application running at : ' + app.get('cfg').web.port);

