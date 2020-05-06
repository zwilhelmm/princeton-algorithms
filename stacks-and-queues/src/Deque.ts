"use strict";

class Node<T> {
  item: T | null;
  next: Node<T> | null;
  constructor() {
    this.item = null;
    this.next = null;
  }
}

/**
 * A double-ended queue or deque (pronounced “deck”) is a generalization of a stack and a queue that supports adding and removing items from either the front or the back of the data structure.
 */
export default class Deque<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  n: number;

  /**
   * Initializes an empty deque.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.n = 0;
  }

  /**
   * Returns true if this deque is empty.
   *
   * @returns {@code true} if this deque is empty; {@code false} otherwise
   */
  public isEmpty(): boolean {
    return this.n === 0;
  }

  /**
   * Returns the number of items in this deque.
   *
   * @returns the number of items in this deque.
   */
  public size(): number {
    return this.n;
  }

  /**
   * Searches for an item in this deque.
   *
   * @param item the item to search for
   * @returns {@code item} if found; {@code null} otherwise
   */
  public find(item: T): T | null {
    if (this.isEmpty()) return null;

    let currentNode = this.head;
    for (let i = 0; i < this.n; i++) {
      if (currentNode.item === item) return currentNode.item;
    }

    return null;
  }

  /**
   * Helper function to search for item in this deque.s
   *
   * @param node the current node to check
   * @param item the item to search for
   * @returns {@code item} if found; {@code node} if we are not at the end of the deque, {@code null} otherwise, if item is not found
   */
  private findRecursiveHelper(node: Node<T>, item: T): T | null {
    if (node.item === item) return item;
    if (node.next === null) return null;
    else this.findRecursiveHelper(node.next, item);
  }

  /**
   * Recursively searches for an item in this deque. The results should be identical to that of this.find().
   *
   * @param node the current node to check
   * @param item the item to search for
   * @returns {@code item} if found; {@code node} if we are not at the end of the deque, {@code null} otherwise, if item is not found
   */
  public findRecursive(item: T): T | null {
    if (this.isEmpty()) return null;
    return this.findRecursiveHelper(this.head, item);
  }

  /**
   * Adds item to the front of the deque.
   *
   * @param item the item to add
   */
  public addFirst(item: T) {
    if (item === null)
      throw new Error("IllegalArgumentException: cannot add null items");
    const newNode = new Node<T>();
    newNode.item = item;

    if (this.isEmpty()) {
      newNode.next = null;
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.n++;
  }

  /**
   * Adds item to the end of the deque.
   *
   * @param item the item to add
   */
  public addLast(item: T) {
    if (item === null)
      throw new Error("IllegalArgumentException: cannot add null items");

    const newNode = new Node<T>();
    newNode.item = item;
    newNode.next = null;

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.n++;
  }

  /**
   * Removes item from the end of the deque.
   *
   * @returns {@code item} if the item is found; {@code false} otherwise
   */
  public removeFirst(): T | null {
    if (this.isEmpty())
      throw new Error("NoSuchElementException: cannot remove from empty deque");

    const item = this.head.item;
    this.head = this.head.next;

    this.n--;

    return item;
  }

  /**
   * Removes item from the front of the deque.
   *
   * @returns {@code item} if the item is found; {@code false} otherwise
   */
  public removeLast(): T {
    if (this.isEmpty())
      throw new Error("NoSuchElementException: cannot remove from empty deque");

    const item = this.tail.item;

    let currentNode = this.head;
    for (let i = 0; i < this.n - 1; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.n--;

    return item;
  }
}
