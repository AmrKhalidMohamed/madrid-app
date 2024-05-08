import React from "react";
import Logo from '../Images/madridLogo.png'

export function Footer() {
  return (
    <div className="w-full md:w-[1098px] h-auto md:h-[308px] px-4 md:px-[79px] py-10 flex-col md:flex-row justify-center items-center gap-2.5 inline-flex mt-52">
      <div className="flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-[146px]">
          <div className="flex gap-10 sm:gap-32">
          <div className="w-[140px] h-[38px] relative">
            <img src={Logo} alt="Logo" className="w-full"></img>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full md:w-[103px] h-7 text-white text-sm font-bold font-['Arial'] leading-tight">
              Heading Label
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full md:w-[103px] h-7 text-white text-sm font-bold font-['Arial'] leading-tight">
              Heading Label
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full md:w-[103px] h-7 text-white text-sm font-bold font-['Arial'] leading-tight">
              Heading Label
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
            <div className="w-full md:w-[120px] text-white text-sm font-normal font-['Arial'] leading-tight">
              Text Link
            </div>
          </div>
          </div>
        </div>
        <div className="w-full md:w-[940px] text-center text-white text-sm font-normal font-['Arial'] leading-tight">
          Copyright © 2024 Madrid tours. All rights reserved.
        </div>
      </div>
    </div>
  );
}
