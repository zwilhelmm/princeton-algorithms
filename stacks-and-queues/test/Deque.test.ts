"use strict";

import Deque from "../src/Deque";

describe("Doubly-Ended Queue Tests", function () {
  let deque = new Deque<number>();

  beforeEach(function () {
    deque = new Deque<number>();
  });

  describe("isEmpty()", function () {
    it("should be able to tell if a stack is empty", function () {
      expect(deque.isEmpty()).toEqual(true);
    });
  });

  describe("size()", function () {
    it("should be able to return the size of the deque", function () {
      expect(deque.size()).toEqual(0);
    });
  });

  describe("addFirst()", function () {
    it("should be able add an item to the front", function () {
      deque.addFirst(1);
      deque.addFirst(2);

      expect(deque.isEmpty()).toEqual(false);
      expect(deque.size()).toEqual(2);
    });
  });

  describe("addLast()", function () {
    it("should be able to add an item to the end", function () {
      deque.addLast(1);
      deque.addLast(2);
      deque.removeFirst();

      expect(deque.isEmpty()).toEqual(false);
      expect(deque.size()).toEqual(1);
      expect(deque.removeFirst()).toEqual(2);
    });
  });

  describe("removeFirst()", function () {
    it("should be able to remove an item from the front", function () {
      deque.addFirst(1);
      deque.addFirst(2);

      expect(deque.isEmpty()).toEqual(false);
      expect(deque.removeFirst()).toEqual(2);
      expect(deque.size()).toEqual(1);
    });

    it("should throw an error when trying to remove from an empty deque", function () {
      expect(function () {
        deque.removeFirst();
      }).toThrow(
        new Error("NoSuchElementException: cannot remove from empty deque")
      );
    });
  });

  describe("removeLast()", function () {
    it("should be able to remove an item from the front", function () {
      deque.addFirst(1);
      deque.addFirst(2);

      expect(deque.isEmpty()).toEqual(false);
      expect(deque.removeLast()).toEqual(1);
      expect(deque.size()).toEqual(1);
    });

    it("should be able to remove an item from the back of a queue with one node", function () {
      deque.addFirst(1);
      expect(deque.removeLast()).toEqual(1);
      expect(deque.isEmpty()).toEqual(true);
      expect(deque.size()).toEqual(0);
    });

    it("should throw an error when trying to remove from an empty deque", function () {
      expect(function () {
        deque.removeLast();
      }).toThrow(
        new Error("NoSuchElementException: cannot remove from empty deque")
      );
    });
  });

  describe("find()", function () {
    it("should be able to find an item inside the deque", function () {
      deque.addFirst(1);
      deque.addFirst(2);
      deque.addFirst(3);

      expect(deque.find(3)).toEqual(3);
    });

    it("should return null if the item cannot be found", function () {
      deque.addFirst(1);
      deque.addFirst(2);
      deque.addFirst(3);

      expect(deque.find(10)).toBeNull();
    });

    it('should return null if the deque is empty', function () {
      expect(deque.find(1)).toBeNull();
    });
  });

  describe("findRecursive()", function () {
    it("should be able to find an element inside the deque", function () {
      deque.addFirst(1);
      deque.addFirst(2);
      deque.addFirst(3);

      expect(deque.findRecursive(3)).toEqual(3);
    });

    it("should return null if the element cannot be found", function () {
      deque.addFirst(1);
      deque.addFirst(2);
      deque.addFirst(3);

      expect(deque.findRecursive(10)).toBeNull();
    });

    it('should return null if the deque is empty', function () {
      expect(deque.findRecursive(1)).toBeNull();
    });
  });
});
