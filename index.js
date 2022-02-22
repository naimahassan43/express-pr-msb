const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//route declare
app.get("/", (req, res) => {
  res.send("<h1>Helloooo</h1>");
});
app.get("/about", (req, res) => {
  res.json({ title: "Hi JSON" });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.body.email);
  console.log(req.body.password);

  res.send("Login Successful");
});

app.listen(3000, () => console.log("Server running on port 3000"));
