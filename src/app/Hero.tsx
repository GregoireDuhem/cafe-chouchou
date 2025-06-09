"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./components/Button";
import gsap from "gsap";
import { useLoader } from "./components/LoaderContext";

export default function Hero() {
  const leftLine = useRef(null);
  const rightLine = useRef(null);
  const topLine = useRef(null);
  const { isLoading } = useLoader();

  useEffect(() => {
    if (isLoading) return;
    gsap.fromTo(leftLine.current, { height: 0 }, { height: "58%", duration: 2.3, ease: "power3.out", opacity: 1 });
    gsap.fromTo(rightLine.current, { height: 0 }, { height: "100%", duration: 2.3, ease: "power3.out", opacity: 1 });
    gsap.fromTo(topLine.current, { width: 0 }, { width: "100%", duration: 2.3, ease: "power3.out", opacity: 1 });
  }, [isLoading]);

  return (
    <>
      <div className="min-h-dvh w-screen bg-white relative overflow-hidden">
        <Header />

        {/* Animated lines */}
        <div
          ref={leftLine}
          className="absolute left-[27.5%] top-0 w-[1px] bg-black z-10 opacity-0"
          style={{ height: "100vh" }}
        ></div>
        <div ref={rightLine} className="absolute right-[27.5%] top-0 w-[1px] bg-black z-10 bottom-0 opacity-0"></div>
        <div ref={topLine} className="absolute bottom-[42%] left-0 h-[1px] bg-black z-10 opacity-0"></div>

        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-[32px] pb-32 text-primary text-center min-h-[calc(100vh-152px)]">
          {/* Left */}
          <div
            className="col-span-4 sm:col-span-2 lg:col-span-3 uppercase pt-10 md:pt-0 flex flex-col justify-center items-center md:items-start gap-6 
          font-vogue text-[24px] sm:text-[28px] lg:text-[32px]"
          >
            <Button Title="Menu" />
            <div className="relative">
              <img
                src="/img/new.png"
                alt="new"
                className="absolute -top-2 -right-[50%] translate-x-1/2 font-coolvetica-cond leading-tight text-[20px] capitalize bg-pink h-6 w-auto px-[2px]"
              />
              <Button Title="Shop" />
            </div>
            <Button Title="Gallery" />
            <Button Title="About us" />
          </div>

          {/* Center */}
          <div className="col-span-4 sm:col-span-2 lg:col-span-6 flex flex-col items-center justify-center relative py-8">
            <span className="absolute bottom-[50px] left-1/2 -translate-x-1/2 font-vogue text-[28px] sm:text-[36px] lg:text-[40px] opacity-[33%] text-white">
              chouchou
            </span>
            <img src="/img/headerCafeChouchou.png" alt="cafe chouchou" className="h-auto w-fit" />
          </div>

          {/* Right */}
          <div className="col-span-4 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center gap-4 pt-8">
            <div className="grid grid-cols-3 gap-5 w-full">
              <div className="col-span-1 sm:col-span-2 col-start-1 sm:col-start-2 flex flex-col items-center justify-center">
                <div className="relative">
                  <img
                    src="/img/coffee.png"
                    alt="coffee"
                    className="absolute left-10 bottom-6 h-auto w-full scale-125 z-10"
                  />
                  <img src="/img/starBg.png" alt="cake event" className="h-auto w-full" />
                  <img
                    src="/img/starBgAnim.png"
                    alt=" cake event"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-full z-0 animate-pulse-scale"
                  />
                  <img
                    src="img/freeCoffee.png"
                    alt="coffee event"
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 h-auto w-[85%] z-10"
                  />
                </div>
                <img src="/img/cakeEvent.png" alt="cake event" className="h-auto w-full" />
              </div>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="col-span-4 sm:col-span-4 lg:col-span-9 flex flex-col justify-start items-start gap-4 pt-8 text-start bg-white z-0">
            <div className="font-greater-theory text-start text-[20px] text-black uppercase">
              8 Rue Godot de Mauroy <br />
              Paris, france
            </div>
            <div className="relative w-full h-full">
              <img
                src="/img/newStoreOpening.png"
                alt="new store"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%]"
              />
              <img src="/img/newStore.png" alt="new store" className="object-cover" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-3 flex items-center">
            <div className="grid grid-cols-3 gap-5 w-full">
              <div className="col-span-2 col-start-2 flex flex-col items-center pt-8 gap-4">
                <div className="relative z-0">
                  <img
                    src="/img/star.png"
                    alt="star"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-[spin_6s_linear_infinite]"
                  />
                  <img src="/img/newItem.png" alt="cake event" className="relative h-auto w-full z-10" />
                </div>

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
