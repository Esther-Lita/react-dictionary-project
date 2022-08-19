import Dictionary from "./Dictionary.js";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-indigo-50 ">
      <header>
        <h1 className="text-5xl font-bold text-center text-gray-900">
          {" "}
          WELCOME
        </h1>
      </header>
      <Dictionary />
      <footer className="text-center">Coded by Esthel Lizardo</footer>
    </div>
  );
}

export default App;
