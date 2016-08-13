var bodyParser = require('body-parser');
var Yelp = require('yelp');
var session = require('express-session');

var data = require('../data.js');


module.exports = (app, passport) => {


  //Middleware
  app.use(bodyParser.text({
    defaultCharset: "utf-8"
  }));

  //For passport
  app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  require('./passport.js')(passport);

  //Setup yelp
  data.yelp = new Yelp({
    consumer_key: "dExH2HCmeDwgvATudKU-mA",
    consumer_secret: "ROHTjyJudzywVdF0EzOKFljfpro",
 	  token: "Yonop8E4UgCsc5dZhdsASrlqqd4wSAXx",
    token_secret: "MODLVtyqUHYoODD1PbcXhJNJWbc"
  });
};
