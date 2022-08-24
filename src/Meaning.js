import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example.js";

export default function Meaning(props) {
  const synonyms = props.meaning.synonyms;

  return (
    <div>
      <div className="max-w-5xl px-12 py-6 mt-2 bg-white rounded-lg shadow-sm shadow-gray-100">
        <h4 className="font-serif text-xl text-gray-900 capitalize sm:text-3xl">
          {props.meaning.partOfSpeech}
        </h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="mb-4">
                <span className="block text-sm text-gray-500 sm:text-base">
                  {" "}
                  {definition.definition}
                </span>

                <Example example={definition.example} />
              </p>
            </div>
          );
        })}
      </div>

      <Synonyms synonyms={synonyms} />
    </div>
  );
}
