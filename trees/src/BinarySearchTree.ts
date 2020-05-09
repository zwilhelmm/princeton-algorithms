"use strict";

class Node<T> {
  item: T;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(item: T) {
    this.item = item;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export default class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  public inOrderTraversal() {
    function inOrderTraversalRecursive(node: Node<T> | null) {
      if (node) {
        inOrderTraversalRecursive(node.left);
        console.log(node.item);
        inOrderTraversalRecursive(node.right);
      }
    }

    if (!this.root) return null;
    else inOrderTraversalRecursive(this.root);
  }

  public search(item: T): T | null | undefined {
    function searchRecursive(node: Node<T> | null, item: T): T | null {
      if (!node) return null;
      if (item === node.item) return item;
      else {
        return item < node.item
          ? searchRecursive(node.left, item)
          : searchRecursive(node.right, item);
      }
    }

    if (!this.root) return null;
    else searchRecursive(this.root, item);
  }

  public min(): T | null {
    if (!this.root) return null;

    let current = this.root;
    while (current.left) {
      current = current.left;
    }

    return current.item;
  }

  public max(): T | null {
    if (!this.root) return null;

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.item;
  }
}
