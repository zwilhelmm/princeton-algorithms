"use strict";

import Stack from "../src/Stack";

describe("Linked Stack Tests", function () {
  let stack: Stack<number>;

  beforeEach(function () {
    stack = new Stack();
  });

  describe("isEmpty()", function () {
    it("should be able to tell if a stack is empty", function () {
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("size()", function () {
    it("should be able to return the size of the stack", function () {
      expect(stack.size()).toEqual(0);
    });
  });

  describe("push()", function () {
    it("should be able to push elements", function () {
      stack.push(1);

      expect(stack.isEmpty()).toBe(false);
      expect(stack.size()).toEqual(1);
    });
  });

  describe("pop()", function () {
    it("should be able to pop elements", function () {
      stack.push(1);
      stack.push(2);
      const actual: number = stack.pop();

      expect(actual).toEqual(2);
      expect(stack.isEmpty()).toBe(false);
      expect(stack.size()).toEqual(1);
    });

    it("should throw an error when trying to pop an empty stack", function () {
      expect(function () {
        stack.pop();
      }).toThrow(new Error("NoSuchElementException: Stack underflow"));
    });
  });

  describe("peek()", function () {
    it("should be able to peek elements without changing the size of the stack", function () {
      const expected: number = 1;

      stack.push(1);

      const size: number = stack.size();
      const actual: number = stack.peek();

      expect(stack.size()).toEqual(size);
      expect(actual).toEqual(expected);
    });

    it("should throw an error when trying to peek an empty stack", function () {
      expect(function () {
        stack.peek();
      }).toThrow(new Error("NoSuchElementException: Stack underflow"));
    });
  });
});
