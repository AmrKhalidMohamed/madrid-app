import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Card from "./Component/Card";
import { Button } from "./Component/Button";
import { Footer } from "./Component/Footer";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentTourIndex, setCurrentTourIndex] = useState(0);

  const { data: toursData, error: toursError } = useFetch("tours");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTourIndex((prevIndex) =>
        prevIndex === toursData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [toursData]);

  return (
    <div>
      <Navbar activeId={1} />

      <div className="grid sm:grid-cols-12 z-1">
        <div className="sm:col-span-6 z-1">
          <Header />
          <Link to="tours">
            <Button text="Browse our offers" styles="w-48" />
          </Link>
        </div>
        <div className="sm:col-span-6 mx-auto z-1">
          {toursData.length > 0 && (
            <Card
              data={toursData[currentTourIndex]}
              image={`http://127.0.0.1:8000/storage/${toursData[
                currentTourIndex
              ]?.images[0].replace("public/", "")}`}
            />
          )}
        </div>
      </div>
      <div className=" w-full h-80 bg-main mt-[-200px] z-0 bottom-0 left-0"></div>
      <Footer />
    </div>
  );
};

export default Home;
