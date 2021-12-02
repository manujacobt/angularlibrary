const express = require('express');
const loginRouter = express.Router();
const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken')

loginRouter.post('/check', async (req, res) => {
  const usr = req.body
  console.log(usr)  
  
  let userData = req.body
  console.log(userData);
  const user1 = await UserModel.findOne(usr); 
  console.log(user1);
  
  if(userData.uname.trim()=="")
  {      
    res.status(401).send('Invalid Username')
  }
    else
      if(user1===null){
        res.status(401).send('Invalid Username')
      } else 
      if ( user1.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user1.username,role:user1.role}
        console.log("payload="+payload.subject)
        let token = jwt.sign(payload, 'secretKey')
        console.log("token="+token)
        res.status(200).send({token,role:user1.role})
      }
    
  })



module.exports = loginRouter;
