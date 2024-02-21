// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
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
]

// TODO: Create a function to write README file
function writeToFile (fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
}

// TODO: Create a function to initialize app
function init () {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    writeToFile('README.md', generateMarkdown(answers))
  })
}

// Function call to initialize app
init()
