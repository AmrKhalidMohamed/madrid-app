import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import './index'
import Tours from "./Tours";
import Contacts from "./Contacts";
import TourDetails from "./TourDetails";

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
  }
])

function App() {
  return (
      <div className="App container-sm bg-black scrollbar-hide">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;


