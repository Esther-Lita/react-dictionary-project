import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="container max-w-4xl px-10 m-auto bg-gray-50">
        <header>
          <h1 className="text-6xl font-bold text-center text-gray-900 md:text-9xl">
            {" "}
            📖
          </h1>
        </header>

        <Dictionary keyword={"dog"} />
      </div>
      <div className="">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
