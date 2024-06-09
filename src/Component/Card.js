import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Card = ({ data, image }) => {
  const [activeCircle, setActiveCircle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCircle((prevActiveCircle) => (prevActiveCircle + 1) % 3); // Cycle through 0, 1, 2
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Link
    key={data.id}
    to={`/tours/${data.id}`}
    state={data}
     className="flex flex-col w-[430px] h-[560px] rounded-[10px] relative group overflow-hidden justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[10px] transition-transform duration-300 transform scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="hidden opacity-5 bg-gradient-to-t from-black w-full md:w-[430px] h-[560px] left-0 top-0 absolute rounded-[10px] group-hover:block group-hover:opacity-100 transition-all duration-300 "></div>

      <div className="w-full md:w-[394px] h-[67px] left-[18px] top-[17px] absolute bg-black rounded-md justify-center items-center inline-flex group-hover:opacity-0 transition-all duration-300">
        <div className="text-white text-3xl font-bold font-second relative">
          {data.title}
        </div>
      </div>

      <div className="absolute bottom-10 left-5">
        <div className="scale-0 opacity-5 text-white text-[27px] font-bold font-second group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ">
          Book your {data.title} now with us
        </div>
        <div className="scale-0 opacity-5 w-full text-white text-2xl font-light font-second leading-[37.46px] group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
          {data.description}
        </div>
      </div>

      <div
        className={`absolute w-[18px] h-[18px] left-[174px] bottom-4 bg-white rounded-full ${
          activeCircle === 0 ? "opacity-100" : "opacity-50"
        }`}
      ></div>
      <div
        className={`absolute w-[18px] h-[18px] left-[206px] bottom-4 bg-white rounded-full ${
          activeCircle === 1 ? "opacity-100" : "opacity-50"
        }`}
      ></div>
      <div
        className={`absolute w-[18px] h-[18px] left-[238px] bottom-4 bg-white rounded-full ${
          activeCircle === 2 ? "opacity-100" : "opacity-50"
        }`}
      ></div>
    </Link>
  );
};

export default Card;
