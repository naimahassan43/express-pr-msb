const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//Middleware
app.use((req, res, next) => {
  console.log("Hello from Middleware!");
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.get("host"));
  console.log(req.originalUrl);

  next();
});

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
