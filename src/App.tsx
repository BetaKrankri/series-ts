import ResultDisplay from "./components/ResultDisplay.tsx";
import Form from "./components/Form.tsx";
import Brain from "./components/Brain.tsx";
import { useState } from "react";

function App() {
  const [term, setTerm] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="App flex items-center justify-center w-full h-screen ">
      <div className="SeriesCalculator flex flex-col items-center gap-7 p-10 bg-[#132020] rounded-md">
        <Brain setResult={setResult} term={term} />
        <ResultDisplay result={result} />
        <Form setTerm={setTerm} />
      </div>
    </div>
  );
}

export default App;
