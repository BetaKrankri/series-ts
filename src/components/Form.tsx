type Props = {};

const SERIES = {
  tri: "Triangular",
  fib: "Fibonacci",
  pri: "Primos",
  ser: "Crazy Serie",
};

export default function Form({}: Props) {
  function renderButonery() {
    const buttons: React.ReactNode[] = [];
    for (let i = 9; i >= 0; i--) {
      buttons.push(
        <button
          key={i}
          className="Button text-3xl w-16 h-16 rounded-xl text-[#160D03] bg-[#ECB279] hover:bg-[#E5994D] active:bg-[#B2661A] shadow shadow-[#E5994D] active:shadow-none active:translate-y-0.5 animation-all"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {i}
        </button>
      );
    }
    buttons.push(
      <button
        className="Button flex-1 text-3xl w-16 h-16 rounded-xl text-[#160D03] bg-[#5FA0A0] hover:bg-[#4C8080] active:bg-[#396060] shadow shadow-[#4C8080] active:shadow-none active:translate-y-0.5 animation-all"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        =
      </button>
    );
    return buttons;
  }

  return (
    <form className="Form flex flex-col gap-5 items-center">
      <div className="flex gap-2 items-center w-full">
        <p className="text-xl text-[#EFF5F5]">n=</p>
        <input
          placeholder="0"
          type="number"
          name="number"
          className="rounded-lg bg-[#B2661A] text-[#FCF2E9] text-xl w-full"
          min={0}
          max={1000}
        />
      </div>
      {/* <select className="rounded-lg bg-[#B2661A] text-[#FCF2E9] text-xl w-full decoration-pink-700">
        {Object.entries(SERIES).map(([key, value]) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </select> */}
      <div className="Buttonery w-56 flex flex-row-reverse flex-wrap justify-between gap-3">
        {renderButonery()}
      </div>
    </form>
  );
}
