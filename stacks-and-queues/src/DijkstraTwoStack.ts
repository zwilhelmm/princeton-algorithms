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

  const dict = {
    "+": (v: number): number => values.pop() + v,
    "-": (v: number): number => values.pop() - v,
    "*": (v: number): number => values.pop() * v,
    "/": (v: number): number => values.pop() / v,
    sqrt: (v: number): number => Math.sqrt(v),
  };

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (dict[current]) operators.push(current);
    else if (current === "}") {
      const operator = operators.pop();
      const value = values.pop();

      values.push(dict[operator](value));
    } else values.push(Number.parseFloat(current));
  }

  return values.pop();
}
