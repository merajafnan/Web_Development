import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: 'user_URL',
        message: 'Enter your URl',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var userURL = answers.user_URL
    var qr_svg = qr.image(userURL);
    qr_svg.pipe(fs.createWriteStream('./newQR.png'));

    fs.writeFile('user_input_url.txt', userURL, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
;