

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// Use the inquirer npm package to get user input.
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "Type in Your URL: ",
            name: "URL",
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        // Use the qr-image npm package to turn the user entered URL into a QR code image.
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
        // Create a txt file to save the user input using the native fs node module.
        fs.writeFile("URL.txt", url, (err) => {
            console.log("File has been saved");
        });
    });