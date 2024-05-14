import { React, useState } from "react";
import { Form } from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function FormsLogic(props) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Create a new customer
    const customerResponse = await axios.post(
      "http://127.0.0.1:8000/api/customers",
      {
        name: name,
        phone_number: phoneNumber,
      }
    );

    // Create a new booking with the created customer's ID
    const bookingResponse = await axios.post(
      "http://127.0.0.1:8000/api/bookings",
      {
        customer_id: customerResponse.data.data.id,
        tour_id: props.tourId,
        booking_date: bookingDate,
      }
    );

  } catch (error) {
    console.log(error.message)
  }
};
  return (
    <form
      method="post"
      action={navigate(-1)}
      onSubmit={handleSubmit}
      className=" mt-5 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <Form
        label="Name"
        type="text"
        placeholder="Your name"
        value={props.name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form
        label="Phone number"
        type="number"
        placeholder="Your phone number"
        value={props.phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Form
        label="booking date"
        type="date"
        value={props.bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
      />
      <button
        type="submit"
        className="your-button-classes mx-auto w-full px-2 py-1 rounded-xl bg-main shadow-lg shadow-main/50
        hover:bg-green-700 transition-all duration-300 font-extrabold
        font-second text-xl mt-4"
      >
        Book now
      </button>
    </form>
  );
}
