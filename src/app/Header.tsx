import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="h-[152px] w-screen">
      <div className="relative h-full w-full px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-5 items-center text-primary">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-start">
          <div className="font-coolvetica text-[24px] text-black">+33 9 40 07 57 64</div>
        </div>
        <h1 className="col-span-2 sm:col-span-2 lg:col-span-6 uppercase text-[28px] sm:text-[36px] lg:text-[48px] font-vogue text-center leading-[0.8]">
          Cafe <br />
          chouchou
        </h1>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-end">
          <div className="grid grid-cols-3 gap-5 w-full h-full">
            <div className="flex justify-end items-center col-start-2">
              <Icon icon="ph:user-light" className="size-6" />
            </div>
            <div className="flex justify-start items-center col-start-3">
              <Icon icon="humbleicons:cart" className="size-6" />
            </div>
          </div>
        </div>
        <hr className="absolute bottom-0 h-[1px] w-full bg-black" />
      </div>
    </header>
  );
}
