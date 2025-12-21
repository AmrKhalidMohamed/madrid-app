import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, image, currentIndex = 0, totalItems = 0, onDotClick }) => {
  if (!data) return null;

  // Show max 5 dots
  const dotsCount = Math.min(totalItems, 5);

  return (
    <Link
      key={data.id}
      to={`/tours/${data.id}`}
      state={data}
      className="flex flex-col w-full max-w-[430px] aspect-[430/560] rounded-[10px] relative group overflow-hidden justify-center items-center mx-auto"
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[10px] transition-transform duration-700 ease-out transform scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="hidden opacity-5 bg-gradient-to-t from-black w-full h-full left-0 top-0 absolute rounded-[10px] group-hover:block group-hover:opacity-100 transition-all duration-500 ease-out"></div>

      <div className="w-[calc(100%-36px)] h-[50px] sm:h-[67px] left-[18px] top-[17px] absolute bg-black rounded-md justify-center items-center inline-flex group-hover:opacity-0 transition-all duration-500 ease-out">
        <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-second relative text-center px-2 truncate">
          {data.title}
        </div>
      </div>

      <div className="absolute bottom-14 left-5 right-5">
        <div className="scale-0 opacity-5 text-white text-lg sm:text-xl md:text-[27px] font-bold font-second group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
          Book your {data.title} now with us
        </div>
        <div className="scale-0 opacity-5 w-full text-white text-base sm:text-lg md:text-2xl font-light font-second leading-relaxed group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out line-clamp-3">
          {data.description}
        </div>
      </div>

      {/* Dots Indicator - Inside Card */}
      {totalItems > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {Array.from({ length: dotsCount }).map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onDotClick) onDotClick(index);
              }}
              className={`h-[10px] rounded-full transition-all duration-500 ease-out ${
                index === currentIndex
                  ? "bg-main w-6"
                  : "bg-white/50 w-[10px] hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </Link>
  );
};

export default Card;