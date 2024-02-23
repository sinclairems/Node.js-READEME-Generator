// Importing inquirer 8.2.4
const inquirer = require('inquirer')
// Importing fs
const fs = require('fs')
// Importing local module 
const generateMarkdown = require('./utils/generateMarkdown')

// README Questions Array
const questions = [
  {
    type: 'list',
    name: 'license',
    message: 'Use the arrow and Enter keys to select the license.',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
  },

  {
    type: 'input',
    name: 'title',
    message: 'Provide a title for your project.'
  },

  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.'
  },

  {
    type: 'input',
    name: 'tableOfContents',
    message: 'Provide an optional table of contents.'
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Optional installation instructions:'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Optional usgae information:'
  },

  {
    type: 'input',
    name: 'credits',
    message: 'List collaborators and associated links.'
  },

  {
    type: 'input',
    name: 'contribute',
    message: 'Optional contribution guidelines.'
  },

  {
    type: 'input',
    name: 'test',
    message: 'Optional test instructions.'
  },

  {
    type: 'input',
    name: 'email',
    message: 'Optional email address:'
  },

  {
    type: 'input',
    name: 'username',
    message: 'GitHub username:'
  }
];

// Function to write README
function writeToFile (fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
};

// Function to initialize 
function init () {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    writeToFile('README.md', generateMarkdown(answers))
  })
};

// Function call
init();
