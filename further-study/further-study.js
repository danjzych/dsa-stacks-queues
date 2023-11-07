const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {
}

function balancedBrackets(str) {
  /**
   *  create a stack, which holds opening braces
   *  when a closing brace is encountered, peak at stack
   * if closing brace is same type has opening brace at
   * the top of the stack, pop it
   * after going through whole string, if stack.size === 0,
   * then bracket is balanced
   *
   */

  const braceStack = new Stack();
  const openingBraces = ["(","[","{"];
  const closingBraces = [")","]","}"];

  for (let letter of str){
    if (openingBraces.includes(letter)) braceStack.push(letter);
    if (closingBraces.includes(letter)){
      if(braceStack.peek() === null) return false;

      const brace = braceStack.peek();
      if(brace === "(" && letter === ")") braceStack.pop();
      if(brace === "[" && letter === "]") braceStack.pop();
      if(brace === "{" && letter === "}") braceStack.pop();
    }
  }

  return braceStack.isEmpty();

}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
