import React from "react";

export function CatigoryTitle(props) {
  return (
    <div>
      <div className="font-first font-bold text-white text-[40px] mt-5">
        {props.text}
        <svg
          className="inline ml-3"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0607 13.0607C24.6464 12.4749 24.6464 11.5251 24.0607 10.9393L14.5147 1.3934C13.9289 0.80761 12.9792 0.80761 12.3934 1.3934C11.8076 1.97918 11.8076 2.92893 12.3934 3.51472L20.8787 12L12.3934 20.4853C11.8076 21.0711 11.8076 22.0208 12.3934 22.6066C12.9792 23.1924 13.9289 23.1924 14.5147 22.6066L24.0607 13.0607ZM1.31134e-07 13.5L23 13.5L23 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
            fill="white" />
        </svg>
      </div>
    </div>
  );
}
