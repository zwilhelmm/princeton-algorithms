"use strict";

import merge from "../classic/Merge";
import { CompareFunction } from "../../types/Comparator";

export default class mergeSortBottomUp<T> {
  arr: Array<T>;
  compare: CompareFunction<T>;

  /**
   * Initializes an empty bottom-up merge sort.
   *
   * @param arr the array to sort
   * @param compare a function with which to compare elements
   */
  constructor(arr: Array<T>, compare: CompareFunction<T>) {
    this.arr = arr;
    this.compare = compare;
  }

  private merge = merge;

  /**
   * Conducts a bottom-up merge sort.
   *
   * @returns return the sorted array
   */
  public sort(): Array<T> {
    const aux: Array<T> = [];
    const N: number = this.arr.length;

    for (let sz = 1; sz < N; sz = sz + sz) {
      for (let low = 0; low < N - sz; low += sz + sz) {
        this.merge(
          this.arr,
          aux,
          low,
          low + sz - 1,
          Math.min(low + sz + sz - 1, N - 1),
          this.compare
        );
      }
    }

    return this.arr;
  }
}
