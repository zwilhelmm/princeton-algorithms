"use strict";

import Stack from "./Stack";

/**
 * Evaluates (fully parenthesized) arithmetic expressions using Dijkstra's two-stack algorithm.
 *
 * @param str the expression to evaluate
 * @returns the evaluation of the input string
 */
export default function evaluate(str: string): number {
  const operators = new Stack<string>();
  const values = new Stack<number>();

  const legend: Set<string> = new Set<string>(["+", "-", "*", "/", "sqrt"]);

  // We ignore the first parentheses in favor of the second.
  const ignore = "(";
  const delimiter = ")";

  const splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    const current: string = splitStr[i];
    if (current === delimiter) {
      const operator: string = operators.pop();
      let value: number = values.pop();

      if (operator === "+") value = values.pop() + value;
      else if (operator === "-") value = values.pop() - value;
      else if (operator === "*") value = values.pop() * value;
      else if (operator === "/") value = values.pop() / value;
      else if (operator === "sqrt") value = Math.sqrt(value);

      values.push(value);
    } else if (current === ignore) continue;
    else if (legend.has(current)) {
      operators.push(current);
    } else {
      values.push(parseFloat(current));
    }
  }

  return values.pop();
}
