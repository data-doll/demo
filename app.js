const express = require("express");
const app = express();

//change1
//change2


app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello Data Doll , Have a nice day!!")
})
module.exports = app;