const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  const axios = require("axios");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let users = [{ name: "Alice" }, { name: "Bob" }];
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/get-data-proxy", (req, res) => {
  console.log(req.body);
  res.json(users);
});

app.post("/update-user", (req, res) => {
  console.log(req.body);
  res.json(users);
});

app.post("/idp-auth/api/v1/auth/token", (req, res) => {
  console.log(req.body);
  res.json(
    {
      data: {
        "accessToken": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1cm46dXNlcjo5NDA1MDI4MDc0ODY4MzY1NDQwOCIsIm9yZ2FuaXphdGlvbiI6bnVsbCwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW5AbG9jYWxob3N0LmNvbSIsImV4cCI6MTcxOTQ4NjMwMywiaWF0IjoxNzE5NDgyNzAzLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdC5jb20iLCJzaWQiOiJ1cm46dXNlcjo5NDA1MDI4MDc0ODY4MzY1NDQwOCJ9.It4TkVtImXhKGI8xg4S8Ygx51ZEaO4ntqf-En6RlLFbbkagctqTuDRYzxif2G52RHPxDgqCmNhIr3W6WJT2Pq4B7f_6kQ7GaVS0cEUW0RAvwrQ0nKZKHtUpBCMG1ruC7Ya7Ywdk0ZzlS-VMN25UX0Ei0_b2lrJLWOW3VsjQ64LGbOBSwCz4r92MG0YoWfoRd2lri1K3wI3n2lgPmy-DTEnswoscyvST9fLl3HOjI7sOYDMBiV0aA1EHSS6ZEaLzOjdrNe4RwxoRlUTchxe3v60WaWvWJDtnFeXCKNqRIadeVTvXzANQ6uG0kHZYpSl6jApdCzAb23H1vbaCJE-nDwg",
        "expiresIn": 1719486303499
      }
    }
  );
});

// http://localhost:5000/conponents/tempate-proxy-call-api.yaml.yaml
