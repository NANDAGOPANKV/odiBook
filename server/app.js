const express = require("express");
const mongoose = require("mongoose");
// cors
const cors = require("cors");
// Books Router
const router = require("./routes/books-router");
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// routes
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://nandagopankv:kM1vfmpGShUIrDuo@cluster0.w2qlbok.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB CONNECTED"))
  .then(() => {
    app.listen(5000, console.log("Server Started"));
  })
  .catch((err) => console.log(err));

// monog nandagopankv kM1vfmpGShUIrDuo
