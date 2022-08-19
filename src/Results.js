import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.info) {
    return (
      <div>
        <div className="max-w-5xl px-12 py-6 mt-2 bg-white rounded-lg shadow-sm shadow-indigo-100">
          <h2 className="text-5xl capitalize text-bold">{props.info.word}</h2>
        </div>

        {props.info.meanings.map(function (meaning, index) {
          return (
            <span key={index}>
              <Meaning meaning={meaning} />
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
