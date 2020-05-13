"use strict";

import { CompareFunction } from "../../types/Comparator";

export default function merge<T>(
  arr: Array<T>,
  aux: Array<T>,
  low: number,
  mid: number,
  high: number,
  compare: CompareFunction<T>
) {
  // Copy into auxiliary array.
  for (let i = low; i < high; i++) {
    aux[i] = arr[i];
  }

  let i: number = low;
  let j: number = mid + 1;

  for (let k = low; k <= high; k++) {
    if (i > mid) arr[k] = aux[j++];
    else if (j > high) arr[k] = aux[i++];
    else if (compare(aux[j], aux[i])) arr[k] = aux[j++];
    else arr[k] = aux[i++];
  }
}
