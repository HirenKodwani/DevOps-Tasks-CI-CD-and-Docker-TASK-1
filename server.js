const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Deployed Successfully!");
});

app.get("/health", (req,res)=> res.json({status:"ok",uptime: process.uptime()}));

