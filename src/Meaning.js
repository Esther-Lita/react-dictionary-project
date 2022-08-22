import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const synonyms = props.meaning.synonyms;

  return (
    <div>
      <div className="max-w-5xl px-12 py-6 mt-2 bg-white rounded-lg shadow-sm shadow-indigo-100">
        <h4 className="text-3xl capitalize">{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <span className="text-base text-gray-600">
                  {" "}
                  {definition.definition}
                </span>
                <br />
                <span className="text-gray-200"> {definition.example}</span>
              </p>
            </div>
          );
        })}
      </div>
      <Synonyms synonyms={synonyms} />
    </div>
  );
}
