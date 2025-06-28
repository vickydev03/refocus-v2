import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({ title = "Get Started" }) {
  return (
    <div className="div">
      <button className="  bg-zinc-100 w-36 px-2 text-center py-[4px] rounded-2xl text-black flex justify-between gap-5 items-center  ">
        <span className="">{title}</span>
        <span children="">
          <BsArrowReturnRight/>
        </span>
      </button>
    </div>
  );
}

export default Button;
