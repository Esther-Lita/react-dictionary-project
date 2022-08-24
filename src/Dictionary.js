import React, { useState } from "react";
import axios from "axios";

import SearchBtn from "./SearchBtn.js";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.keyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);

  function handleDictionaryResponse(response) {
    //response.data[0].meanings[0].definitions[0]; How to find the definitions.
    setResults(response.data[0]);
  }

  function handlePhotos(response) {
    setImage(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001ff7b4703df91441d82fb507892f3dc34";

    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <section className="max-w-md py-6 mt-2 bg-white rounded-lg shadow-sm sm:max-w-5xl shadow-gray-100">
          <SearchBtn />
          <div className="m-10 " id="Search">
            <h2 className="hidden mb-3 text-2xl text-gray-700 sm:block">
              What would you like to understand better?
            </h2>
            <h2 className="block mb-1 text-xl text-gray-700 sm:hidden">
              Search for a word...🔍
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex rounded w-md sm:max-w-4xl"
            >
              <input
                type="text"
                name="search"
                placeholder={keyword}
                className="px-6 py-2 text-gray-500 bg-transparent border-2 rounded-md shadow-sm sm:w-full outline-gray-300 focus:outline-sky-200 "
                onChange={handleChange}
              />
            </form>
            <div className="text-xs text-gray-400">
              {" "}
              i.e. toy, beach, city, planet{" "}
            </div>
          </div>
        </section>

        <Results info={results} image={image} />
      </div>
    );
  } else {
    load();
  }
}
