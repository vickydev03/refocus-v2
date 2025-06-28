import React from "react";
import Card from "./card";
// import Card from "./Card";

function Cards() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="card p-44  max-w-screen-xl m-auto  flex gap-3 rounded-sm justify-between">
        <Card
          width="basis-1/3"
          data={{
            title: "Let's get it, together.",
            foot: "Explore what drives our team",
            
          }}
        />
        <Card
          width="basis-2/3"
          data={{
            title: "Insights and behind the scenes",
            content: true,
            hover: true,
          }}
        />
      </div>
    </div>
  );
}

export default Cards;
