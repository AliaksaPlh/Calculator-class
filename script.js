class Calculator {
  constructor(xOperand, yOperand) {
    this.xOperand = xOperand || +prompt("Enter a number", 1);
    this.yOperand = yOperand || +prompt("Enter a number", 1);
    this.setX();
    this.setY();
  }
  setX() {
    if (typeof this.xOperand === "undefined") {
      this.xOperand = +prompt("Enter a number", 1);
    }
    return;
  } //sets the first number

  setY() {
    if (typeof this.yOperand === "undefined") {
      this.yOperand = +prompt("Enter a number", 1);
    }
    return;
  } // sets the second number

  logSum() {
    console.log(
      `The sum of the given numbers is ${this.xOperand + this.yOperand}`
    );
  } // returns the sum of the given numbers
  logMul() {
    console.log(
      `The product of the given numbers is ${this.xOperand * this.yOperand}`
    );
  } // returns the product of the given numbers
  logSub() {
    console.log(
      `The difference of the given numbers is ${this.xOperand - this.yOperand}`
    );
  } // returns the difference of the given numbers
  logDiv() {
    console.log(
      `The quotient of the given numbers is ${this.xOperand / this.yOperand}`
    );
  } // returns the quotient of the given numbers, throws an error when dividing by 0.
}
let calc = new Calculator();
calc.logSum();
calc.logMul();
calc.logSub();
calc.logDiv();
