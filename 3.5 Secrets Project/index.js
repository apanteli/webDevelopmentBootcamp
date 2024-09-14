//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";
const correctPassword = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  console.log(req.body);
  password = req.body["password"];
  console.log(password);
  if (password === correctPassword) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  checkPassword;
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
