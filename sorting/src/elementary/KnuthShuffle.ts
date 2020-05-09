"use strict";

export default function knuthShuffle<T>(arr: Array<T>) {
  let a: Array<T> = arr;

  for (let i = 0; i < a.length; i++) {
    const random: number = Math.floor(Math.random() * i);
    const temp: T = a[i];
    a[i] = a[random];
    a[random] = temp;
  }

  return a;
}
