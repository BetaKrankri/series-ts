class Calculus {
  static triangular(n: number): number {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
  }

  static fibonacci(n: number): number {
    // if (n <= 0) return 0;
    const aurus = (1 + Math.sqrt(5)) / 2;
    /* formula de binet */
    const fib = Math.round((aurus ** n - (1 / -aurus) ** n) / Math.sqrt(5));
    return fib;
  }

  static prime(n: number): number {
    if (n <= 0) return 0;
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

  static serie(n: number): number {
    const P = this.prime(n + 3);
    const T = this.triangular(n - 1);
    const F = this.fibonacci(n - 2);
    //console.log(`S(${n}) : P(${n + 3}), T(${n - 1})), F(${n - 2})`, P, T, F);

    return (P * T) / F;
  }
}

export default Calculus;
