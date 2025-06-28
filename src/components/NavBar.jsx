import React from "react";
import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  return (
    <div className="bg-zinc-900 max-w-screen-xl m-auto py-4 flex items-center justify-between gap-8 border-b-[1px] border-slate-400">
      <div className="flex">
        <Logo />
        <div className="links flex gap-10 ">
          {["Home", "Work", "Culture", " ", "News"].map((e, i) =>
        
            e.length === 1 ?  (
              <span key={i} className="h-7 bg-zinc-600 w-['2px'] px-[1px]"></span>
            ) : (
              <a
                href="#"
                className=" font-regular flex items-center gap-1 text-sm"
                key={i}
              >
                {i == 1 ? (
                  <span
                    style={{ boxShadow: "0 0 25rem green" }}
                    key={i}
                    className="inline-block h-1 w-1 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {e}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default NavBar;

const isOdd = (i) => {
  return i % 2;
};
