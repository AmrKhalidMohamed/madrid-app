import React from "react";
import img1 from "../Images/img1.jpg";

export function Card() {
  return (
    <div class="flex w-[430px] h-[560px] relative">
        <img class="w-[430px] h-[560px] left-0 top-0 absolute rounded-[10px]" src={img1} />
        <div class="w-[394px] h-[67px] px-[116px] left-[18px] top-[17px] absolute bg-black rounded-md justify-center items-center gap-2.5 inline-flex">
        <div class="text-white text-4xl font-bold font-second">Hajj tours</div>
        </div>
        <div class="w-[18px] h-[18px] left-[174px] top-[512px] absolute bg-white rounded-full"></div>
        <div class="w-[18px] h-[18px] left-[206px] top-[512px] absolute opacity-80 bg-zinc-400 rounded-full"></div>
        <div class="w-[18px] h-[18px] left-[238px] top-[512px] absolute opacity-80 bg-zinc-400 rounded-full"></div>
    </div>
  );
}
