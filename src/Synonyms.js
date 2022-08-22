import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="max-w-5xl px-12 py-6 mt-2 bg-white rounded-lg shadow-sm shadow-indigo-100 ">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index} className="inline-grid mx-3 capitalize ">
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
