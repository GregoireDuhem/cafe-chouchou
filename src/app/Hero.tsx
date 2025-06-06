/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Hero() {
  return (
    <>
      <div className="min-h-dvh w-screen bg-white">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-[32px] text-primary text-center min-h-[calc(100vh-152px)]">
          {/* Left */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 uppercase flex flex-col justify-center items-start gap-6 font-vogue text-[24px] sm:text-[28px] lg:text-[32px]">
            <button>Menu</button>
            <div className="relative">
              <img
                src="/img/new.png"
                alt="new"
                className="absolute -top-2 -right-[50%] translate-x-1/2 font-coolvetica-cond leading-tight text-[20px] capitalize bg-pink h-6 w-auto px-[2px]"
              />
              {/* <div className="absolute -top-2 right-[36%] translate-x-1/2 font-coolvetica-cond leading-tight text-[20px] capitalize bg-pink h-6 px-[2px]">
                New!
            </div> */}
              <button className="">Shop</button>
            </div>
            <button>Gallery</button>
            <button>About us</button>
          </div>

          {/* Center */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-6 flex justify-center items-center relative">
            <span className="absolute bottom-[30px] left-1/2 -translate-x-1/2 font-vogue text-[28px] sm:text-[36px] lg:text-[40px] opacity-[33%] text-white">
              chouchou
            </span>
            <img src="/img/headerCafeChouchou.png" alt="cafe chouchou" className="h-auto w-[400px]" />
          </div>

          {/* Right */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center gap-4">
            <div className="grid grid-cols-3 gap-5 w-full">
              <div className="col-span-2 col-start-2 flex flex-col items-center justify-center">
                <img src="/img/cakeEvent.png" alt="cake event" className="h-auto w-full" />
                <img src="/img/cakeEvent.png" alt="cake event" className="h-auto w-full scale-120" />
              </div>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="col-span-4 sm:col-span-4 lg:col-span-9 flex flex-col justify-start items-start gap-4 pt-8 text-start">
            <div className="font-greater-theory text-start text-[20px] text-black uppercase">
              8 Rue Godot de Mauroy <br />
              Paris, france
            </div>
            <img src="/img/newStore.png" alt="new store" className="object-cover" />
          </div>

          {/* Bottom Right */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-3 flex items-center">
            <div className="grid grid-cols-3 gap-5 w-full">
              <div className="col-span-2 col-start-2 flex flex-col items-center pt-8 gap-4">
                <img src="/img/newItem.png" alt="cake event" className="h-auto w-full" />
                <div className="text-[40px] uppercase text-[#B11F1F] font-coolvetica">
                  unlock <br /> new item
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
