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

  it("La suma de dos numeros triangulares iguales da un numero oblongo", () => {
    // S
    const input = 10;
    const expected = input * (input + 1);
    // E
    const result = 2 * Calculus.triangular(input);
    // V
    assert.strictEqual(result, expected);
  });

  it("La suma de los primeros numeros triangulares da un numero tetraedrico", () => {
    // S
    const input = 10;
    const expected = (input * (input + 2) * (input + 1)) / 6;
    // E
    let result = 0;
    for (let i = 0; i <= input; i++) {
      result += Calculus.triangular(i);
    }
    // V
    assert.strictEqual(result, expected);
  });
});

/// Fibonacci
describe("Calculus.fibonacci()", () => {
  it("Deberia satisfacer la formula de Binet", () => {
    // S
    const input = 40;
    const aurus = (1 + Math.sqrt(5)) / 2;
    const expected = Math.floor(
      //formula de binet
      (aurus ** input - (1 / -aurus) ** input) / Math.sqrt(5)
    );
    // E
    const result = Calculus.fibonacci(input);
    // V
    assert.strictEqual(result, expected);
  });
});
