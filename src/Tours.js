import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import { CatigoryTitle } from "./Component/CatigoryTitle";
import { TourCardData } from "./Component/TourCardData";
import useFetch from "./hooks/useFetch";
import { Footer } from "./Component/Footer";

export default function () {
  const { data: toursData, error: toursError } = useFetch("tours");

  const offerTours = toursData.filter((tour) => tour.type === "offer");
  const religiousTours = toursData.filter((tour) => tour.type === "religious");
  const foreignTours = toursData.filter((tour) => tour.type === "external");
  const domesticTours = toursData.filter((tour) => tour.type === "internal");

  return (
    <div>
      <Navbar activeId={2} />
      <CatigoryTitle text="Special offers" />
      <ul className="flex flex-row gap-[40px] overflow-y-auto snap-x scroll-smooth">
        <TourCardData data={offerTours} />
      </ul>
      <CatigoryTitle text="Religious tourism" />
      <ul className="flex flex-row gap-[40px] overflow-y-auto snap-x scroll-smooth">
        <TourCardData data={religiousTours} />
      </ul>
      <CatigoryTitle text="Foreign tourism" />
      <ul className="flex flex-row gap-[40px] overflow-y-auto snap-x scroll-smooth">
        <TourCardData data={foreignTours} />
      </ul>
      <CatigoryTitle text="Domestic tourism" />
      <ul className="flex flex-row gap-[40px] overflow-y-auto snap-x scroll-smooth">
        <TourCardData data={domesticTours} />
      </ul>
      <Footer />
    </div>
  );
}
