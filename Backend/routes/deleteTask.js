const express = require("express");
const router = express.Router();
const {Task} = require("../models/Task");

router.get('/deleteTask/:id', async function(req, res) { 

    const id = req.params.id;
  
    try {
      let deletedtask = await Task.findOneAndDelete({_id: id});
      res.status(204).json(deletedtask); // No content on successful deletion
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  });

module.exports = router