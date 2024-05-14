import { React } from "react";

export function Form(props) {
  return (
    <div className="">
      <label className="text-white text-sm font-first mb-2">
        {props.label}
      </label>
      <div className="bg-gradient-to-r from-[#5AB558] hover:from-[#65E163] focus-within:from-[#65E163] via-[#94FF92] via-80% hover:via-10% focus-within:via-10% to-[#65E163] hover:to-[#5AB558] focus-within:to-[#5AB558] text-white font-semibold rounded p-[3px] focus-within:p-[4px] transition-all duration-300 shadow-lg">
        <input
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          className="flex w-full bg-emerald-100 text-black font-second appearance-none focus:border-none focus:ring-0 focus:outline-none rounded p-1 shadow-inner shadow-main/30 placeholder:italic placeholder:text-gray-500 "
        />
      </div>
    </div>
  );
}
