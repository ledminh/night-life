var data = require('../data.js');

module.exports = (app, express, passport) => {

  //========================
  //ASSETS
  //========================
  app.use(express.static('views'));


  //========================
  //LOAD RESULT
  //========================
  app.post("/get-results", (req, res) => {
    if(req.user){
        data.users.findOne({facebook_id: req.user}, (err, user) => {
          if(err)
            throw err;

          user.keyword = req.body;
          user.save();
        });
    }

    data.restaurants.find((err,restaurants) => {
      if(err)
        throw err;

      data.yelp.search({location: req.body, term: "food"})
      .then((yelpData) => {

        var restaurantID = [], results = [];

        restaurants.forEach((restaurant) => {
            restaurantID.push(restaurant.yelp_id);
        });


        yelpData.businesses.forEach((business, iYelp) => {
            var number_going = 0;
            var iRestaurant = restaurantID.indexOf(business.id);

            if( iRestaurant !== -1){
                number_going = restaurants[iRestaurant].number_going;
            }

            results.push({
              name: business.name,
              id: business.id,
              snippet_text: business.snippet_text,
              url: business.url,
              rating_img_url: business.rating_img_url,
              image_url: business.image_url,
              number_going: number_going
            });
        });

        return res.send(results);
      });

    });


  });


  //========================
  //USER INFO
  //========================
  app.get("/user-info", (req, res) => {
    if(req.user){
        data.users.findOne({facebook_id: req.user}, (err, user) => {
          if(err)
            throw err;

          res.send({
              keyword: user.keyword
          });
        });
    }
    else {
      res.send({
        keyword: ""
      });
    }

  });

  //========================
  //SUBMIT_GOING
  //========================
  app.get("/submit-going", (req, res) => {
    //Redirect to log in if not yet
    if(!req.user){
       req.session.submitted_keyword = req.query.keyword;
       req.session.submitted_yelp_id = req.query.yelp_id;
       return res.redirect("/facebook-login");
    }

    
    //When comming back from facebook login
    var this_yelp_id, rest_exist = false, this_keyword;

    if(req.query.yelp_id){
      this_yelp_id = req.query.yelp_id;
      this_keyword = req.query.keyword;
    }
    else {
      this_yelp_id = req.session.submitted_yelp_id;
      this_keyword = req.session.submitted_keyword;
    }


    //Update users database
    data.users.findOne({facebook_id: req.user}, (err, user) => {
         if(err)
            throw err;

        var index = user.restaurants_yelp_id.indexOf(this_yelp_id);

        if(index === -1){
          user.restaurants_yelp_id.push(this_yelp_id);
        }
        else{
          user.restaurants_yelp_id.splice(index, 1);
          rest_exist = true;
        }

        user.keyword = this_keyword;

        user.save();
     });

     //Update restaurants database
     data.restaurants.findOne({yelp_id: this_yelp_id}, (err, restaurant) => {
        if(err)
          throw err;

        if(!restaurant){
            var newRestaurant = new data.restaurants({
              yelp_id: this_yelp_id,
              number_going: 1
            });

            newRestaurant.save();

        }
        else {
          if(rest_exist)
            restaurant.number_going--;
          else {
            restaurant.number_going++;
          }

          restaurant.save();
        }


     });

     //redirect to homepage
     res.redirect("/");

  });

  app.get("/facebook-login", passport.authenticate('facebook'));

  app.get("/facebook-callback", passport.authenticate("facebook", {
    successRedirect: "/submit-going",
    failureRedirect: "/"}));

};
