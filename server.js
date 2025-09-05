const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello từ Node.js!");
});

app.get("/moi", (req, res) => {
  res.send("Hello from moiBot at /moi!");
});

module.exports = app; // BẮT BUỘC
