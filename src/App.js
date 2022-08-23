import Dictionary from "./Dictionary.js";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container flex flex-col items-center max-w-4xl m-auto bg-gray-50">
        <header>
          <h1 className="font-serif font-bold text-gray-900 text-9xl"> 📖</h1>
        </header>

        <Dictionary keyword={"dog"} />
      </div>
      <footer className="w-full py-20 mt-5 text-center bg-black">
        Coded by Esthel Lizardo
      </footer>
    </div>
  );
}

export default App;
