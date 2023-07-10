import { describe, it, assert } from "vitest";
import Calculus from "../src/Calculus";

/* Pruebas de funcion */

const SERIES_TEST = [
  [0, 0],
  [1, 0],
  [2, Infinity],
  [3, 39],
  [4, 102],
  [5, 95],
  [6, 115],
  [7, 121.8],
  [8, 108.5],
  [9, 102.461584615],
];

describe("Calculus.serie()", () => {
  SERIES_TEST.forEach((testpair) => {
    it(`S(${testpair[0]}) = ${testpair[1]}`, () => {
      const input = testpair[0];
      const expected = testpair[1];
      const result = Calculus.serie(input);
      if (Number.isFinite(expected)) {
        assert.approximately(result, expected, 0.0001);
      } else {
        assert.strictEqual(result, expected);
      }
    });
  });
});

const TRIANG_TESTS = [
  // [-4, -3],
  // [-2, -1],
  [0, 0],
  [1, 1],
  [2, 3],
  [4, 10],
  [8, 36],
  [16, 136],
  [32, 528],
  [64, 2080],
  [128, 8256],
];

describe("Calculus.triangular()", () => {
  TRIANG_TESTS.forEach((testpair) => {
    it(`T(${testpair[0]}) = ${testpair[1]}`, () => {
      const input = testpair[0];
      const expected = testpair[1];
      const result = Calculus.triangular(input);
      assert.strictEqual(result, expected);
    });
  });
});

const FIBO_TESTS = [
  [-7, 13],
  [-4, -3],
  [-2, -1],
  [0, 0],
  [1, 1],
  [2, 1],
  [4, 3],
  [7, 13],
  [11, 89],
  [14, 377],
  [17, 1597],
  [20, 6765],
];

describe("Calculus.fibonacci()", () => {
  FIBO_TESTS.forEach((testpair) => {
    it(`F(${testpair[0]}) = ${testpair[1]}`, () => {
      const input = testpair[0];
      const expected = testpair[1];
      const result = Calculus.fibonacci(input);
      assert.strictEqual(result, expected);
    });
  });
});

const PRIME_TEST = [
  [-10, 0],
  [0, 0],
  [1, 2],
  [2, 3],
  [4, 7],
  [7, 17],
  [11, 31],
  [14, 43],
  [17, 59],
  [20, 71],
];

describe("Calculus.prime()", () => {
  PRIME_TEST.forEach((testpair) => {
    it(`P(${testpair[0]}) = ${testpair[1]}`, () => {
      const input = testpair[0];
      const expected = testpair[1];
      const result = Calculus.prime(input);
      assert.strictEqual(result, expected);
    });
  });
});
