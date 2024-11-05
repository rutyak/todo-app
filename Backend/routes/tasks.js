const express = require("express");
const router = express.Router();
const {Task} = require("../models/Task");

router.get('/tasks/:currentuser', async (req, res) => {

    const email = req.params.currentuser;
    try {
      const tasks = await Task.find({email});
      res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: error});
    }
  });

module.exports = router