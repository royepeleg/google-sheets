const { google } = require("googleapis");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

let lestDayMilking = [];

app.get("/test", (req, res) => {
  res.sendStatus(200);
});
app.get("/get_lest_milking", (req, res) => {
  res.send(lestDayMilking);
  // res.sendStatus(200);
  lestDayMilking = [];
});

app.post("/updates", (req, res) => {
  console.log(req.body);
  lestDayMilking.push(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
