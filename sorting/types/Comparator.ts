"use strict";

/**
 * If a is less than b, return -1
 * If a is greater than b, return 1
 * Otherwise, a is equal to b, return 0
 */
export type CompareResult = -1 | 0 | 1;
export type CompareFunction<T> = (a: T, b: T) => CompareResult;