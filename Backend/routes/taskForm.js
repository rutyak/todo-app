const express = require("express");
const { Task } = require("../models/Task");
const router = express.Router();

router.post('/taskform', async (req, res) => {
    const {task, desc, time, dayOfMonth, priority, stage, email} = req.body;
    // creating new task object
    const newTask = new Task({ 
      email,
      task,
      description: desc,
      time,
      date: dayOfMonth, 
      priority,
      stage
    });
  
    await newTask.save();
  
    res.status(200).json({ message: `Task added successfully!!`});
  });

module.exports = router