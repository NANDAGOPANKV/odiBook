const mongoose = require("mongoose");

// set up schema
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  auther: String,
  description: String,
  image: String,
  price: Number,
  avilable: Boolean,
});
module.exports = mongoose.model("Book", bookSchema);
