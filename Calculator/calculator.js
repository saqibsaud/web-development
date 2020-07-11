const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function (req, res) {
  var w = Number(req.body.w);
  var h = Number(req.body.h);

  var result = w / (h * h);
  res.send("Your BMI is " + result);
});

app.listen(3000,function () {
  console.log("Server is running on port 3000");
});
