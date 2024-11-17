import React from "react";
import Navbar from "./Components/Navbar";
import Routing from "./util/Routing";

function App() {
  return (
    
    <div className="bg-[#1A1A1D]  min-h-screen w-full ">
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;
