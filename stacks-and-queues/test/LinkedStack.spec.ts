"use strict";

import { expect } from "chai";
import LinkedStack from "./../src/LinkedStack";

describe("LinkedStack", function () {
  it("should be able to push elements", function () {
    const list = new LinkedStack();
    list.push(1);
    expect(list.getSize()).to.equal(1);

    list.push(2);
    expect(list.getSize()).to.equal(2);
  });

  it("should be able to pop elements", function () {
    const list = new LinkedStack();
    list.push(1);
    list.push(2);

    expect(list.pop()).to.equal(2);
    expect(list.getSize()).to.equal(1);
    expect(list.pop()).to.equal(1);
    expect(list.getSize()).to.equal(0);
  });

  it("should be able to return the size of the stack", function () {
    const list = new LinkedStack();
    list.push(1);
    list.push(2);

    expect(list.getSize()).to.equal(2);
  });

  it("should prevent popping when stack is empty", function () {
    const list = new LinkedStack();
    list.push(1);
    list.pop();
    expect(list.pop()).to.be.null;
    expect(list.getSize()).to.equal(0);
  });
});
