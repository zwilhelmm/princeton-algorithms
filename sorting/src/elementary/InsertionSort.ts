"use strict";

import { CompareFunction } from "./../../types/Comparator";

export default function insertionSort<T>(
  arr: Array<T>,
  compare: CompareFunction<T>
): Array<T> {
  let a: Array<T> = arr;

  for (let i = 0; i < a.length; i++) {
    for (let j = i; j > 0; j--) {
      if (compare(a[j - 1], a[j]) > 0) {
        const temp: T = a[j];
        a[j] = a[j - 1];
        a[j - 1] = temp;
      }
    }
  }

  return a;
}
