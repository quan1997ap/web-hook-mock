const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let users = [{ name: "Alice" }, { name: "Bob" }];
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/update-user", (req, res) => {
  console.log(req.body);
  res.json(users);
});


// http://localhost:5000/conponents/tempate-proxy-call-api.yaml.yaml