const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv');
dotenv.config();

//its a class hence its Joi and not joi

const { Mongoose } = require("mongoose");
app.use(express.json());

//to use x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

//ROUTES
const coursesRoute=require('./routes/courses');
app.use('/courses',coursesRoute);
const loginRoute=require('./routes/login');
app.use('/login',loginRoute);
const classRoute=require('./routes/class');
app.use('/class',classRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser:true},
  () => {
    console.log("connected to db");
  }
);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}....`));
