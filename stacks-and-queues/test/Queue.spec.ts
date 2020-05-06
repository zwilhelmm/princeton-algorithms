"use strict";

import { expect } from "chai";
import Queue from "./../src/Queue";

export default function QueueTest() {
  describe("Linked Queue Tests", function () {
    let queue: Queue<number>;

    before(function () {
      queue = new Queue();
    });

    describe("isEmpty()", function () {
      it("should be able to tell if a queue is empty", function () {
        expect(queue.isEmpty()).to.be.true;
      });
    });

    describe("size()", function () {
      it("should be able to return the size of the queue", function () {
        expect(queue.size()).to.equal(1);
      });
    });

    describe("enqueue()", function () {
      it("should be able to enqueue elements", function () {
        queue.enqueue(1);

        expect(queue.isEmpty()).to.be.false;
        expect(queue.size()).to.equal(1);
      });
    });

    describe("dequeue()", function () {
      it("should be able to dequeue elements", function () {
        queue.enqueue(1);
        queue.enqueue(2);
        const actual: number = queue.dequeue();

        expect(actual).to.equal(1);
        expect(queue.isEmpty()).to.be.false;
        expect(queue.size()).to.equal(1);
      });

      it("should throw an error when trying to dequeue an empty queue", function () {
        expect(queue.dequeue()).to.throw(
          new Error("NoSuchElementException: Queue underflow")
        );
      });
    });

    describe("peek()", function () {
      it("should be able to peek elements without changing the size of the queue", function () {
        const expected: number = 1;

        queue.enqueue(1);

        const size: number = queue.size();
        const actual: number = queue.peek();

        expect(queue.size()).to.equal(size);
        expect(actual).to.equal(expected);
      });

      it("should throw an error when trying to peek an empty queue", function () {
        expect(queue.peek()).to.throw(
          new Error("NoSuchElementException: Queue underflow")
        );
      });
    });
  });
}
