"use strict";

import { expect } from "chai";
import Stack from "./../src/Stack";

export default function QueueTest() {
  describe("Linked Queue Tests", function () {
    let stack: Stack<number>;

    before(function () {
      stack = new Stack();
    });

    describe("isEmpty()", function () {
      it("should be able to tell if a stack is empty", function () {
        expect(stack.isEmpty()).to.be.true;
      });
    });

    describe("size()", function () {
      it("should be able to return the size of the stack", function () {
        expect(stack.size()).to.equal(1);
      });
    });

    describe("push()", function () {
      it("should be able to push elements", function () {
        stack.push(1);

        expect(stack.isEmpty()).to.be.false;
        expect(stack.size()).to.equal(1);
      });
    });

    describe("pop()", function () {
      it("should be able to pop elements", function () {
        stack.push(1);
        stack.push(2);
        const actual: number = stack.pop();

        expect(actual).to.equal(2);
        expect(stack.isEmpty()).to.be.false;
        expect(stack.size()).to.equal(1);
      });

      it("should throw an error when trying to pop an empty stack", function () {
        expect(stack.pop()).to.throw(
          new Error("NoSuchElementException: Stack underflow")
        );
      });
    });

    describe("peek()", function () {
      it("should be able to peek elements without changing the size of the stack", function () {
        const expected: number = 1;

        stack.push(1);

        const size: number = stack.size();
        const actual: number = stack.peek();

        expect(stack.size()).to.equal(size);
        expect(actual).to.equal(expected);
      });

      it("should throw an error when trying to peek an empty stack", function () {
        expect(stack.peek()).to.throw(
          new Error("NoSuchElementException: Stack underflow")
        );
      });
    });
  });
}
