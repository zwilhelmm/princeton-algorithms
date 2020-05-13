"use strict";

import merge from "../classic/Merge";
import { CompareFunction } from "../../types/Comparator";

export default class MergeSort<T> {
  arr: Array<T>;
  compare: CompareFunction<T>;

  /**
   * Initializes an empty standard merge sort.
   *
   * @param arr the array to sort
   * @param compare a function with which to compare elements
   */
  constructor(arr: Array<T>, compare: CompareFunction<T>) {
    this.arr = arr;
    this.compare = compare;
  }

  private merge = merge;

  private sortRecursive(a: Array<T>, aux: Array<T>, low: number, high: number) {
    if (high <= low) return;
    const mid: number = low + (high - low) / 2;
    this.sortRecursive(a, aux, low, mid);
    this.sortRecursive(a, aux, mid + 1, high);
    this.merge(a, aux, low, mid, high, this.compare);
  }

  public sort(): Array<T> {
    const aux: Array<T> = [];
    this.sortRecursive(this.arr, aux, 0, this.arr.length - 1);
    return this.arr;
  }
}
