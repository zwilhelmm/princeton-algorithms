"use strict";

import Stack from "./Stack";

type ParenthesesDictionary = {
  [key: string]: string;
};

/**
 * Time: O(n)
 * Space: O(n)
 *
 * Reads in a text file and checks to see if the parentheses are balanced.
 *
 * @param str the input string of parentheses
 * @return {@code true} if string is balanced; {@code false} if otherwise
 */
export default function parseParentheses(str: string): boolean {
  const stack = new Stack<string>();
  const dict: ParenthesesDictionary = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  Object.freeze(dict);

  for (let i = 0; i < str.length; i++) {
    const current: string = str[i];
    if (dict[current]) stack.push(current);
    else {
      const openParethesis: string = stack.pop();
      if (dict[openParethesis] != current) return false;
    }
  }

  return true;
}
