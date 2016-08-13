var FBStrategy = require('passport-facebook').Strategy;

var data = require('../data.js');

var callbackFunction = (accessToken, refreshToken, profile, done) => {
  process.nextTick(() => {
      data.users.findOne({facebook_id: profile.id}, (err, user) => {
          if(err)
            return done(err);

                  
          if(!user){
            var newUser = new data.users({
              facebook_id: profile.id
            });

            newUser.save();
            return done(null, newUser.facebook_id);
          }

          return done(null, user.facebook_id);
      });


  });

};


var thisFBStrategy = new FBStrategy({
  clientID: "1419878661372646",
  clientSecret: "80f2e477e51780853d188ae8071d30b8",
  callbackURL: "/facebook-callback",
  profileFields : ['id']
}, callbackFunction);



module.exports = (passport) => {
    passport.serializeUser((facebook_id, done) => {
      done(null, facebook_id);
    });

    passport.deserializeUser((facebook_id, done) => {
      done(null, facebook_id);
    });

    passport.use(thisFBStrategy);
};
