import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";


import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container flex flex-col items-center max-w-4xl px-10 m-auto bg-gray-50">
        <header>
          <h1 className="text-6xl font-bold text-gray-900 sm:text-9xl"> 📖</h1>
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
