import React from "react";

export function TourCard(props) {
  return (
    <li>
      <div className="flex w-[280px] sm:w-[350px] md:w-[450px] lg:w-[523px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[294px] relative group snap-start select-none overflow-hidden rounded-[10px]">
        <img
          className="w-full h-full left-0 top-0 absolute rounded-[10px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={props.image || "https://via.placeholder.com/523x294"}
          alt={props.title}
        />
        <div className="opacity-0 bg-gradient-to-t from-black w-full h-full left-0 top-0 absolute rounded-[10px] group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
        <div className="flex w-full h-[40px] sm:h-[45px] md:h-[52px] left-0 bottom-0 absolute group-hover:h-full bg-main rounded-[10px] justify-center items-center transition-all duration-500 ease-out">
          <div className="flex text-black text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold font-second group-hover:text-2xl md:group-hover:text-4xl lg:group-hover:text-[48px] text-center select-none mx-2 transition-all duration-500 ease-out">
            {props.title}
          </div>
        </div>
      </div>
    </li>
  );
}