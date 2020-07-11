const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  const query = req.body.cityName;
  const apiKey = "55f4c44b9856d652916f288f9f5ba137";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+",in&appid=" +apiKey+ "&unit="+ unit;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDesc = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<p>The weather currently is " + weatherDesc + "</p>" );
      res.write("<h1>The temperatur in "+query+" is "+ temp +" degree celcius.</h1>");
      res.write("<img src="+ imageURL +">");
      res.send()
    })
  });
})

app.listen(3000,function () {
  console.log("Server is running on port 3000");
});
