const express = require('express');
const admin1Router = express.Router();
const authordata = require('../model/authordata')

/* multer start */
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${+Date.now()}.${file.originalname.split('.')[1]}`
    );
  }
});

const upload = multer({ storage: storage });
const cpUpload = upload.fields([
   { name: 'image', maxCount: 1 }
]);
/* multer end */



/* check cpUpload */
admin1Router.post('/add', cpUpload, async (req, res) => {
    var item = {
      name: req.body.name,
      place: req.body.place,
      main: req.body.main,
      image: req.files?.image[0].path,    
      works: req.body.works,
      numb: req.body.numb
      
    };
    await authordata.create(item);
    res.redirect('/api/authors');
  });

module.exports = admin1Router;