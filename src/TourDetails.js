import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GoBackButton } from "./Component/GoBackButton";
import { ImageView } from "./Component/ImageView";
import { Footer } from "./Component/Footer";
import { Button } from "./Component/Button";
import axios from "axios";
import { FormsLogic } from "./Component/FormsLogic";

const TourDetails = () => {
  

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const baseUrl = "http://127.0.0.1:8000";
  const [x, setX] = useState(0);
  const imageUrl =
    state.images && state.images.length > 0
      ? state.images[x].replace("public/", "/storage/")
      : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" w-full">
      <div className=" mt-3 items-center grid grid-cols-1 md:grid-cols-12 ">
        <GoBackButton navigate={navigate} className=" md:col-span-2" />
        <div className="flex w-full justify-center items-center md:col-span-10">
          <div className="font-first font-bold text-white text-[40px]">
            {state.title}
          </div>
        </div>
      </div>
      <ImageView
        title={state.title}
        images={state.images}
        baseUrl={baseUrl}
        x={x}
        setX={setX}
        imageUrl={imageUrl}
      ></ImageView>
      <div className="mt-5 w-[80%] mx-auto">
        <div className="flex justify-between items-center text-white mt-5 ">
          <div className="font-bold text-[40px] font-first">Description</div>
          <div className="text-[24px] font-first">
            {state.start_date} - {state.end_date}
          </div>
        </div>
        <div className="text-white text-[24px] mt-5 font-second">
          {state.description}
        </div>
        <div className="text-white text-[24px] mt-5 font-first">
          {state.price} EGP
        </div>
      </div>
      <FormsLogic tourId={state.id} />
      <Footer />
    </div>
  );
};

export default TourDetails;
