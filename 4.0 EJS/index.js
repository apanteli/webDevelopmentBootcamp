import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const now = new Date();

var today = now.getDay();

app.get("/", (req, res) => {
  console.log(today);
  res.render("index.ejs", { day: today });
  //   res.render("index.ejs", { day: 6 });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
