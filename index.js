// TODO: Include packages needed for this application
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'list',
    name: 'license',
    message: 'What license do you want to use?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },

    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },

    {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.'
    },

    {
    type: 'input',
    name: 'table of contents',
    message: 'Provide a table of contents for your project.'
    }

    {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
    },

    {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for your project?'
    },

    {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines for your project?'
    },

    {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions for your project?'
    },

    {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
    },

    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
