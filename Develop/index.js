// 
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateREADME');

const questions = [
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
    },
    {
        type: 'input',
        name: 'issues',
        message: "How may one report issues?"
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: "What is the best email address to contact you at?"
    },
    {
        type: 'input',
        name: 'githubName',
        message: "What is your Github username?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license is used for your application?",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Other"]
    }

]

// // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers)
            const readMeContent = generateREADME(answers);

            fs.writeFile('README.md', readMeContent, (err) =>
                err ? console.log(err) : console.log('A new README.md file has been successfully created!')
            );
        });
}

// // Function call to initialize app
init();


// -- IMPORTANT -- 
// Bc this application won’t be deployed, 
// you’ll also need to provide a link to a walkthrough video that demonstrates its functionality.
// Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer. 
// You’ll need to submit a link to the video and add it to the README of your project.