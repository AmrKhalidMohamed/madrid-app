import React from "react";
import { Link } from "react-router-dom";

export function NavItem(props) {
  return (
    <Link to={props.link} exact className="text-white text-[32px] group font-second">
    {props.text}
      <div class={`scale-0 w-[31px] h-[0px] border-1 ${props.active ? 'scale-100 ' : ' group-hover:scale-100 group-hover:opacity-40 border-white'} transition-all duration-300`}></div>
    </Link>
  );
}
