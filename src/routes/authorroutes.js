const express = require('express');
const { db } = require('../model/authordata');
const authorRouter = express.Router();

const authordata = require('../model/authordata');

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

authorRouter.get('/', function (req, res) {
  
  authordata.find()
  .then(function(authors){
      res.send(authors)
  
  });
});



authorRouter.get('/:id',function(req,res){
    const id = req.params.id;
    
    authordata.findOne({_id:id})
    .then(function(author) {
      console.log(author)
        res.send(author) ;
    });   
});

authorRouter.get('/:id/edit', async (req,res) =>{
try {
  const author = await authordata.findById(req.params.id)
  res.render('editauthor', {author: author})
}
catch{
  res.redirect('/authors')
}
})

authorRouter.put('/:id/editauthor',  async (req,res) =>{
  let author
  try {
    author = await authordata.findById(req.params.id)   
    author.name = req.body.name       
    author.place = req.body.place
    author.main = req.body.main
    author.works = req.body.works 
    author.numb = req.body.numb
    await author.save()
    res.redirect(`/authors/${author.id}`)
  }
  catch{
    if(author == null){
      res.redirect('/addauthor')
    }
    else{
      res.render('editauthor', 
      {author: author,
        ermsg: 'error in updating'
      })
    }   
  }
  })


authorRouter.put('/:id/editauthorimage', cpUpload, async (req,res) =>{
  let author
  try {
    author = await authordata.findById(req.params.id)      
    author.image = req.files?.image[0].path  
    
    await author.save()
    res.redirect(`/authors/${author.id}`)
  }
  catch{
    if(author == null){
      res.redirect('/addauthor')
    }
    else{
      res.render('editauthor', 
      {author: author,
        ermsg: 'error in updating'
      })
    }   
  }
  })
  authorRouter.delete('/:id/deleteauthor',async (req,res) =>{
    let author
    try {
      author = await authordata.findById(req.params.id)
       await author.remove()      
      res.redirect('/authors')
    }
    catch{
      if(authordata == null){
        res.redirect('/addauthor')
      }
      else{
        res.redirect('/authors')
        }        
    }
    })
module.exports = authorRouter;