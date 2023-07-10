import React, { useEffect } from "react";
import Calculus, { SERIES } from "../Calculus";

type Props = {
  term: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
  serie: SERIES;
};

function Brain({ term, setResult, serie }: Props) {
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
  }, [term, setResult, serie]);

  return <></>;
}

export default Brain;
