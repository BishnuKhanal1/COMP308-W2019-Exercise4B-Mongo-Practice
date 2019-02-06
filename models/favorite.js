let mongoose = require("mongoose");

//create a model class
//schema- schema is basicaaly a table structure
let favoriteSchema = mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    collection: "favorite_things" //this collection refers to first collecteion we created
  }
);
module.exports = mongoose.model("bishnu", favoriteSchema);
