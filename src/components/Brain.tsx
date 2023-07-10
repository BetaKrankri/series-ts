import React, { useEffect } from "react";
import Calculus from "../Calculus";

type Props = {
  term: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

function Brain({ term, setResult }: Props) {
  useEffect(() => {
    setResult(() => Calculus.serie(term));
  }, [term, setResult]);

  return <></>;
}

export default Brain;
