/**
 * Enumeracion de las series disponibles
 */
export enum SERIES {
  ser = "Crazy Serie",
  pri = "Primos",
  tri = "Triangular",
  fib = "Fibonacci",
}

/**
 * CLase que contiene métodos para calculos de series.
 */
class Calculus {
  /**
   * Calcula el número triangular para un número dado.
   * @param n - El número para el cual se calculará el número triangular.
   * @returns El número triangular calculado.
   */
  static triangular(n: number): number {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
  }

  /**
   * Calcula el número de Fibonacci para un número dado.
   * @param n - El número para el cual se calculará el número de Fibonacci.
   * @returns El número de Fibonacci calculado.
   */
  static fibonacci(n: number): number {
    // if (n <= 0) return 0;
    const aurus = (1 + Math.sqrt(5)) / 2;
    /* formula de binet */
    const fib = Math.round((aurus ** n - (1 / -aurus) ** n) / Math.sqrt(5));
    return fib;
  }

  /**
   * Calcula el n-ésimo número primo.
   * @param n - El índice del número primo a calcular.
   * @returns El n-ésimo número primo calculado.
   */
  static prime(n: number): number {
    if (n <= 0 || typeof n !== "number") return 0;
    const primes: number[] = [];
    let i = 2;
    while (primes.length < n) {
      if (
        !primes.some((p) => {
          return i % p === 0;
        })
      ) {
        primes.push(i);
      }
      i++;
    }
    return primes[primes.length - 1];
  }

  /**
   * Calcula el valor de la serie para un número dado.
   * @param n - El número para el cual se calculará el valor de la serie.
   * @returns El valor de la serie calculado.
   */
  static serie(n: number): number {
    const P = this.prime(n + 3);
    const T = this.triangular(n - 1);
    const F = this.fibonacci(n - 2);
    //console.log(`S(${n}) : P(${n + 3}), T(${n - 1})), F(${n - 2})`, P, T, F);

    return (P * T) / F;
  }
}

export default Calculus;
