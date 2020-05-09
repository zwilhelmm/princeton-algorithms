"use strict";

import parseParentheses from "../src/Parentheses";

describe("Parsing Parentheses Tests", function () {
  it("should correctly determine balanced and imbalanced strings", function () {
    const first: string = "[()]{}{[()()]()}";
    const second: string = "[(])";

    expect(parseParentheses(first)).toEqual(true);
    expect(parseParentheses(second)).toEqual(false);
  });
});
