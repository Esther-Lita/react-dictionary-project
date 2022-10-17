import React from "react";

export default function Photos(props) {
  if (props.image) {
    return (
      <div className="text-center">
        <div className="grid items-center gap-2 sm:grid-cols-2">
          {props.image.map(function (photo, index) {
            return (
              <div key={index} className="">
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="h-auto min-w-full rounded-lg shadow-md sm:h-20 sm:w-48"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
