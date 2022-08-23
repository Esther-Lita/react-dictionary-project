import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="max-w-5xl px-12 py-6 mt-2 bg-white rounded-lg shadow-sm shadow-sky-100 ">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li
                key={index}
                className="inline-block mx-2 text-sm text-gray-600 capitalize sm:my-2 sm:mx-3 sm:text-base"
              >
                " {synonym}"
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
