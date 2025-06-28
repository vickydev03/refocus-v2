import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
  const [position, setPosition] = useState(0);
  // console.log(position);

  function changePos(val) {
    setPosition(200 * val);
  }
  console.log(position);

  const data = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="bg-zinc-900 ">
      <div className="  w-full relative  ">
        {data.map((e, i) => (
          <Product key={i} data={e} mouse={changePos} count={i} />
        ))}
        <motion.div className="absolute top-0 pointer-events-none w-full h-screen py-10 ">
          <motion.div
            initial={{ y: position + "px", x: "0%" }}
            animate={{ y: position + "px" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className=" bg-sky-300 w-[20rem] h-[200px]  absolute left-1/3 overflow-hidden translate-y-[0]"
          >
            <motion.div
              transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
              animate={{ y: -position + "px" }}
              className="window w-full h-full bg-red-500 "
            ></motion.div>
            <motion.div
              transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
              animate={{ y: -position + "px" }}
              className="window w-full h-full bg-blue-500 "
            ></motion.div>
            <motion.div
              transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
              animate={{ y: -position + "px" }}
              className="window w-full h-full bg-yellow-500 "
            ></motion.div>
            <motion.div
              transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
              animate={{ y: -position + "px" }}
              className="window w-full h-full bg-green-500 "
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
