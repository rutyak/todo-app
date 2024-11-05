const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require("../models/User");

router.post('/signup',async (req, res) => {
    try {
      const { email, password } = req.body; // distructuring username and password
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);
    
      //creating new on object
      const newUser = new User({
        email,
        password: hashedPassword,
      });
    
      //saving in mongoDB collection
      await newUser.save();
      //sending response to frontend
      res.status(200).json({ message: 'Signup successful!' });
    } catch (error) {
      console.log(error);
    }
    
  });

module.exports = router