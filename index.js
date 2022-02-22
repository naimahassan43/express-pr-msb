const express = require("express");
const app = express();

//route declare
app.get("/", (req, res) => {
  res.send("<h1>Helloooo</h1>");
});
app.get("/about", (req, res) => {
  res.json({ title: "Hi JSON" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
