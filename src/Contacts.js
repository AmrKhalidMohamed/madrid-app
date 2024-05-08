import React from "react";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import { Button } from "./Component/Button";
import { locationBg } from "./Images/locationBg.png";

export default function () {
  return (
    <div>
      <Navbar activeId={3} />

      <div className="w-full text-center mb-[180px] items-center">
        <div className="text-white text-[40px] font-bold font-first">
          We would love to hear from you
        </div>
        <div className="text-white text-[29px] font-light font-second">
          Ready to answer all your questions
        </div>
      </div>

      <div className="w-full h-[425px] justify-center items-center inline-flex">
        <div className="flex w-full h-[425px] absolute justify-center items-center bg-main">
          <div className="w-[480px] h-[425px] relative justify-center items-center text-center bg-locationBg">
            <div className=" text-white text-[80px] font-medium font-second">
              Our location
            </div>
            <div className=" mt-20">
              <Button text="Visit us" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
