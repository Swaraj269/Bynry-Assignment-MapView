import React from "react";
import { Link } from "react-router-dom";

function Profilecard({ info, index }) {
  return (
    <div className="h-60 w-52 cursor-pointer active:scale-[0.989] rounded hover:bg-[#31363F]  flex flex-col py-[2vw] lg:py-[1vw] items-center bg-[#3C3D37]">
      <Link
        to={`/profile/${index}`}
        className="upperpart flex flex-col items-center"
      >
        <div className="profilepic border-[3.2px] border-[#3081D0] overflow-hidden h-[16vw] w-[16vw] lg:h-[5vw] lg:w-[5vw] rounded-full">
          <img
            className="h-full w-full object-cover"
            src={info.picture.thumbnail}
            alt=""
          />
        </div>
        <h1 className="text-lg text-center leading-[1] mt-[3vw] lg:mt-[0.8vw]">
          {info.name.first} {info.name.last}
        </h1>
        <h2 className=" text-sm text-center capitalize font-[200] text-[#F5F7F8] leading-[1] mt-[2vw] lg:mt-[0.4vw]">
          {info.gender}
        </h2>
        <div className="location flex text-center h-fit mt-[2vw] lg:mt-[0.6vw] gap-[0.2vw]">
          <i className="ri-map-pin-line text-sm"></i>
          <h1 className="text-sm ">
            {info.location.city}, {info.location.country}
          </h1>
        </div>
      </Link>
      <Link
        to={`/map/${index}`}
        className="findmapbutton hover:bg-[#5FBDFF] active:scale-[0.98] cursor-pointer px-[2.4vw] py-[1.6vw] lg:px-[1.4vw] lg:py-[0.6vw] bg-[#3081D0] mt-[3.8vw] text-md lg:mt-[0.8vw] lg:text-xs"
      >
        Locate on Map
      </Link>
    </div>
  );
}

export default Profilecard;
