const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send(`Hello World! deployed at ${new Date().toLocaleString()}`);
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
