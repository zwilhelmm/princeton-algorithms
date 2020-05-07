"use strict";

class Node<T> {
  item: T;
  next: Node<T> | null;
  constructor(item: T) {
    this.item = item;
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
   * @returns true if this stack is empty; false otherwise
   */
  public isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Returns the number of items in this stack.
   *
   * @returns the number of items in this stack
   */
  public size(): number {
    return this.n;
  }

  /**
   * Adds a item to this stack.
   *
   * @param item the item to add
   */
  public push(item: T) {
    const head = this.head;
    const newNode = new Node<T>(item);
    newNode.next = head;
    this.head = newNode;
    this.n++;
  }

  /**
   * Removes and returns the item most recently added to this stack.
   *
   * @returns the item most recently added
   * @throws NoSuchElementException if this stack is empty
   */
  public pop(): T {
    if (this.head === null)
      throw new Error("NoSuchElementException: Stack underflow");
    const item = this.head.item;
    this.head = this.head.next;
    this.n--;
    return item;
  }

  /**
   * Returns (but does not remove) the item most recently added to this stack.
   *
   * @returns the item most recently added
   * @throws NoSuchElementException if this stack is empty
   */
  public peek(): T {
    if (this.head === null)
      throw new Error("NoSuchElementException: Stack underflow");
    return this.head.item;
  }
}
