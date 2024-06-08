import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col w-[430px] h-[560px] rounded-[10px] relative group overflow-hidden justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[10px] transition-transform duration-300 transform scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})`}}
      ></div>
      <div className="hidden opacity-5 bg-gradient-to-t from-black w-full md:w-[430px] h-[560px] left-0 top-0 absolute rounded-[10px] group-hover:block group-hover:opacity-100 transition-all duration-300 "></div>

      <div className="w-full md:w-[394px] h-[67px] left-[18px] top-[17px] absolute bg-black rounded-md justify-center items-center inline-flex group-hover:opacity-0 transition-all duration-300">
        <div className="text-white text-3xl font-bold font-second relative">{title}</div>
      </div>

      <div className="absolute bottom-10 left-5">
        <div className="scale-0 opacity-5 text-white text-[27px] font-bold font-second group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ">
          Book your {title} now with us
        </div>
        <div className="scale-0 opacity-5 w-full text-white text-2xl font-light font-second leading-[37.46px] group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
          {description}
        </div>
      </div>

      <div className="group-hover:hidden w-[18px] h-[18px] left-[174px] top-[512px] absolute bg-white rounded-full"></div>
      <div className="group-hover:hidden w-[18px] h-[18px] left-[206px] top-[512px] absolute opacity-80 bg-zinc-400 rounded-full"></div>
      <div className="group-hover:hidden w-[18px] h-[18px] left-[238px] top-[512px] absolute opacity-80 bg-zinc-400 rounded-full"></div>
    </div>
  );
};

export default Card;
