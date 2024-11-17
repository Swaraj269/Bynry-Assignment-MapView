import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserProfile } from "../util/Context";

function Profiledetails() {
  const { profile } = useContext(UserProfile);
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="h-screen flex lg:flex-row flex-col w-full pt-[14vh] lg:pt-[20vh] pb-[2vw] lg:px-[3vw]">
      <div className="leftside flex justify-center lg:h-full h-[30%] w-full lg:w-[30%]">
        <div className="circlediv border-[#3081D0] border-[5.5px] h-[40vw] w-[40vw] lg:h-[20vw] overflow-hidden lg:w-[20vw] rounded-full">
          <img
            className="h-full w-full object-cover"
            src={profile[id].picture.large}
            alt=""
          />
        </div>
      </div>
      <div className="rightside h-full px-[4vw] py-[7vw] lg:py-[3vw] w-full lg:w-[70%]">
        <h1 className="text-5xl lg:text-6xl text-center lg:text-start font-[300]">
          {profile[id].name.title} {profile[id].name.first}{" "}
          {profile[id].name.last}
        </h1>
        <div className="moreinfo flex  lg:items-start lg:flex-row flex-col gap-[4vw] mt-[8vw] lg:mt-[3vw]">
          <div className="emailinfo">
            <h1 className="text-xl lg:text-lg leading-[1] font-[200]">Email</h1>
            <h1 className="text-2xl lg:text-xl mt-[1.5vw] lg:mt-[0.6vw] leading-[1]">
              {profile[id].email}
            </h1>
          </div>
          <div className="locationinfo">
            <h1 className="text-xl lg:text-lg leading-[1] font-[200]">Location</h1>
            <h1 className="text-2xl lg:text-xl mt-[1.5vw] lg:mt-[0.6vw] leading-[1]">
              {profile[id].location.city}, {profile[id].location.country}
            </h1>
          </div>
        </div>
        <div className="moreinfo flex gap-[4vw] mt-[3vw]">
          <div className="createdinfo">
            <h1 className="text-xl lg:text-lg leading-[1] font-[200]">Created at</h1>
            <h1 className="text-2xl lg:text-xl mt-[1.5vw] lg:mt-[0.6vw] leading-[1]">
              {profile[id].registered.date}
            </h1>
          </div>
        </div>
        <div className="moreinfobutton flex justify-center lg:justify-start gap-[4vw] mt-[10vw] lg:mt-[4vw]">
          <Link to={`/map/${id}`} className="locatebutton cursor-pointer hover:bg-[#5FBDFF] active:scale-[0.98] px-[4vw] lg:px-[3vw] w-fit bg-[#3081D0] py-[1.5vw] lg:py-[0.7vw] text-xl lg:text-lg">
            Locate on Map
          </Link>
          <div
            onClick={() => navigate(-1)}
            className="gobackbutton cursor-pointer hover:bg-[#5FBDFF] active:scale-[0.98] px-[4vw] lg:px-[3vw] w-fit bg-[#3081D0] py-[1.5vw] lg:py-[0.7vw] lg:text-lg text-xl"
          >
            {" "}
            Go Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiledetails;
