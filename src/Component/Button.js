import React from "react";

export function Button(props) {
  return (
    <button
      type="button"
      className="w-48 p-2 rounded-xl bg-main hover:bg-green-700 transition-all duration-300 my-5 font-extrabold font-second text-xl"
    >
      {props.text}
    </button>
  );
}
