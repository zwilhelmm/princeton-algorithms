"use strict";

import { CompareResult } from "../types/Comparator";

/**
 * A simple function that serves as a compare function for numbers.
 *
 * @param a the item to compare
 * @param b the item to compare against
 * @returns return -1 if a is less than b, 0 if they are the same, +1 if a is greater than b
 */
export default function compare(a: number, b: number): CompareResult {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
