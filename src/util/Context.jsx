import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserProfile = createContext();

function Context(props) {
  var [profile, setProfile] = useState();
  const getProfile = () => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        setProfile(response.data.results);
        console.log(response.data.results[3]);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <UserProfile.Provider value={{ profile, setProfile }}>
      {props.children}
    </UserProfile.Provider>
  );
}

export default Context;
