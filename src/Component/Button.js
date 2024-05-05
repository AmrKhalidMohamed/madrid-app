import React from "react";

export function Button(props) {
  return (
    <button
      type="button"
      className="p-2 ml-3 rounded-xl bg-main hover:bg-green-700 transition-all duration-300 mt-5 font-extrabold font-second text-xl"
    >
      {props.text}
    </button>
  );
}
