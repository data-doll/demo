const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello Data Doll , Have a nice day!!")
})
module.exports = app;