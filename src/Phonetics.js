import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="mb-2">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer shdow-lg mb-"
      >
        🔊
      </a>
      <span className="ml-6">{props.phonetic.text} </span>
    </div>
  );
}
