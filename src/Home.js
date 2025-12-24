import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Card from "./Component/Card";
import { Button } from "./Component/Button";
import { Footer } from "./Component/Footer";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faMapLocationDot,
  faHeadset,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { Loading } from "./Component/Loading";
import { ErrorPage } from "./Component/ErrorPage";
import "./index.css";

const Home = () => {
  const [currentTourIndex, setCurrentTourIndex] = useState(0);
  const { data: toursData = [], error: toursError, refetch } = useFetch("tours");

  useEffect(() => {
    if (!toursData || toursData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentTourIndex((prevIndex) =>
        prevIndex === toursData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [toursData]);

  const features = [
    {
      icon: faMoneyBillWave,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees",
    },
    {
      icon: faMapLocationDot,
      title: "Top Destinations",
      description: "Handpicked locations for unforgettable experiences",
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description: "We're here whenever you need assistance",
    },
    {
      icon: faShieldHeart,
      title: "Safe Travel",
      description: "Your safety is our top priority",
    },
  ];

  const stats = [
    { number: "1000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeId={1} />

      {toursError ? (
        <ErrorPage
          title="Tours unavailable"
          description="We couldn't fetch the latest tours. Retry or return once services are back online."
          errorInfo={toursError}
          onRetry={refetch}
        />
      ) : (
        <>
          {/* Hero Section - Fixed Responsive */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 pb-8 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <Header />
              <Link to="/tours" className="inline-block">
                <Button text="Browse our offers" styles="w-48" />
              </Link>
            </div>

            {/* Card */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              {toursData.length > 0 ? (
                <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[430px]">
                  <Card
                    data={toursData[currentTourIndex]}
                    image={`https://madridtours-production.up.railway.app/storage/${toursData[
                      currentTourIndex
                    ]?.images[0]?.replace("public/", "")}`}
                    currentIndex={currentTourIndex}
                    totalItems={toursData.length}
                    onDotClick={(index) => setCurrentTourIndex(index)}
                  />
                </div>
              ) : (
                <Loading message="Loading featured tours..." size="small" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Green Wave Section - Behind the card */}
      <div className="w-full h-40 sm:h-52 md:h-64 lg:h-80 bg-main mt-[-60px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-120px] relative z-0 overflow-hidden">
        {/* Animated Wave Pattern */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-24 sm:h-32 md:h-40 animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(0,0,0,0.08)"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-20 sm:h-24 md:h-32 animate-wave-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C200,20 400,100 600,60 C800,20 1000,100 1200,80 L1200,120 L0,120 Z"
            fill="rgba(0,0,0,0.05)"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-16 sm:h-20 md:h-24 animate-wave-slower"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,100 500,20 700,60 C900,100 1100,20 1200,40 L1200,120 L0,120 Z"
            fill="rgba(0,0,0,0.03)"
          />
        </svg>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-first text-center mb-3 md:mb-4">
            Why Choose Us
          </h2>
          <p className="text-white/60 text-sm sm:text-base text-center font-second mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            We make your travel dreams come true with exceptional service and
            unforgettable experiences
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-main/30 rounded-xl p-4 sm:p-6 text-center hover:border-main transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-main/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-main/20 transition-colors">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-main text-xl sm:text-2xl"
                  />
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold font-first mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-second">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-first mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-black/70 text-xs sm:text-sm md:text-base font-second">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Preview */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-first mb-1 sm:mb-2">
                Popular Tours
              </h2>
              <p className="text-white/60 text-sm sm:text-base font-second">
                Explore our most booked experiences
              </p>
            </div>
            <Link to="/tours">
              <Button text="View All" styles="w-28 sm:w-32" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {toursData.slice(0, 3).map((tour) => (
              <Link
                key={tour.id}
                to={`/tours/${tour.id}`}
                state={tour}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src={`https://madridtours-production.up.railway.app/storage/${tour.images?.[0]?.replace(
                      "public/",
                      ""
                    )}`}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white text-lg sm:text-xl font-bold font-first mb-1">
                      {tour.title}
                    </h3>
                    <p className="text-main font-second font-bold text-sm sm:text-base">
                      {tour.price} EGP
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-main/20 to-main/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-first mb-3 sm:mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-second mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let us help you create memories that last a lifetime. Book your
            dream tour today!
          </p>
          <div className="flex justify-center">
            <Link to="/tours">
              <Button text="Explore Tours" styles="w-40 sm:w-44" />
            </Link>
          </div>
        </div>
      </section>

        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
