import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { CatigoryTitle } from "./Component/CatigoryTitle";
import { TourCardData } from "./Component/TourCardData";
import useFetch from "./hooks/useFetch";
import { Footer } from "./Component/Footer";
import { Loading } from "./Component/Loading";
import { ErrorPage } from "./Component/ErrorPage";

export default function Tours() {
  const navigate = useNavigate();
  const { data: toursData = [], error: toursError, isLoading, refetch } = useFetch("tours");

  const offerTours = toursData.filter((tour) => tour.type === "offer");
  const religiousTours = toursData.filter((tour) => tour.type === "religious");
  const foreignTours = toursData.filter((tour) => tour.type === "external");
  const domesticTours = toursData.filter((tour) => tour.type === "internal");

  const handleGoHome = () => navigate("/", { replace: true });

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeId={2} />

      {isLoading ? (
        <Loading message="Loading tours..." />
      ) : toursError ? (
        <ErrorPage
          title="Tours offline"
          description="Our tours directory failed to respond. Check your connection or retry in a moment."
          errorInfo={toursError}
          onRetry={refetch}
          onGoHome={handleGoHome}
        />
      ) : toursData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <p className="text-white/60 font-second text-lg">
            No tours available at the moment.
          </p>
        </div>
      ) : (
        <div className="px-4 md:px-8">
          <CatigoryTitle text="Special offers" />
          <ul className="flex flex-row gap-4 md:gap-[40px] overflow-x-auto snap-x scroll-smooth pb-4">
            {offerTours.length > 0 ? (
              <TourCardData data={offerTours} />
            ) : (
              <p className="text-white/40 font-second py-8">No special offers available</p>
            )}
          </ul>

          <CatigoryTitle text="Religious tourism" />
          <ul className="flex flex-row gap-4 md:gap-[40px] overflow-x-auto snap-x scroll-smooth pb-4">
            {religiousTours.length > 0 ? (
              <TourCardData data={religiousTours} />
            ) : (
              <p className="text-white/40 font-second py-8">No religious tours available</p>
            )}
          </ul>

          <CatigoryTitle text="Foreign tourism" />
          <ul className="flex flex-row gap-4 md:gap-[40px] overflow-x-auto snap-x scroll-smooth pb-4">
            {foreignTours.length > 0 ? (
              <TourCardData data={foreignTours} />
            ) : (
              <p className="text-white/40 font-second py-8">No foreign tours available</p>
            )}
          </ul>

          <CatigoryTitle text="Domestic tourism" />
          <ul className="flex flex-row gap-4 md:gap-[40px] overflow-x-auto snap-x scroll-smooth pb-4">
            {domesticTours.length > 0 ? (
              <TourCardData data={domesticTours} />
            ) : (
              <p className="text-white/40 font-second py-8">No domestic tours available</p>
            )}
          </ul>
        </div>
      )}

      <Footer />
    </div>
  );
}
