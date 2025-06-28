import React from "react";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" bg-zinc-900 h-screen w-full text-white font-['satoshi']">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
}

export default App;
