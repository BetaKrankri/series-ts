import ResultDisplay from "./components/ResultDisplay.tsx";
import Form from "./components/Form.tsx";

function App() {
  return (
    <div className="App flex items-center justify-center w-full h-screen ">
      <div className="SeriesCalculator flex flex-col items-center gap-7 p-10 bg-[#132020] rounded-md">
        <ResultDisplay />
        <Form />
      </div>
    </div>
  );
}

export default App;
