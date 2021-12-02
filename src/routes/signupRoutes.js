const express = require('express');
const signupRouter = express.Router();
const UserData = require('../model/user.model');



signupRouter.post('/adduser', async (req, res) => {
  res.header("Acess-Control-Allow-Orgin","*")
  res.header('Acess-Control-Allow-Methods: GET, POST, PATCH, PUT,')
  
  const User = req.body.user;
  console.log(User);
  await UserData.create(User);  
});

module.exports = signupRouter;
