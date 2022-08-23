import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example.js";

export default function Meaning(props) {
  const synonyms = props.meaning.synonyms;

  return (
    <div>
      <div className="max-w-5xl px-12 py-6 mt-2 bg-white rounded-lg shadow-sm shadow-sky-100">
        <h4 className="text-3xl text-gray-900 capitalize ">
          {props.meaning.partOfSpeech}
        </h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="mb-4">
                <span className="block text-base text-gray-500">
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
