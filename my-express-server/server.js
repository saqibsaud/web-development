const express = require("express");

const app = express();

app.get("/",function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function (req, res) {
  res.send("<h2>Contact me at : saqibsaudc@gmail.com</h2>");
});

app.get("/about",function (req, res) {
  res.send("<h1>I'm Saqib Saud - A Full Stack Developer.</h1>");
});

app.get("/hobby",function (req, res) {
  res.send("<h1>Programming</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
