class Calculus {
  static triangular(n: number): number {
    return (n * (n + 1)) / 2;
  }
  static prime(n: number): number {
    return n;
  }
  static fibonacci(n: number): number {
    if (n < 0) {
      return 0;
    } else if (n <= 1) {
      return n;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }
  static serie(n: number): number {
    return n;
  }
}

export default Calculus;
