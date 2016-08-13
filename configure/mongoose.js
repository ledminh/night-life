var data = require('../data.js');
var mongoose = require('mongoose');

module.exports = () => {
    //Get Schema
    var Schema = mongoose.Schema;

    //Connect to host
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/night-life");

    //==========================
    //SET UP MODEL
    //==========================
      //user
      var user_schema = new Schema({
        facebook_id: String,
        keyword: String,
        restaurants_yelp_id: []
      });

      data.users = mongoose.model('users', user_schema);

      //polls
      var restaurant_schema = new Schema({
        yelp_id: String,
        number_going: Number,
      });

      data.restaurants = mongoose.model('restaurants', restaurant_schema);
}
