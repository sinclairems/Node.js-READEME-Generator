// Function to return chosen license badge or '' if none 
function renderLicenseBadge (license) {
  if (license === 'MIT') {
    return '[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'Apache') {
    return '[![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/license/apache-2-0)'
  } else if (license === 'GPL') {
    return '[![GPL License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)'
  } else if (license === 'BSD') {
    return '[![BSD License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/license/BSD-3-Clause)'
  } else {
    return ''
  }
}

// Function to generate markdown data
function generateMarkdown (data) {
  return `# ${data.title}
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
You can also find me on GitHub: ${data.username}
${renderLicenseSection(data.license)}
`
}

// Function to return license section or '' if none
function renderLicenseSection (license) {
  if (license === 'None') {
    return ''
  } else {
    return `
## License
${renderLicenseBadge(license)}

This project is licensed under the ${license} license.
`
  }
}

// Module to export to index.js
module.exports = generateMarkdown
