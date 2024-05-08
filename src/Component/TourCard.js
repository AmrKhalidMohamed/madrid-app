import React from "react";
import { Link } from "react-router-dom";

export function TourCard(props) {
  return (
    <li>
      <Link to={`${props.id}`} className="flex w-[523px] h-[294px] relative mt-16 mb-5 group snap-start select-none">
        <img
          className="w-full h-full left-0 top-0 absolute rounded-[10px]"
          src={props.image || "https://via.placeholder.com/523x294"}
          alt={props.title}
        />
        <div className="hidden opacity-5 bg-gradient-to-t from-black w-full md:w-[523px] h-[294px] left-0 top-0 absolute rounded-[10px] group-hover:block group-hover:opacity-100 transition-all duration-300 ease-out"></div>
        <div className="flex w-full md:w-[523px] h-[52px] left-0 bottom-0 absolute group-hover:h-[294px] group-hover:bg-opacity-70 bg-main rounded-[10px] justify-center items-center transition-all duration-300 ease-out">
          <div className="flex text-black text-[27px] font-bold font-second group-hover:text-[48px] text-center select-none mx-2">
            {props.title}
          </div>
        </div>
      </Link>
    </li>
  );
}
