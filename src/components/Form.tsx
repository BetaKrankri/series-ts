import { SERIES } from "../Calculus";
type Props = {
  setTerm: React.Dispatch<React.SetStateAction<number>>;
  setSerie: React.Dispatch<React.SetStateAction<SERIES>>;
  term: number;
};

export default function Form({ setTerm, setSerie, term }: Props) {
  return (
    <form
      className="Form flex flex-col gap-5 items-center w-full  border border-[#80b3b3] rounded-lg p-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex gap-2 items-center w-full">
        <p className="text-xl text-[#EFF5F5]">n=</p>
        <input
          value={term}
          placeholder="0"
          type="number"
          name="number"
          className="rounded-lg bg-[#B2661A] text-[#FCF2E9] text-xl w-full"
          min={0}
          max={1000}
          onChange={(e) => {
            setTerm((t) => {
              const val = parseInt(e.target.value);
              return !val ? 0 : val > 1000 || val < 0 ? t : val;
            });
          }}
        />
      </div>
      <select
        className="rounded-lg bg-[#B2661A] text-[#FCF2E9] text-xl w-full"
        onChange={(e) => {
          setSerie(e.target.value as SERIES);
        }}
      >
        {Object.entries(SERIES).map(([key, value]) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
}
