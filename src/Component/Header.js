import React from "react";

export default function Header() {
  return (
    <div className="my-4 sm:my-5">
      <div className="title">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-first font-bold mb-2">
          Welcome to Madrid Tours.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white font-second font-light">
          Travelling has never been easier
        </p>
      </div>
    </div>
  );
}