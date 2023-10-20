// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'project',
            message: "What is the title of your project?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a project description. What is the 'why'?"
        },
        {
            type: 'input',
            name: 'installation',
            message: "How is the application installed?"
        },
        {
            type: 'input',
            name: 'usage',
            message: "How is the application used?"
        },
        {
            type: 'input',
            name: 'contribute',
            message: "How may other developers contribute to this project?"
        },
        {
            type: 'input',
            name: 'testing',
            message: "How is the application tested?"
        }
    ])

 // takes answers from user input, uses as argugment in function that takes in name values (project,description,installation etc) and uses backticks and ${} to add to readme
.then((answers)) => {
    const readMeContent = generateReadMe(answers);
}


//  THIS IS WRONG, RIGHT? Decided on taking object array route above // 

//          const questions = [
// //     "What is the title of your project?",
// //     "Provide a project description. What is the 'why'?",
// //     "How is the application installed?",
// //     "How is the application used?",
// //     "How may other developers contribute to this project?",
// //     "How is the application tested? ",
// //     "",
// // ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();






// -- IMPORTANT -- 
// Bc this application won’t be deployed, 
// you’ll also need to provide a link to a walkthrough video that demonstrates its functionality.
// Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer. 
// You’ll need to submit a link to the video and add it to the README of your project.