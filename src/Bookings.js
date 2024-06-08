import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import BookingCard from "./Component/BookingCard";

const Bookings = () => {
   const customerId = Cookies.get("customerId");
   const [bookingsData, setBookingsData] = useState([]);
   const [toursData, setToursData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const fetchBookingsAndTours = async () => {
       try {
         const response = await axios.get(
           `http://127.0.0.1:8000/api/bookings?customer_id[eq]=${customerId}`
         );
         const bookings = response.data.data;
         setBookingsData(bookings);

         if (bookings.length > 0) {
           const tourRequests = bookings.map((booking) =>
             axios.get(`http://127.0.0.1:8000/api/tours/${booking.tour_id}`)
           );
           const toursResponses = await Promise.all(tourRequests);
           const tours = toursResponses.map((res) => res.data.data);
           setToursData(tours);
         }
       } catch (error) {
         console.error("Failed to fetch bookings and tours:", error);
       } finally {
         setIsLoading(false);
       }
     };

     fetchBookingsAndTours();
   }, [customerId]);

   const handleCancelBooking = async (bookingId) => {
     const userConfirmed = window.confirm(
       "Are you sure you want to cancel this booking?"
     );

     if (!userConfirmed) {
       return;
     }

     try {
       console.log(`Attempting to cancel booking with ID: ${bookingId}`);
       const booking = bookingsData.find((b) => b.id === bookingId);

       // Ensure that booking data exists before sending the PUT request
       if (!booking) {
         console.error("Booking not found");
         return;
       }

       const updatedBooking = { ...booking, status: "canceled" };

       const response = await axios.put(
         `http://127.0.0.1:8000/api/bookings/${bookingId}`,
         updatedBooking
       );

       if (response.status === 200) {
         // Update the local state to reflect the change
         setBookingsData((prevData) =>
           prevData.map((b) => (b.id === bookingId ? updatedBooking : b))
         );
       } else {
         console.error(
           "Failed to cancel booking:",
           response.status,
           response.data
         );
       }
     } catch (error) {
       if (error.response) {
         console.error(
           "Failed to cancel booking:",
           error.response.status,
           error.response.data
         );
       } else {
         console.error("Failed to cancel booking:", error.message);
       }
     }
   };

   useEffect(() => {
     console.log("Bookings Data:", bookingsData);
     console.log("Tours Data:", toursData);
   }, [bookingsData, toursData]);


  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeId={3} />
      <div className="text-4xl text white font-first font-bold text-center ">Your bookings</div>
      <div className="justify-center">
        {isLoading ? (
          <div>Loading bookings...</div>
        ) : (
          bookingsData.map((booking, index) => (
            <div key={booking.id} className="m-4">
              {toursData[index] ? (
                <BookingCard
                  bookingId={booking.id}
                  title={toursData[index].title}
                  image={`http://127.0.0.1:8000/storage/${toursData[
                    index
                  ].images[0].replace("public/", "")}`}
                  bookingDate={booking.booking_date}
                  status={booking.status}
                  onCancel={() => handleCancelBooking(booking.id)}
                />
              ) : (
                <div>Loading tour data...</div>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
