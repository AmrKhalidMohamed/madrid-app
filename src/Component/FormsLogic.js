import { React, useState, useEffect } from "react";
import { Form } from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function FormsLogic(props) {
  const navigate = useNavigate();
  const [bookingId, setBookingId] = useState();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const [customerId, setCustomerId] = useState(null);

  useEffect(() => {
    const customerIdFromCookie = Cookies.get("customerId");
    if (customerIdFromCookie) {
      setCustomerId(customerIdFromCookie);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let customerResponse;
      if (!customerId) {
        // Create a new customer if customerId is null
        customerResponse = await axios.post(
          "https://madridtours-production.up.railway.app/api/customers",
          {
            name: name,
            phone_number: phoneNumber,
          }
        );
        Cookies.set("customerId", customerResponse.data.data.id);
        setCustomerId(customerResponse.data.data.id);
      }

      // Create a new booking with the customerId (either existing or newly created)
      const bookingResponse = await axios.post(
        "https://madridtours-production.up.railway.app/api/bookings",
        {
          customer_id: customerId || customerResponse.data.data.id,
          tour_id: props.tourId,
          status: "pending",
          booking_date: bookingDate,
        }
      );

      Cookies.set("bookingId", bookingResponse.data.data.id);
      alert("Booking completed successfully!");
      navigate("/tours");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="mt-5 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {!customerId && (
        <>
          <Form
            label="Name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form
            label="Phone number"
            type="number"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </>
      )}
      <Form
        label="Booking date"
        type="date"
        value={bookingDate}
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
