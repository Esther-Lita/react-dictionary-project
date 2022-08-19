import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    //response.data[0].meanings[0].definitions[0]; How to find the definitions.
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <section className="max-w-5xl py-6 mt-2 bg-white rounded-lg shadow-sm shadow-indigo-100">
        <div className="px-2 py-3 mx-52">
          <h2 className="mb-3 text-2xl text-gray-700 ">
            What word would you like to understand better?
          </h2>
          <form onSubmit={search} className="flex rounded w-4xl ">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="w-full px-6 py-2 text-gray-500 bg-transparent border-2 rounded-md shadow-sm outline-gray-300 focus:outline-indigo-200"
              onChange={handleChange}
            />
          </form>
        </div>
      </section>
      <Results info={results} />
    </div>
  );
}
