const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors()); // allow to diffent logins to use resources
const login = require("./routes/login");
const signup = require("./routes/signup");
const taskForm = require("./routes/taskForm");
const tasks = require("./routes/tasks");
const updateTask = require("./routes/updateTask");
const deleteTask = require("./routes/deleteTask");
require("dotenv").config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL).then(() => {
  console.log("Connection established !!");
});

app.use(login); // app.use() is use to mount middleware , login is middleware. it executes one by one
app.use(signup);
app.use(taskForm);
app.use(tasks);
app.use(updateTask);
app.use(deleteTask);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
