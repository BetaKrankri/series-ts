import { useEffect, useState } from "react";
import Calculus, { SERIES } from "../Calculus";

export default function useSerie() {
  const [result, setResult] = useState(0);
  const [serie, setSerie] = useState(SERIES.ser);
  const [term, setTerm] = useState(0);

  useEffect(() => {
    setResult(() => {
      switch (serie) {
        case SERIES.fib:
          return Calculus.fibonacci(term);
          break;
        case SERIES.tri:
          return Calculus.triangular(term);
          break;
        case SERIES.pri:
          return Calculus.prime(term);
          break;
        default:
          return Calculus.serie(term);
          break;
      }
    });
  }, [term, serie]);

  return { result, serie, setSerie, term, setTerm };
}
