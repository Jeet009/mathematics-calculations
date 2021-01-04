const express = require("express");
const app = express();

// Listening To The Port 8080
app.listen(8080, () => {
  console.log("Connecting ... ");
  console.log("");
  console.log("Connected To 8080 Port.");
  console.log("");
  console.log("Fetching Info ...");
  console.log("You are using Node JS API starter pack.");
  console.log("Developed By Jeet Mukerjee");
  console.log("");
  console.log("");
  console.log("Visit On http://localhost:8080/");
  console.log("About The Developer https://themukherjee.in/");
});
