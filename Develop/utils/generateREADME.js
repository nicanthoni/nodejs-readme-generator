// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'GPLv2':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            break;
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'BSD 3-clause':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        default:
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT'
            break;
        case 'GPLv2':
            return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
            break;
        case 'Apache':
            return 'https://opensource.org/licenses/Apache-2.0'
            break;
        case 'GPLv3':
            return 'https://www.gnu.org/licenses/gpl-3.0'
            break;
        case 'BSD 3-clause':
            return 'https://opensource.org/licenses/BSD-3-Clause'
            break;
        default:
            return '';
    }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    if(license === "Other") {
        return ''
    } else {
        return `This application is licensed under ${license}`
    }
}

// TODO: Create a function to generate markdown for README
const generateREADME = ({ project, description, installation, usage, license, contribute, testing, issues, githubName, emailAddress, }) =>
    `# ${project}
${renderLicenseBadge(license)}

## Description
* ${description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#how-to-Contribute)
* [Tests](#tests)
* [Report Issues](#how-to-Report-Issues)
* [Questions](#ask-questions)

## Installation
* ${installation}

## Usage
* ${usage}

## License
${renderLicenseSection(license)}: 
${renderLicenseLink(license)}

## How to Contribute
* ${contribute}

## Tests
* ${testing}

## How to Report Issues
* ${issues}

## Ask Questions
[Github Profile](https://github.com/${githubName})

[Email Address](${emailAddress})`;

module.exports = generateREADME;