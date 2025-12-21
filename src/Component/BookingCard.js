import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleCheck,
  faClock,
  faXmark,
  faChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const BookingCard = ({
  bookingId,
  title,
  image,
  bookingDate,
  status,
  price,
  onCancel,
  tourData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const statusConfig = {
    pending: {
      icon: faClock,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
      label: "Pending",
    },
    active: {
      icon: faCircleCheck,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
      label: "Active",
    },
    canceled: {
      icon: faXmark,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30",
      label: "canceled",
    },
  };

  const currentStatus = statusConfig[status] || statusConfig.pending;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 border ${currentStatus.borderColor} ${currentStatus.bgColor} hover:shadow-lg hover:shadow-main/5`}
    >
      {/* Main Card Content */}
      <div className="flex flex-col sm:flex-row">
        {/* Image Section */}
        <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
          {!imageError && image ? (
            <img
              src={image}
              alt={title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-white/20 text-4xl" />
            </div>
          )}
          {/* Status Badge on Image */}
          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-full ${currentStatus.bgColor} backdrop-blur-sm border ${currentStatus.borderColor}`}
          >
            <FontAwesomeIcon icon={currentStatus.icon} className={`${currentStatus.color} mr-2`} />
            <span className={`${currentStatus.color} font-second text-sm font-semibold`}>
              {currentStatus.label}
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-first font-bold mb-2 line-clamp-1">
              {title}
            </h3>

            <div className="flex flex-wrap gap-4 text-sm mb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} className="text-main" />
                <span className="text-white/70 font-second">
                  {formatDate(bookingDate)}
                </span>
              </div>
              {price && (
                <div className="text-main font-second font-bold">
                  {price.toLocaleString()} EGP
                </div>
              )}
            </div>

            <p className="text-white/50 text-xs font-second">
              Booking ID: #{bookingId}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {tourData && (
              <Link
                to={`/tours/${tourData.id}`}
                state={tourData}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-second text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0"
              >
                View Tour
              </Link>
            )}

            {status !== "canceled" && (
              <button
                onClick={onCancel}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-second text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0"
              >
                Cancel Booking
              </button>
            )}

            {tourData?.description && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-auto flex items-center gap-2 text-white/50 hover:text-white/80 font-second text-sm transition-colors whitespace-nowrap flex-shrink-0"
              >
                {isExpanded ? "Less" : "More"}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      {tourData?.description && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-2 border-t border-white/10">
            <p className="text-white/60 font-second text-sm leading-relaxed line-clamp-3">
              {tourData.description}
            </p>
            {tourData.start_date && tourData.end_date && (
              <p className="text-white/40 font-second text-xs mt-2">
                Tour dates: {tourData.start_date} - {tourData.end_date}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;