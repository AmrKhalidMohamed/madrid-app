// src/Component/Loading.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Loading({ message = "Loading...", size = "default" }) {
  const sizeClasses = {
    small: "text-2xl",
    default: "text-4xl",
    large: "text-6xl",
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FontAwesomeIcon
        icon={faSpinner}
        className={`text-main ${sizeClasses[size]} animate-spin mb-4`}
      />
      <p className="text-white/60 font-second">{message}</p>
    </div>
  );
}