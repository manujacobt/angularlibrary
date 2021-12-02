const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@fsd.qrnq0.mongodb.net/Newlibrary?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    place: String,
    main: String,    
    image: String,
    works: String,
    numb: String    
});

var authordata = mongoose.model('authordata',authorSchema);
module.exports = authordata;

