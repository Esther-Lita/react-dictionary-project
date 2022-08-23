import React from "react";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="mb-6">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 border border-gray-100 rounded-full shadow cursor-pointer "
        >
          <span className=""> 🔊</span>
        </a>
        <span className="ml-6 text-sm text-sky-700 sm:text-base">
          {props.phonetic.text}{" "}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
