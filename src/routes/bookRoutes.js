const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

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



booksRouter.get('/', function (req, res) {
  
  Bookdata.find()
  .then(function(books){
      res.send(books)
  
  });
});

booksRouter.get('/:id', function (req, res) {
  const id = req.params.id;
  
    
  Bookdata.findOne({ _id: id }).then(function (book) {
    res.send(book);
  });
});


  booksRouter.put('/:id/editbook',async (req,res) =>{
    console.log("kkkkkkkk")
    let book
    try {
      book = await Bookdata.findById(req.params.id)   
      book.title = req.body.title   
      book.author = req.body.author   
      book.genre = req.body.genre
      book.pages = req.body.pages
      book.lang = req.body.lang 
      book.trans = req.body.trans
      await book.save()
      res.redirect(`/books${book.id}`)
    }
    catch{
      if(book == null){
        res.redirect('/addbook')
      }
      else{
        res.render('editbook', 
        {book: book,
          ermsg: 'error in updating'
        })
      }   
    }
    })

    booksRouter.put('/:id/editbookimage', cpUpload, async (req,res) =>{
      console.log("image");
      console.log(req.body);
      let book
      try {
        book = await Bookdata.findById(req.params.id)   
        book.image = req.files?.image[0].path  
        console .log("book="+book);
        
        await book.save()
        res.redirect(`/books${book.id}`)
      }
      catch{
        if(book == null){
          res.redirect('/addbook')
        }
        else{
          res.render('editbook', 
          {book: book,
            ermsg: 'error in updating'
          })
        }   
      }
      })

    booksRouter.delete('/:id/deletebook',async (req,res) =>{
      let book
      try {
        book = await Bookdata.findById(req.params.id)
         await book.remove()      
        res.redirect('/books')
      }
      catch{
        if(Bookdata == null){
          res.redirect('/addbook')
        }
        else{
          res.redirect('/books')
          }        
      }
      })

module.exports = booksRouter;
