"use strict";

class Node<T> {
  val: T;
  next: Node<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class LinkedQueue<T> {
  head: Node<T>;
  tail: Node<T>;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public enqueue(val: T) {
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  public dequeue(): T {
    const currentHead = this.head;
    const val = this.head.val;
    this.head = currentHead.next;
    this.size -= 1;
    return val;
  }
}
