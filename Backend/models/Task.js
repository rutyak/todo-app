const mongoose = require("mongoose");
//---------Task-Collection----------
const taskSchema = new mongoose.Schema({
    email: String,
    task: String,
    description: String,
    time: String, 
    date: Number, 
    priority: String,
    stage: String
  });

  let Task = mongoose.model('tasks', taskSchema); 

  module.exports = {Task}