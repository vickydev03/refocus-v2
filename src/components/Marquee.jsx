import React from "react";
import { motion } from "framer-motion";

function Marquee({ imgUrl, direaction = "left" }) {
  return (
    <div className="flex p-8 items-center w-full gap-3 overflow-hidden">
      <motion.div
        className="flex flex-shrink-0 gap-40 py-10 pr-40 font-bold"
        initial={{ x: "0%" }}
        animate={{ x: direaction == "left" ? "-100%" : "100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {imgUrl.map((url, i) => (
          <>
            <img src={url} key={i} className="w-[7vw] flex-shrink-0" />
            <img src={url} key={i} className="w-[7vw] flex-shrink-0" />
          </>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
