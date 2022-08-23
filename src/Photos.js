import React from "react";

export default function Photos(props) {
  if (props.image) {
    return (
      <div className="grid grid-cols-3">
        {props.image.map(function (photo, index) {
          return (
            <div key={index} className="flex m-2">
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="w-48 h-20 rounded-lg"
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
