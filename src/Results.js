import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics.js";
import Photos from "./Photos";

export default function Results(props) {
  if (props.info) {
    return (
      <div>
        <div className="max-w-5xl px-6 py-3 mt-2 bg-white rounded-lg shadow-sm sm:py-6 sm:px-12 shadow-gray-100">
          <div className="grid grid-cols-2">
            <div className="m-auto">
              <h2 className="mb-6 font-serif text-3xl capitalize sm:text-5xl text-bold">
                {props.info.word}
              </h2>

              {props.info.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
            <div className="m-auto">
              <Photos image={props.image} />
            </div>
          </div>
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
