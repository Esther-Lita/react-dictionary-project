import React from "react";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="mb-6">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="px-1 py-1 border border-gray-100 rounded-full shadow cursor-pointer sm:px-2 sm:py-2"
        >
          <span className=""> 🔊</span>
        </a>
        <span className="ml-2 text-sm sm:ml-6 text-sky-700 sm:text-base">
          {props.phonetic.text}{" "}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
