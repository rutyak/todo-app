const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {User} = require("../models/User");

router.post('/login', async function(req, res) {
    try {
      const { email, password } = req.body;
  
      // Find the user by username
      const user = await User.findOne({ email });
      
      // Check if the user exists and the password is correct
      if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful!'});
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.log(error);
    }
     
  });

module.exports = router;