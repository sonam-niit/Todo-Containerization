const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/todos", require("./routes/todoRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
