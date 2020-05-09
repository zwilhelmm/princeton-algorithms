"use strict";

import Queue from "../src/Queue";

describe("Linked Queue Tests", function () {
  let queue: Queue<number>;

  beforeEach(function () {
    queue = new Queue<number>();
  });

  describe("isEmpty()", function () {
    it("should be able to tell if a queue is empty", function () {
      expect(queue.isEmpty()).toEqual(true);
    });
  });

  describe("size()", function () {
    it("should be able to return the size of the queue", function () {
      expect(queue.size()).toEqual(0);
    });
  });

  describe("enqueue()", function () {
    it("should be able to enqueue elements", function () {
      queue.enqueue(1);

      expect(queue.isEmpty()).toEqual(false);
      expect(queue.size()).toEqual(1);
    });
  });

  describe("dequeue()", function () {
    it("should be able to dequeue elements", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      const actual: number = queue.dequeue();

      expect(actual).toEqual(1);
      expect(queue.isEmpty()).toEqual(false);
      expect(queue.size()).toEqual(1);
    });

    it("should throw an error when trying to dequeue an empty queue", function () {
      expect(function () {
        queue.dequeue();
      }).toThrow(new Error("NoSuchElementException: Queue underflow"));
    });
  });

  describe("peek()", function () {
    it("should be able to peek elements without changing the size of the queue", function () {
      const expected: number = 1;

      queue.enqueue(1);

      const size: number = queue.size();
      const actual: number = queue.peek();

      expect(queue.size()).toEqual(size);
      expect(actual).toEqual(expected);
    });

    it("should throw an error when trying to peek an empty queue", function () {
      expect(function () {
        queue.peek();
      }).toThrow(new Error("NoSuchElementException: Queue underflow"));
    });
  });
});
