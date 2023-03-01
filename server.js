const { google } = require("googleapis");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

// async function from_google() {
//   const auth = await google.auth.getClient({
//     scopes: SCOPES,
//   });
//   const sheets = google.sheets({ version: "v4", auth });
//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: "1NMjBbIzVdMCgDgBet7aSeukOLHQz_GIyveDSEPAd9K4",
//     range: "Sheet1", // Change this to the range you want to fetch
//   });
//   console.log(response);
// }

// from_google();
app.get("/", (req, res) => {
  // Handle the update from the Google Sheets file
  console.log(req.body);
  res.send(req.body);
  // res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// 77.137.1.114:3000 ip out

// 172.20.0.47:3000
