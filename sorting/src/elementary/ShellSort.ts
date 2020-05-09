"use strict";

import { CompareFunction } from "../../types/Comparator";

export default function shellSort<T>(
  arr: Array<T>,
  compare: CompareFunction<T>
): Array<T> {
  let a: Array<T> = arr;
  let h: number = 1;
  while (h < a.length / 3) h = 3 * h + 1;

  while (h >= 1) {
    for (let i = h; i < a.length; i++) {
      for (let j = i; j >= h && compare(a[j], a[j - h]); j -= h) {
        const temp: T = a[j];
        a[j] = a[j - h];
        a[j - h] = temp;
      }
    }

    h /= 3;
  }

  return a;
}
