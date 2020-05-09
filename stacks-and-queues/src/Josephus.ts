"use strict";

/**
 * In the Josephus problem from antiquity, N people are in dire straits and agree to the following strategy to reduce the population. They arrange themselves in a circle (at positions numbered from 0 to N - 1) and proceed around the circle, eliminating every Mth person until only one person is left.
 *
 * Legend has it that Josephus figured out where to sit to avoid being eliminated.
 */

import Queue from "./Queue";

/**
 * Solves the Josephus problem.
 *
 * @param m the mth person to eliminate
 * @param n the total number of people in play
 */
export default function josephus(m: number, n: number) {
  const queue = new Queue<number>();
  let result: Array<number> = [];

  // Initialize the queue.
  for (let i = 0; i < n; i++) {
    queue.enqueue(i);
  }

  while (!queue.isEmpty()) {
    for (let i = 0; i < m - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    const mth: number = queue.dequeue();
    result.push(mth);
  }

  return result;
}

export function josephusRecursive(m: number, n: number): number {
  if (n === 1) return 1;
  else return ((m - 1 + josephusRecursive(m, n - 1)) % n) + 1;
}
