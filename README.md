# 🛠️Jobsity Challenge: Test Automation with Cypress for Magento E-Commerce 🛒

![Unveiling_the_New_Jobsity_Brand_Your_Vision_Our_Talent_In_38f2525cd2 (1)](https://github.com/Moaaz-Adel/Jobsity-Challenge/assets/66737098/3b8a6ac6-68c1-4bad-9842-794976f97157)


Welcome to the Jobsity Challenge! This project involves creating automation scripts for "Orders and Returns" validations on a Magento E-Commerce website. The objective is to ensure the robustness and reliability of the e-commerce platform by leveraging cutting-edge tools and best practices in test automation.

## 📚 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Tests](#running-the-tests)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [License](#license)

## 🚀 #Project Overview

This repository contains the test automation scripts for the "Orders and Returns" functionalities of a Magento E-Commerce site. The scripts are designed using the Page Object Model (POM) design pattern to enhance code reusability and maintainability. 

## 🛠️ Tech Stack

- **TypeScript** & **JavaScript**
- **Cypress**: The idea behind selecting this tool is because it's fast, reliable and a featured tool.
- **POM Design Pattern**
- **FakerJS**: To generate Dynamic Data
- **Docker-Compose**
- **GitHub Actions**
- **Allure Report**: A flexible lightweight multi-language test report tool.

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- Docker
- Docker-Compose

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Moaaz-Adel/Jobsity-Challenge.git
    ```

2. **Change the current directory to be inside the cloned repo**:
     ```sh
   cd Jobsity-Challenge
   ``` 
3. **Install dependencies**:
    ```sh
    npm install
    ```

## 📂 Project Structure

```plaintext
Jobsity-Challenge/
│
├── cypress/
│   ├── fixtures/          # Test data files
│   ├── e2e/               # Test cases
│   ├── plpages          # Page Obejects
│   ├── support/           # Custom commands and POM
│
├── docker-compose.yml     # Docker Compose configuration
├──  cypress.config.ts      # Cypress Configureation
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

▶️ Running the Tests

To run the tests Locally type the following commands:

1. Interactive Mode: `npx cypress open` (open the tests with the browser)
2. Headless Mode Without generating Allure Report
    1. `npm run cy:test:run` 
    2. Will generate a mocha report only  (Report located in "cypress/reports/index.html")
3. Headless mode with Allure Report Enabled:
    1. `npm run cy:test:report`
    2. Will generate an allure report automatically & Mocha report
4. One Command to run Tests in Headless Mode, Generate report and serve it automatically:
     ```sh
   npm run allure:clear ; npm run cy:test:run ; npm run allure:generate ; npm run allure:serve
   ``` 
   

    
## 🥉 Using Docker-Compose

Just run the following Command:

``` sh
    docker-compose run e2e-chrome
```

And to run on different browsers replace "chrome" with:

* e2e-firefox
* e2e-electron

Note: You can run on all browsers using the command without specifying the browser type:
``` sh
    docker-compose run
```

and to try different browsers replace chrome with:

e2e-firefox
e2e-electron



## ⚙️ Continuous Integration

GitHub Actions is used to automate the testing process. The configuration file for GitHub Actions is located in .github/workflows/.

Triggering CI Pipeline
On each pull request or push to the main branch, the CI pipeline will be triggered automatically.

## 🏃‍♂️ Test Results:

### Allure Report (If allure is installed):
![image](https://github.com/Moaaz-Adel/Jobsity-Challenge/assets/66737098/06ad2a38-d5a4-4c99-8b22-2e8d4c9b7d90)
![image](https://github.com/Moaaz-Adel/Jobsity-Challenge/assets/66737098/673443de-1569-46ed-abe6-877283b68ea0)


### Mocha Awesome (Always will be generated):
![image](https://github.com/Moaaz-Adel/Jobsity-Challenge/assets/66737098/1a1a7a35-097e-45b1-8ce4-2dc06ec1bf52)


📊 Reporting

Generate Allure Report
Run the tests with Allure:

``` sh
    npx cypress run --env allure=true
```
Generate the report:

``` sh
    allure generate allure-results --clean
```
    
Serve the report:

``` sh
    allure Serve
   ```

# Notes:

> All interactions are configured and refactored to include:

> "**Retries**" to decrease Flakeness

> The refactored methods are documented for ease of use and understanding

> Following Page Object Model (**POM**) Design Pattern

> Following Coding Standards and Best Practices

Happy Testing! 🚀✨
