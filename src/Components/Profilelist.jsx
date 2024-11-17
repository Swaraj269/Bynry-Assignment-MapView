import React, { useContext } from "react";
import { UserProfile } from "../util/Context";
import Profilecard from "./Profilecard";
import Loader from "./Loader";

function Profilelist() {
  const { profile } = useContext(UserProfile);
  return (
    <div className="min-h-screen w-full px-[3vw] pb-[1.5vw] flex-wrap flex justify-center gap-[6vw] lg:gap-[3vw] pt-[12vh] lg:pt-[16vh]">
      {profile && profile.length > 0 ? (
        profile.map((elem, index) => {
          return <Profilecard info={elem} index={index} key={index} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Profilelist;
