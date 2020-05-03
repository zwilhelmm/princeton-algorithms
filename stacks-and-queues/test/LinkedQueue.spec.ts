"use strict";

import { expect } from "chai";
import LinkedQueue from "./../src/LinkedQueue";

describe("LinkedQueue", function () {
  it("should be able to enqueue elements", function () {
    //
  });

  it("should be able to dequeue elements", function () {
    //
  });

  it("should be able to return the size of the queue", function () {
    const queue = new LinkedQueue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.getSize()).to.equal(2);
  });

  it("should be able to prevent popping when queue is empty", function () {
    //
  });
});
