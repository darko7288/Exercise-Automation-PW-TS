# TypeScript-Playwright-Automation

This Repository contains the Test Environment used for automation exercise using Playwright and TypeScript. <br />
Tests are executed on the following web page - https://automationexercise.com/.

Clone the repository to your machine and set up the environment localy using the following commands:
- git clone https://github.com/darko7288/TS-Playwright-Automation.git
- git checkout main
- git pull
- npm init
- npm install

The last step should generate the neccesary node_modules directory along with package-lock.json file.

The following Scripts are implemented and can be used from the terminal:
- "Headless/UI/All" (Runs all the UI tests in Headless mode)
- "Headless/UI/Access" (Runs only the Access Page UI tests in Headless mode)
- "Chromium/UI/All": (Runs all the UI tests in Chrome)
- "Chromium/UI/Access": (Runs only the Access Page UI tests in Chrome)