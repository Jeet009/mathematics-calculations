const express = require("express");

const percentageRoute = require("./routes/percentage");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use("/home", percentageRoute);
app.listen(8080, () => {
  console.log("Connecting ... ");
  console.log("");
  console.log("Connected To 8080 Port.");
  console.log("");
  console.log("Fetching Info ...");
  console.log("You are using Percentage Calculator API.");
  console.log("Developed By Jeet Mukerjee");
  console.log("");
  console.log("");
  console.log("Visit On http://localhost:8080/");
  console.log("About The Developer https://themukherjee.in/");
});
