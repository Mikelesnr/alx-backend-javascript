#!/usr/bin/node
//jshint esversion:6

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
