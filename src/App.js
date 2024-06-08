import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import './index'
import Tours from "./Tours";
import Contacts from "./Contacts";
import TourDetails from "./TourDetails";
import Bookings from "./Bookings";
import { BookingContext } from "./Context/BookingContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/tours',
    element: <Tours />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/tours/:id',
    element: <TourDetails />
  },
  {
    path: '/bookings',
    element: <Bookings />
  }
])

function App() {

  const [bookingId, setBookingId] = useState(null);


  return (
    <div className="App container-md bg-black scrollbar-hide">
      <BookingContext.Provider value={{ bookingId, setBookingId }}>
        <RouterProvider router={router} />
      </BookingContext.Provider>
    </div>
  );
}

export default App;


