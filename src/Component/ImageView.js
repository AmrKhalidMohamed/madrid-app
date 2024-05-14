import { React } from "react";

export function ImageView(props) {
  return (
    <div className="relative justify-center items-center select-none">
      <img
        src={`${props.baseUrl}${props.imageUrl}`}
        alt={props.title}
        className="w-[80%] aspect-video object-cover mt-5 relative z-0 mx-auto rounded-[10px]"
      />
      <svg
        onClick={() => {
          props.x > 0
            ? props.setX(props.x - 1)
            : props.setX(props.images.length - 1);
        }}
        className="w-12 h-12 fill-white absolute top-1/2 left-[11%] transform -translate-y-1/2 cursor-pointer hover:fill-main transition-all duration-300 ease-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10.605 15.555"
      >
        <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
      </svg>
      <svg
        onClick={() => {
          props.x < props.images.length - 1
            ? props.setX(props.x + 1)
            : props.setX(0);
        }}
        className="w-12 h-12 fill-white absolute top-1/2 right-[11%] transform -translate-y-1/2 scale-x-[-1] cursor-pointer hover:fill-main transition-all duration-300 ease-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10.605 15.555"
      >
        <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
      </svg>
    </div>
  );
}
