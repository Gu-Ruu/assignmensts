/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const { z } = require("zod");

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(number) {
    this.result += number;
  }
  subtract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    this.result /= number;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }

  calculate(expression) {
    //Define the Zod schema fro a valid mathematixcal expression
    const expressionSchema = z
      .string()
      .regex(/^[0-9+\-*/().\s]+$/, "Invalid characters");
    // validate the expression using the schema
    const parsedSchmeaExpression = expressionSchema.parse(expression);

    //remoce all spaces from the validated expression
    const filteredExpression = parsedSchmeaExpression.replace(/\s+/g, "");
    console.log(filteredExpression);
    //try to evaluate the expression
    try {
      this.result = this._evaluateExpression(filteredExpression);
    } catch (error) {
      throw new Error("Invalid mathematical expression");
    }
    return this.result;
  }

  _evaluateExpression(expression) {
    //Function Constructor
    //Helper function to evaluate a sanitized mthematical expression
    return Function(`"use strict"; return (${expression})`)();
  }
}

const calculator = new Calculator
calculator.add(10);
console.log(calculator.getResult()); // Output: 10
calculator.subtract(5);
console.log(calculator.getResult()); // Output: 5
calculator.multiply(3);
console.log(calculator.getResult()); // Output: 15
calculator.divide(5);
console.log(calculator.getResult()); // Output: 3
calculator.clear();
console.log(calculator.getResult()); // Output: 0
try {
  const expressionResult = calculator.calculate(
    "10 +   2 *    (   6 - (4 + 1) / 2) + 7"
  );
  console.log(expressionResult); // Output: 20
} catch (error) {
  console.error(error.message);
}

try {
  calculator.calculate("5 + abc");
} catch (error) {
  console.error(error.message); // Output: Invalid characters in expression
}

// module.exports = Calculator;
