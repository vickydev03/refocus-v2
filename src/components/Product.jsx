import React from "react";
import Button from "./Button";

function Product({ data, mouse, count }) {
  return (
    <div className="  text-white pt-2 px-1 ">
      <div
        onMouseEnter={() => mouse(count)}
        className="  max-w-screen-xl px-40  m-auto mt-20 flex justify-between items-center"
      >
        <h1 className="text-6xl capitalize font-semibold ">{data.title}</h1>
        <div className="content w-1/3 ">
          <p className="description text-sm mb-5 ">{data.description}</p>
          <div className="flex gap-10">
            {data.live && <Button />}
            {data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
