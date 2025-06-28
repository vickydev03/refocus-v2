import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Work() {
  const imgData = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  const [images, setImages] = useState(imgData);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", function (latest) {
    function showImages(arr) {
      setImages((pre) =>
        pre.map((e, i) =>
          arr.indexOf(i) === -1
            ? { ...e, isActive: false }
            : { ...e, isActive: true }
        )
      );
    }

    switch (Math.floor(latest * 100)) {
      case 0:
        showImages([]);
        break;
      case 2:
        showImages([0]);
        break;
      case 3:
        showImages([0, 1]);
        break;
      case 5:
        showImages([0, 1, 2]);
        break;
      case 7:
        showImages([0, 1, 2, 3]);
        break;
      case 9:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 11:
        showImages([0, 1, 2, 3, 4, 5]);
    }
  });

  return (
    <div className="w-full mt-16 ">
      <div className="max-w-screen-xl m-auto text-center relative">
        <h1 className="text-[30vw] leading-none font-bold select-none ">
          work
        </h1>
        <div className="image-box w-full  m-auto h-full  absolute top-0 ">
          {images.map(
            (img, i) =>
              img.isActive && (
                <img
                key={i}
                  className="w-60 rouned-lg absolute -translate-x-[50%] -translate-y-[50%] "
                  src={img.url}
                  style={{
                    top: img.top,
                    left: img.left,
                  }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
