"use strict";

class Node<T> {
  val: T;
  next: Node<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class LinkedStackOfStrings<T> {
  head: Node<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public push(val: T) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }

  public pop(): T {
    if (this.size === 0) return null;
    const val = this.head.val;
    this.head = this.head.next;
    this.size -= 1;
    return val;
  }
}
