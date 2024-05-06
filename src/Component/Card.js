import React from "react";
import img1 from "../Images/img1.jpg";

export function Card() {
  return (
    <div class="flex flex-col w-[430px] h-[560px] rounded-[10px] relative group overflow-hidden justify-center items-center">
      <div className="absolute inset-0 bg-img1 bg-cover rounded-[10px] transition-transform duration-300 transform scale-100 group-hover:scale-110"></div>

      <div className=" hidden opacity-5 bg-gradient-to-t from-black w-[430px] h-[560px] left-0 top-0 absolute rounded-[10px] group-hover:block group-hover:opacity-100 transition-all duration-300 "></div>

      <div className="w-[394px] h-[67px] px-[116px] left-[18px] top-[17px] absolute bg-black rounded-md justify-center items-center gap-2.5 inline-flex group-hover:opacity-0 transition-all duration-300">
      <div className="text-white text-4xl font-bold font-second">Hajj tours</div>
      </div>

      <div className=" absolute bottom-10">
        <div className="scale-0 opacity-5 text-white text-[27px] font-bold font-second group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ">Book your Hajj tour now with us</div>
        <div className="scale-0 opacity-5 w-96 text-white text-2xl font-light font-second leading-[37.46px] group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">we provide accommodation, transportation, and guidance for our Pilgrims. obtain  Hajj visa, budget for costs, and prioritize health and safety.</div>
      </div>

      <div className="group-hover:hidden w-[18px] h-[18px] left-[174px] top-[512px] absolute bg-white rounded-full"></div>
      <div className="group-hover:hidden w-[18px] h-[18px] left-[206px] top-[512px] absolute opacity-80 bg-zinc-400 rounded-full"></div>
      <div className="group-hover:hidden w-[18px] h-[18px] left-[238px] top-[512px] absolute opacity-80 bg-zinc-400 rounded-full"></div> 
    </div>
  );
}
