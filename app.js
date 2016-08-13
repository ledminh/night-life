var express = require('express');
var app = express();

var passport = require('passport');


//Configure
require('./configure/configure.js')(app, passport);

//mongoose
require('./configure/mongoose.js')();

//Set routes
require('./routes/routes.js')(app, express, passport);

app.listen(8080);

console.log("Night Life app is now ready on port 8080");
