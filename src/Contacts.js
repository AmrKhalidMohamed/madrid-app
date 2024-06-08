import React from "react";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import { Button } from "./Component/Button";
import { Form } from "./Component/Form";

export default function () {
  return (
    <div>
      <Navbar activeId={4} />

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
          <div className=" absolute start-72 top-[50px] ">
            <div class="text-black text-6xl font-medium font-second mb-24">
              Meet us
            </div>
            <div class="text-black text-xl font-normal font-['Palanquin']">
              Contact info :
            </div>
          </div>
          <div className="w-[480px] h-[425px] relative justify-center items-center text-center bg-locationBg">
            <div className=" text-white text-[80px] font-medium font-second">
              Our location
            </div>
            <div className=" mt-20">
              <Button text="Visit us" styles="w-48" />
            </div>
          </div>
          <div className=" absolute end-[440px] top-[50px] ">
            <div class="text-black text-6xl font-medium font-second mb-24">
              Pitch us
            </div>
            <div class="text-black text-xl font-normal font-['Palanquin']">
              Message
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
