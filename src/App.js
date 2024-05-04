import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import './index'
import Tours from "./Tours";
import Contacts from "./Contacts";

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
  }
])

function App() {
  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;


