import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from "framer-motion";
function Card({ width, data }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: data.hover ? "#5463f0" : "",
        padding: "1rem",
        transition: "all 500s",
      }}
      className={`rounded-lg bg-zinc-800 ${width} min-h-96 flex flex-col justify-between`}
    >
      <div className="">
        <div className="flex justify-between items-center p-2  rounded-xl ">
          <h1 className="text-xl capitalize">heading</h1>
          <BsArrowReturnRight />
        </div>
        <h1 className="text-3xl font-medium mt-2 px-5">{data.title}</h1>
      </div>
      <div className="down px-10 py-5">
        {data.content && (
          <>
            <h1 className="text-6xl font-bold tracking-tighter leading-none mt-440">
              Start a new project
            </h1>
            <button className=" rounded-full mt-3  border-2 px-3 py-4 ">
              Contact us
            </button>
          </>
        )}
        {data.foot && (
          <p className="text-sm mt-720 text-zinc-500 font-extrabold">
            {data.foot}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
