"use strict";

import evaluate from "../src/DijkstraTwoStack";

describe("Dijkstra Two-Stack Algorithm Tests", function () {
  let str: string;

  beforeEach(function () {
    str = "";
  });

  it("should evaluate addition", function () {
    str = "( 2 3 + )";
    expect(evaluate(str)).toBe(5);
  });

  it("should evaluate subtraction", function () {
    str = "( 4 5 - )";
    expect(evaluate(str)).toBe(-1);
  });

  it("should evaluate multiplication", function () {
    str = "( 4 2 * )";
    expect(evaluate(str)).toBe(8);
  });

  it("should evaluate division", function () {
    str = "( 5 5 / )";
    expect(evaluate(str)).toBe(1);
  });

  it("should evaluate square roots", function () {
    str = "sqrt ( 9 )";
    expect(evaluate(str)).toBe(3);
  });

  it("should evaluate complex strings with a mix of operators and parentheses", function () {
    const first: string = "( 1 ( ( 2 3 + ) ( 4 5 * ) * ) + )";
    const second: string = "( ( 1 + sqrt ( 5 ) ) / 2.0 )";

    expect(evaluate(first)).toBe(101.0);
    expect(evaluate(second)).toBe(1.618033988749895);
  });
});
