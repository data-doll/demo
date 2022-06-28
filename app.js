const express = require("express");
const app = express();

//change1
//change2
//change3




app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello Data Doll")
})
module.exports = app;