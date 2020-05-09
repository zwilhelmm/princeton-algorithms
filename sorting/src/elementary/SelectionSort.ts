"use strict";

import { CompareFunction } from "../../types/Comparator";

export default function selectionSort<T>(
  arr: Array<T>,
  compare: CompareFunction<T>
): Array<T> {
  let a: Array<T> = arr;

  for (let i = 0; i < a.length - 1; i++) {
    let minimumIndex: number = i;

    for (let j = i + 1; j < a.length; j++) {
      if (compare(a[j], a[minimumIndex])) {
        minimumIndex = j;
      }
    }

    const temp: T = a[i];
    a[i] = a[minimumIndex];
    a[minimumIndex] = temp;
  }

  return a;
}
