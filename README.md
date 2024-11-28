
# Nov-4
The goal is to develop or fix the functions in the `src` folder to ensure that all tests in the `__test__` folder pass successfully. The tests serve as a guide for expected functionality.

### Recommended Workflow

1. Read the test cases in the `__test__` folder to understand the expected behavior.
2. Review the corresponding file(s) in the `src` folder.
3. Implement or fix the function(s) based on the test requirements.
4. Run the tests to verify your changes.

## Notes

- Do not modify the test files.
- Ensure all tests pass before submitting your work.
- Use clear and concise code.

## Project Structure

- **functions/**: Contains the functions that need to be implemented or fixed.
- **__test__/**: Contains the test files to verify the correctness of the functions.


### Running the Tests

To run the tests, use the following command:
```bash
npm test
```

This will execute the ALL tests located in the `__test__` folder and provide feedback on the correctness of your implementations.

Also you could run a SINGLE test file following command:

 ```bash
npm test <nameOfFile>.test.js
```

real example:

```bash
npm test filterActiveUsers.test.js
```

## Getting Started

Follow these steps to set up the project and ensure everything is ready for development.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   npm i
   ```

If you need to run your code instead to use test you could use https://www.programiz.com/javascript/online-compiler/ to test your functions live.

Good luck :)
