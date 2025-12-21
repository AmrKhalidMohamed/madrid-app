import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import { Button } from "./Component/Button";
import { Form } from "./Component/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }
    alert("Message sent successfully!");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeId={4} />

      <div className="w-full text-center mb-10 md:mb-20 px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-[40px] font-bold font-first">
          We would love to hear from you
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-[29px] font-light font-second mt-2">
          Ready to answer all your questions
        </p>
      </div>

      <div className="w-full px-4 md:px-8 pb-10">
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto rounded-xl overflow-hidden">
          
          <div className="bg-main w-full lg:w-1/3 p-6 md:p-8">
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-second mb-8 md:mb-16">
              Meet us
            </h2>

            <div className="space-y-4">
              <h3 className="text-black text-lg md:text-xl font-bold font-second">
                Contact info:
              </h3>

              <a
                href="tel:01114934473"
                className="text-black text-base md:text-xl font-normal font-second flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <FontAwesomeIcon icon={faPhone} className="w-5 flex-shrink-0" />
                <span>01114934473</span>
              </a>

              <a
                href="mailto:info@madredtours.com"
                className="text-black text-base md:text-xl font-normal font-second flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 flex-shrink-0" />
                <span className="break-all">info@madredtours.com</span>
              </a>

              <div className="text-black text-base md:text-xl font-normal font-second flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 flex-shrink-0 mt-1" />
                <span>12-Elsaudia buildings, Nasr City, Eighth floor</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 min-h-[280px] sm:min-h-[350px] md:min-h-[425px] relative flex flex-col justify-center items-center text-center bg-locationBg bg-cover bg-center p-6">
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10">
              <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium font-second mb-6 md:mb-10">
                location
              </h2>
              <Link
                to="https://maps.app.goo.gl/LjtS2KXmCZJwSY1U8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Visit us" styles="w-36 sm:w-48" />
              </Link>
            </div>
          </div>

          <div className="bg-main w-full lg:w-1/3 p-6 md:p-8">
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-second mb-8 md:mb-16">
              Pitch us
            </h2>

            <div>
              <p className="text-black text-lg md:text-xl font-normal font-second mb-2">
                Message:
              </p>
              <Form
                label=""
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                text="Send"
                styles="w-full mt-4"
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}