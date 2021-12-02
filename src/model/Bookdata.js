const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://userone:userone@fsd.qrnq0.mongodb.net/Newlibrary?retryWrites=true&w=majority'
);
const Schema = mongoose.Schema;

const BookSchema = new Schema({
 
  title: String,
  author: String,
  genre: String,
  image: String,
  pages: Number,
  lang: String,
  trans: String,
  cover: String
});

var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;
