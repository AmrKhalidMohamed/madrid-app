import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import { Button } from "./Component/Button";
import BookingCard from "./Component/BookingCard";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ErrorPage } from "./Component/ErrorPage";

const Bookings = () => {
  const navigate = useNavigate();
  const customerId = Cookies.get("customerId");
  const [bookingsData, setBookingsData] = useState([]);
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  const fetchBookingsAndTours = useCallback(async () => {
    if (!customerId) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setBookingsData([]);
    setToursData([]);

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
      } else {
        setToursData([]);
      }
    } catch (err) {
      console.error("Failed to fetch bookings and tours:", err);
      setError({
        message: err.message,
        status: err.response?.status || err.status,
        statusText: err.response?.statusText,
        code: err.response?.data?.code || err.status || err.code,
      });
    } finally {
      setIsLoading(false);
    }
  }, [customerId]);

  useEffect(() => {
    fetchBookingsAndTours();
  }, [fetchBookingsAndTours]);

  const handleCancelBooking = async (bookingId) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!userConfirmed) return;

    try {
      const booking = bookingsData.find((b) => b.id === bookingId);
      if (!booking) return;

      const updatedBooking = { ...booking, status: "canceled" };

      const response = await axios.put(
        `http://127.0.0.1:8000/api/bookings/${bookingId}`,
        updatedBooking
      );

      if (response.status === 200) {
        setBookingsData((prevData) =>
          prevData.map((b) => (b.id === bookingId ? updatedBooking : b))
        );
      }
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  // Filter bookings
  const filteredBookings = bookingsData.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  // Count by status
  const statusCounts = {
    all: bookingsData.length,
    pending: bookingsData.filter((b) => b.status === "pending").length,
    active: bookingsData.filter((b) => b.status === "active").length,
    canceled: bookingsData.filter((b) => b.status === "canceled").length,
  };

  // No customer - show prompt
  if (!customerId) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar activeId={3} />
        <div className="flex flex-col items-center justify-center py-32 px-4">
          <div className="w-24 h-24 bg-main/10 rounded-full flex items-center justify-center mb-6">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-main text-4xl" />
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-first font-bold text-center mb-3">
            No Bookings Yet
          </h2>
          <p className="text-white/60 font-second text-center mb-8 max-w-md">
            Start your adventure! Browse our amazing tours and book your next unforgettable experience.
          </p>
          <Link to="/tours">
            <Button text="Explore Tours" styles="w-44" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar activeId={3} />
        <ErrorPage
          title="Bookings unavailable"
          description="We couldn't fetch your bookings right now. Retry once services are back online."
          errorInfo={error}
          onRetry={fetchBookingsAndTours}
          onGoHome={() => navigate("/tours")}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeId={3} />

      {/* Header Section */}
      <div className="px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-white font-first font-bold text-center mb-2">
            Your Bookings
          </h1>
          <p className="text-white/60 font-second text-center mb-8">
            Manage and track all your tour reservations
          </p>

          {/* Filter Tabs */}
          {bookingsData.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["all", "pending", "active", "canceled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-full font-second text-sm transition-all duration-300 ${
                    filter === status
                      ? "bg-main text-black font-bold"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-black/20 text-xs">
                    {statusCounts[status]}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bookings List */}
      <div className="px-4 md:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <FontAwesomeIcon
                icon={faSpinner}
                className="text-main text-4xl animate-spin mb-4"
              />
              <p className="text-white/60 font-second">Loading your bookings...</p>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/60 font-second text-lg mb-6">
                {filter === "all"
                  ? "You don't have any bookings yet"
                  : `No ${filter} bookings found`}
              </p>
              {filter !== "all" ? (
                <button
                  onClick={() => setFilter("all")}
                  className="text-main font-second hover:underline"
                >
                  View all bookings
                </button>
              ) : (
                <Link to="/tours">
                  <Button text="Browse Tours" styles="w-40" />
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking, index) => {
                const tourIndex = bookingsData.indexOf(booking);
                return (
                  <BookingCard
                    key={booking.id}
                    bookingId={booking.id}
                    title={toursData[tourIndex]?.title || "Loading..."}
                    image={
                      toursData[tourIndex]?.images?.[0]
                        ? `http://127.0.0.1:8000/storage/${toursData[tourIndex].images[0].replace("public/", "")}`
                        : ""
                    }
                    bookingDate={booking.booking_date}
                    status={booking.status}
                    price={toursData[tourIndex]?.price}
                    onCancel={() => handleCancelBooking(booking.id)}
                    tourData={toursData[tourIndex]}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bookings;