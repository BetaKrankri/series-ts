import { SERIES } from "../Calculus";

type Props = {
  result: number;
  serie: SERIES;
};

export default function ResultDisplay({ result, serie }: Props) {
  const fStr =
    serie === SERIES.ser
      ? `S(n)`
      : serie === SERIES.fib
      ? `F(n)`
      : serie === SERIES.pri
      ? `P(n)`
      : `T(n)`;
  const resultStr = Number.isInteger(result) ? result : result.toFixed(5);

  return (
    <div className="ResultDisplay w-64 h-full rounded-md bg-[#5FA0A0] px-4 py-5 text-lg text-[#0A1010]">
      <p>
        {fStr} <span className="text-[#864C13]">=</span>
      </p>
      {serie === SERIES.ser && (
        <p>
          P(n+3)*T(n-1)/F(n-2) <span className="text-[#864C13]">=</span>
        </p>
      )}
      <p className="text-[#2F4F4F] font-bold text-xl">{String(resultStr)}</p>
    </div>
  );
}
