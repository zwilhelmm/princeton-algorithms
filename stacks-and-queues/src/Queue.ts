"use strict";

class Node<T> {
  val: T | null;
  next: Node<T> | null;
  constructor() {
    this.val = null;
    this.next = null;
  }
}

export default class Queue<T> {
  head: Node<T>;
  tail: Node<T>;
  n: number;

  /**
   * Initializes an empty queue.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.n = 0;
  }

  /**
   * Returns true if this queue is empty.
   *
   * @return {@code true} if this queue is empty; {@code false} otherwise
   */
  public isEmpty(): boolean {
    return this.n === 0;
  }

  /**
   * Returns the number of items in this queue.
   *
   * @return the number of items in this queue
   */
  public size(): number {
    return this.n;
  }

  /**
   * Returns the value least recently added to this queue.
   *
   * @return the value least recently added to this queue
   * @throws NoSuchElementException if this queue is empty
   */
  public peek(): T {
    if (this.isEmpty())
      throw new Error("NoSuchElementException: Queue underflow");
    return this.head.val;
  }

  /**
   * Adds a value to this queue.
   *
   * @param val the value to add
   */
  public enqueue(val: T) {
    const newNode = new Node<T>();
    newNode.val = val;
    newNode.next = null;
    this.tail.next = newNode;
    this.tail = newNode;
    this.n++;
  }

  /**
   * Removes and returns the value on this queue that was least recently added.
   *
   * @return the value on this queue that was least recently added
   * @throws NoSuchElementException if this queue is empty
   */
  public dequeue(): T {
    if (this.isEmpty())
      throw new Error("NoSuchElementException: Queue underflow");
    const val = this.head.val;
    this.head = this.head.next;
    this.n--;
    return val;
  }
}
