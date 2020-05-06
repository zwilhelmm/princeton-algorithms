"use strict";

import { expect } from "chai";
import evaluate from "./../src/DijkstraTwoStack";

export default function QueueTest() {
  describe("DijkstraTwoStack Tests", function () {
    let inputString: string;

    before(function () {
      inputString = "";
    });

    it("should evaluate complex strings with a mix of operators and parentheses", function () {
      inputString = "( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )";

      expect(evaluate(inputString)).to.be.true;
    });
  });
}
