// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Xin chào, Node.js app chạy qua Apache!");
});

// Passenger không cần listen(3000). 
// Chỉ cần export app để Passenger hook vào.
module.exports = app;
