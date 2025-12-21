import React from "react";

export function Form(props) {
  return (
    <div className="w-full">
      {props.label && (
        <label className="block text-white text-sm font-first mb-2">
          {props.label}
        </label>
      )}
      <div
        className="bg-gradient-to-r from-main via-[#94FF92] to-main 
          hover:from-[#65E163] hover:via-main hover:to-[#5AB558]
          focus-within:from-[#65E163] focus-within:via-main focus-within:to-[#5AB558]
          rounded-lg p-[3px] focus-within:p-[2px]
          shadow-lg shadow-main/20
          transition-all duration-300"
      >
        <input
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          className="w-full bg-emerald-100 text-black font-second 
            rounded-md px-3 py-2
            placeholder:italic placeholder:text-gray-500 
            focus:outline-none"
        />
      </div>
    </div>
  );
}