import ResultDisplay from "./components/ResultDisplay.tsx";
import Form from "./components/Form.tsx";
import useSerie from "./customhooks/useSerie.tsx";

function App() {
  const { result, serie, setSerie, setTerm, term } = useSerie();

  return (
    <div className="App flex flex-col items-center justify-center w-full h-screen ">
      <div className="SeriesCalculator flex flex-col items-center gap-4 px-10 py-8 bg-[#132020] rounded-md">
        <p className="text-lg">Series Calculator</p>
        <Form setTerm={setTerm} setSerie={setSerie} term={term} />
        <ResultDisplay result={result} serie={serie} />
      </div>

      <div>
        by{" "}
        <span className="font-bold hover:underline hover:cursor-pointer">
          <a href="https://github.com/BetaKrankri/series-ts">BetaKrankri</a>
        </span>
      </div>
    </div>
  );
}

export default App;
