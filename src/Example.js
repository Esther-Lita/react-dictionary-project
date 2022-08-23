import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <span className="text-sm italic text-gray-400">"{props.example}"</span>
    );
  } else {
    return null;
  }
}
