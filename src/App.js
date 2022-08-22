import Dictionary from "./Dictionary.js";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 ">
      <header>
        <h1 className="font-serif font-bold text-gray-900 text-9xl"> 📖</h1>
      </header>
      <Dictionary keyword={"dog"} />
      <footer className="text-center">Coded by Esthel Lizardo</footer>
    </div>
  );
}

export default App;
