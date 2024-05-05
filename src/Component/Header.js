import React from "react";
import { Card } from "./Card";

export default function Header() {
  return (
    <div className="container-sm mt-5">
      <div className="title">
        <div className="text-4xl w-13 text-white font-first font-bold mb-2">
          Welcome to Madrid Tours.
        </div>
        <div className="text-xl text-white font-second font-light">
          Travelling has never been easier
        </div>
      </div>
    </div>
  );
}
