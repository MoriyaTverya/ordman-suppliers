const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


//connect to mpngose
mongoose.connect("mongodb://localhost:27017/ordman")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.error(err));



const manager = require("./routes/manager");
app.use("/", require("./routes/manager"));

app.listen(3001, () => {
  console.log("server listening on port 3001");
});




//connect to mongo
//require routes 
//app.use("/", require("./routes/try"));




