"use strict";

class Node<T> {
  item: T;
  next: Node<T> | null;
  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

export default class Queue<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
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
   * @returns {@code true} if this queue is empty; {@code false} otherwise
   */
  public isEmpty(): boolean {
    return this.n === 0;
  }

  /**
   * Returns the number of items in this queue.
   *
   * @returns the number of items in this queue
   */
  public size(): number {
    return this.n;
  }

  /**
   * Returns the item least recently added to this queue.
   *
   * @returns the item least recently added to this queue
   * @throws NoSuchElementException if this queue is empty
   */
  public peek(): T {
    if (this.head === null)
      throw new Error("NoSuchElementException: Queue underflow");
    return this.head.item;
  }

  /**
   * Adds a item to this queue.
   *
   * @param item the item to add
   */
  public enqueue(item: T) {
    const newNode = new Node<T>(item);
    newNode.next = null;

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.n++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.n++;
    }
  }

  /**
   * Removes and returns the item on this queue that was least recently added.
   *
   * @returns the item on this queue that was least recently added
   * @throws NoSuchElementException if this queue is empty
   */
  public dequeue(): T {
    if (this.head === null)
      throw new Error("NoSuchElementException: Queue underflow");
    const item = this.head.item;
    this.head = this.head.next;
    this.n--;
    return item;
  }
}
