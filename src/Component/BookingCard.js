import React from "react";
import { Button } from "./Button";



const BookingCard = (props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative w-full flex gap-3 bg-main/15 border-2 border-main rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
            loading="lazy"
            src={props.image}
            alt={props.title}
          />
        </div>

        <div className="flex flex-col gap-2 py-2">
          <p className="text-xl text-white font-first">{props.title}</p>
          <p className="text-lg text-white font-second">
            Status: {props.status}
          </p>
          <p className="text-gray-500 font-second">Date: {props.bookingDate}</p>
        </div>
        <div className="absolute right-3">
          <Button
            text="Cancel"
            styles="bg-red-500 hover:bg-red-700 w-24 text-white"
            onClick={props.onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
