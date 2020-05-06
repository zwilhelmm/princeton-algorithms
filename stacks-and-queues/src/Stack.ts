"use strict";

class Node<T> {
  val: T | null;
  next: Node<T> | null;
  constructor() {
    this.val = null;
    this.next = null;
  }
}

export default class Stack<T> {
  head: Node<T> | null;
  n: number;

  /**
   * Initializes an empty stack.
   */
  constructor() {
    this.head = null;
    this.n = 0;
  }

  /**
   * Returns true if this stack is empty.
   *
   * @return true if this stack is empty; false otherwise
   */
  public isEmpty(): boolean {
    return this.head === null;
  }

  
  
  public size(): number {
    return this.n;
  }

  /**
   * Adds a value to this stack.
   *
   * @param val the value to add
   */
  public push(val: T) {
    const head = this.head;
    const newNode = new Node<T>();
    newNode.val = val;
    newNode.next = head;
    this.head = newNode;
    this.n++;
  }

  /**
   * Removes and returns the value most recently added to this stack.
   *
   * @return the value most recently added
   * @throws NoSuchElementException if this stack is empty
   */
  public pop(): T {
    if (this.isEmpty())
      throw new Error("NoSuchElementException: Stack underflow");
    const val = this.head.val;
    this.head = this.head.next;
    this.n--;
    return val;
  }

  /**
   * Returns (but does not remove) the value most recently added to this stack.
   *
   * @return the value most recently added
   * @throws NoSuchElementException if this stack is empty
   */
  public peek(): T {
    if (this.isEmpty())
      throw new Error("NoSuchElementException: Stack underflow");
    return this.head.val;
  }
}
