type Props = {
  result: number;
};

export default function ResultDisplay({ result }: Props) {
  return (
    <div className="ResultDisplay w-64 h-full rounded-md bg-[#5FA0A0] px-4 py-5 text-lg text-[#0A1010]">
      <p>
        S(n) <span className="text-[#864C13]">=</span>
      </p>
      <p>
        P(n+3)*T(n-1)/F(n-2) <span className="text-[#864C13]">=</span>
      </p>
      <p className="text-[#2F4F4F] font-bold text-xl">{String(result)}</p>
    </div>
  );
}
