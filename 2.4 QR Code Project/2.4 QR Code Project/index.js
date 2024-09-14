/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer"; // User interaction
import qr from "qr-image"; // QR code generation
import fs from "fs"; // File system access

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: "userUrl",
      message: "Provide URL to create QR Code:",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!\
    console.info("Answers:", answers);
    console.info(answers.userUrl);
    const url = answers.userUrl;
    var qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_img_user.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error("An error occurred:", error); // Handle errors
    } else {
      // Something else went wrong
      console.error("An error occurred:", error); // Handle errors
    }
  });
