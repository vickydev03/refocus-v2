import React from "react";

function Stripe({ src, num }) {
  return (
    <div className="   w-[16.66%] px-7 py-4 border-zinc-500 flex border-t-[1px] border-r-[1px] border-b-[1px] border-seperate justify-between items-center">
      <img src={src.url} alt="img" className="" />
      <p className="font-semibold">{num}</p>
    </div>
  );
}

export default Stripe;
