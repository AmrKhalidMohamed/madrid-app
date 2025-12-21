import React from "react";
import { Link } from "react-router-dom";

export function NavItem(props) {
  return (
    <Link
      to={props.link}
      className="text-white text-lg md:text-xl lg:text-2xl xl:text-[32px] group font-second"
    >
      {props.text}
      <div
        className={`scale-0 w-[31px] h-[0px] border border-white transition-all duration-300 ${
          props.active
            ? "scale-100"
            : "group-hover:scale-100 group-hover:opacity-40"
        }`}
      />
    </Link>
  );
}