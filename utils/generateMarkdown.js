// Function to return chosen license badge or '' if none 
function renderLicenseBadge (license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  } else {
    return ''
  }
}


// Function to return license link or '' if none
function renderLicenseLink (license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL') {
    return '[GPL](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD') {
    return '[BSD](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return ''
  }
}

// Function to return license section or '' if none
function renderLicenseSection (license) {
  if (license === 'None') {
    return ''
  } else {
    return `## License
        This project is licensed under the ${license} license.`
  }
}

// Function to generate markdown data
function generateMarkdown (data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
    ${data.tableOfContents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## How to Contribute
  ${data.contribute}
  ## Test
  ${data.test}
  ## Questions
  If you have any questions, please feel free to contact me at ${data.email}.
  You can also find me on GitHub: [${data.username}]
`
}

// Module to export to index.js
module.exports = generateMarkdown
