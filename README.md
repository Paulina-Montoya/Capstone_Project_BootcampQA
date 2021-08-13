# Capstone Project - QA Bootcamp

## Pre-conditions:

- [Install Node.js](https://nodejs.org/en/download/current/)
- [Install Git](https://git-scm.com/downloads)

## Project Structure

```
├── .github                                 # Github Actions config file
├── api_tests                               # Postman collection & environment files
├── pom                                     # Main Page Object Model folder.
│   ├── data                                # Data providers, Roles.
│   ├── pages                               # All the pages, including the Common/Base page.
│   ├── tests                               # Our test files are located here(only one fixture per file).
└── report                                  # Visual report folders to save JSON & HTML files
└── .env                                    # Follow the 4th step to create the file
└── .eslintrc.js                            # Static test config file
└── .testcaferc.json                        # TestCafe config file
└── package.json
└── report-generator.js                     # Visual report config file
└── testcafe-reporter-cucumber-json.json    # Json report config file
```

## Set up the project:

1. Clone the project:

   `git clone https://github.com/Paulina-Montoya/BootcampQA_FrontEnd`

2. Open the project and run the next command in the terminal to install the libraries from package.json:

   `npm install`

3. In the root folder create a new file with the next name:

   `.env`

4. Open the .env file and add the next variables. In BASE_URL add the home page url, in USER_SUCCESS and PASSWORD_SUCCESS add a valid email and password to login successfully in the todoist application:

   `BASE_URL=https://baseurl.com/`

   `USER_SUCCESS=validuser@email.com`

   `PASSWORD_SUCCESS=validpassword`

## Run the test cases scripts:

5. Open the terminal and add the next commands to run the test scripts:

   `npm run test-all` : run all the test scripts

   `npm run test-login` : run the login form test cases

   `npm run test-tasks` : run the creation of tasks test cases

   `npm run test-projects` : run the creation of a project test case

   `npm run test-suite-smoke` : run the smoke suite

## Create a report:

6. First, run the next command to generate a JSON file with the data provided:

   `npm run test-create-report`

7. Second, to open the HTML report run the next command. It going to open a browser to shows the statistics:

   `npm run test-open-report`

## Review code:

8. To analyzes the JavaScript code and quickly find problems, run the next command:

   `npm run test-text`

## API testing:

9. To run the API tests use the next command:

   `npm run test-api`

## Dependencies:

- testcafe
- postman
- dotenv
- multiple-cucumber-html-reporter
- testcafe-reporter-cucumber-json
- eslint
- newman
