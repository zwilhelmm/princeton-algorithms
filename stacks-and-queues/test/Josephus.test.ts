"use strict";

import josephus from "../src/Josephus";

describe("Josephus Algorithm Tests", function () {
  it("should correctly leave the last person standing", function () {
    expect(josephus(2, 7)).toEqual([1, 3, 5, 0, 4, 2, 6]);
  });
});
