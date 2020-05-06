"use strict";

import { expect } from "chai";
import parseParentheses from "./../src/Parentheses";

export default function QueueTest() {
  describe("Parentheses Tests", function () {
    let inputString: string;

    before(function () {
      inputString = "";
    });

    it("should return true for a balanced string", function () {
      inputString = "[()]{}{[()()]()}";

      expect(parseParentheses(inputString)).to.be.true;
    });

    it("should return false for imbalanced string input", function () {
      inputString = "[(])";

      expect(parseParentheses(inputString)).to.be.false;
    });
  });
}
