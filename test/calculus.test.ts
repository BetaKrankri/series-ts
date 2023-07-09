import { describe, it, assert } from "vitest";
import Calculus from "../src/Calculus";

/* Teoremas para verificacion */

/// Triangular
describe("Calculus.triangular()", () => {
  it("La suma de n y (n-1) es un cuadrado perfecto.", () => {
    // S
    const input = 10;
    const expected = input * input;
    // E
    const result = Calculus.triangular(input) + Calculus.triangular(input - 1);
    // V
    assert.strictEqual(result, expected);
  });
});

/// Fibonacci
describe("Calculus.fibonacci()", () => {
  it("Deberia satisfacer la formula de Binet", () => {
    // S
    const aurus = (1 + Math.sqrt(5)) / 2;
    const input = 8;
    const expected = ((aurus ^ input) - ((1 / -aurus) ^ input)) / Math.sqrt(5);
    // E
    const result = Calculus.fibonacci(input);
    // V
    assert.strictEqual(result, expected);
  });
});
