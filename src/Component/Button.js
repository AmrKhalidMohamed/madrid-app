import React from "react";

export function Button(props) {
  return (
    <div>
    <button
      type="button"
      className="w-48 p-2 rounded-xl bg-main shadow-lg shadow-main/50 hover:bg-green-700 transition-all duration-300 font-extrabold font-second text-xl my-4"
    >
      {props.text}
    </button>
    </div>
  );
}
