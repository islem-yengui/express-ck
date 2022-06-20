const express = require("express");
var app = express();
app.use(
  (date = (req, res, next) => {
    let newdate = new Date();
    let hours = newdate.getHours();
    let day = newdate.getDay();
    if (hours < 9 || hours > 17 || day == 6 || day == 0) {
      res.send("closed");
    } else {
      next();
    }
  })
);
app.get("/home", (req, res) => {
  res.send("<h1> Hello </h1>");
});
app.get("/services", (req, res) => res.send(services));
var PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is ruming on port ${PORT}`)
);
