import React from "react";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import { Button } from "./Component/Button";
import { Form } from "./Component/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ContactUs() {
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
        <div className="w-full h-[425px] absolute md:flex flex-grow ">
          <div className="bg-main w-1/3 p-5">
            <div className=" ">
              <div className="text-black text-6xl font-medium font-second mb-24">
                Meet us
              </div>
              <div className="text-black text-xl font-bold font-['Palanquin'] mb-3">
                Contact info :
              </div>
              <div className="text-black text-xl font-normal font-['Palanquin'] flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                01114934473
              </div>
              <div className="text-black text-xl font-normal font-['Palanquin'] flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                info@madredtours.com
              </div>
              <div className="text-black w-[70%]  text-xl font-normal font-['Palanquin'] flex items-center">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" className="mr-3"/>
                12-Elsaudia bulildings-nasr city-eighth floor
              </div>
            </div>
          </div>
          <div className="w-1/3 h-[425px] relative justify-center items-center text-center bg-locationBg">
            <div className=" text-white text-[80px] font-medium font-second">
              Our location
            </div>
            <div className=" mt-20">
              <Link
                to="https://maps.app.goo.gl/LjtS2KXmCZJwSY1U8"
                target="plank"
              >
                <Button text="Visit us" styles="w-48" />
              </Link>
            </div>
          </div>
          <div className="bg-main w-1/3 p-5">
            <div className="  ">
              <div className="text-black text-6xl font-medium font-second mb-24">
                Pitch us
              </div>
              <div className="text-black text-xl font-normal font-['Palanquin']">
                Message :
              </div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
