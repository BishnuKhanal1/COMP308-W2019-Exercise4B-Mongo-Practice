let express = require("express");
let router = express.Router();
//also requre mongoose
let mongoose = require("mongoose");

//create a reference to the database schema (which is in in models)
//for this we need models folder //make models folder

let contact = require("../models/favorite"); //reference to contact.js file in models folder

//now we need to use the router
/*Get Contact List Page - read operation */
router.get("/", (req, res, next) => {
  favorite.find((err, favoriteList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(favoriteList);

      res.render("favorites/index", {
        title: "favorite List",
        favoriteList: favoriteList
      });
    }
  });
});

module.exports = router;
