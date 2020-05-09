"use strict";

import { CompareFunction, CompareResult } from "../types/Comparator";
import insertionSort from "../src/elementary/InsertionSort";
import selectionSort from "../src/elementary/SelectionSort";
import shellSort from "../src/elementary/ShellSort";
import knuthShuffle from "../src/elementary/KnuthShuffle";
import * as faker from "faker";

describe("Elementary Sorting Tests", function () {
  const compareNumbers: CompareFunction<number> = function (
    a: number,
    b: number
  ): CompareResult {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  };

  let control: Array<number> = [];
  let numbers: Array<number> = [];

  beforeEach(function () {
    for (let i = 0; i < 10; i++) {
      numbers[i] = faker.random.number();
    }

    control = numbers.sort((a, b) => a - b);
  });

  it("should be able to selection sort", function () {
    const actual = selectionSort(numbers, compareNumbers);
    expect(actual).toEqual(control);
  });

  it("should be able to insertion sort", function () {
    const actual = insertionSort(numbers, compareNumbers);
    expect(actual).toEqual(control);
  });

  it("should be able to shell sort", function () {
    const actual = shellSort(numbers, compareNumbers);
    expect(actual).toEqual(control);
  });

  it("should be able to Knuth shuffle without losing data", function () {
    const shuffled: Array<number> = knuthShuffle(numbers);
    const actual: Array<number> = shuffled.sort(
      (a: number, b: number): number => a - b
    );
    expect(actual).toEqual(control);
  });
});
