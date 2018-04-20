## Assignments
Expense Manager App to show your expense

Must be completed before next session

### Synopsis
Write an application to manager your expanse. Following are the functionality you need to implement in your application
1. User should be able to create his personal expense. Expense record should include id, title, category, description, amount, expenseDate.
2. User should be able to update his expense by given id.
3. User should be able to delete his expense by given id.
4. User should be able to get all expense.
5. User should be able to search expense by start date and end date or only by start date (End date will be optional)
7. User should be able to search expense by category with start and end date or only by start date. (End date will be optional)

### Note:- 
1. Category should be passed as a query string in search functionality.
2. Start date and end date should be passed as URL parameter in search functionality.
3. Error handling should be done gracefully in your code.
4. Follow TDD approach and write test cases before writing any functionality. All test case scenario are written in index.spec.js file. Read all test cases instructions and write test cases for a functionality before writing code for that functionality.


### Code structure & Submission
You will have to submit in Hobbes for evaluation and feedback, submitting any number of times is fine, try and get 100%
A seed code for this assignment is provided here, https://gitlab-cts.stackroute.in/stack_nodejs/expense_manager_app without which you will struggle submitting in Hobbes
Fork from this project but with a different name, try prefixing your forked project with your name and assignment number <YourName>_Week01_<whatever the rest you want to name it>

### Objective
Should be able code using NodeJS and express, develop modules of own, allowed to use any external module only if necessary and significantly improve the code
Follow proper Language semantics, like naming variables, functions, files etc.,
Use modules to modularize the code
Practice TDD by writing test cases using Mocha framework and Chai style of assertions
Include necessary scripts in package.json for running test cases, to run lint checks
Take care of adding modules as devDependency and dependency correctly
Avoid using ES5 language semantics, try as much as ES6
