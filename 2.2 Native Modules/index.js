const fs = require("node:fs");

const content = "Hello from Andreas!\nHello World!";

fs.writeFile("./message.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written successfully");
  }
});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
