import React from "react";

export default function Photos(props) {
  if (props.image) {
    return (
      <div className="grid grid-cols-3">
        {props.image.map(function (photo, index) {
          return (
            <div key={index} className="flex object-contain m-2">
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="w-20 h-10 shadow-sm sm:h-20 ronded-lg sm:w-48 sm:rounded-lg"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
