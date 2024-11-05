const express = require("express");
const router = express.Router();
const {Task} = require("../models/Task");

router.put('/updateTask/:id', async (req, res) => {
    try {
      const id  = req.params.id;
      const updatedTask = await Task.findByIdAndUpdate(
        { _id: id },
        { $set: req.body }, 
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      res.json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router