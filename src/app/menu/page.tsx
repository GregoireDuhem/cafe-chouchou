import React from "react";
import Header from "../Header";
import Grid from "../Grid";

export default function page() {
  return (
    <div className="min-h-dvh w-screen bg-white">
      <Header />
      <Grid />
      <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-primary text-center min-h-[calc(100vh-152px)">
        {/*  */}
        <div className="col-span-12 flex items-start justify-between pt-6">
          <span className="text-[16px] underline">Home &gt; Menu</span>
          <div className="flex gap-4 uppercase font-coolvetica-cond text-[20px]">
            <button>[shop]</button>
            <button>[gallery]</button>
            <button>[about us]</button>
          </div>
        </div>
        <div className="col-span-12 uppercase text-[48px] flex items-start pt-[76px]">
          <span className="font-vogue pl-[15px] pr-[5px] bg-pink">Menu</span>
        </div>
        {/* Container */}
        <div className="col-span-5 flex flex-col text-start uppercase pt-[108px] gap-[40px]">
          {/* DRINKS */}
          <span className="font-coolvetica text-[40px]">Drinks</span>
          {/*  */}
          <div className="gap-8 flex flex-col items-start col-span-5 col-start-1 w-full font-vogue text-[24px]">
            <div className="grid grid-cols-5 w-full gap-5">
              <span className="col-span-3">MATCHA LATTE</span>
              <span className="col-span-1">7.50€</span>
            </div>
            <div className="grid grid-cols-5 w-full gap-5">
              <span className="col-span-3">CAFE LATTE</span>
              <span className="col-span-1">4.50€</span>
            </div>
            <div className="grid grid-cols-5 w-full gap-5">
              <span className="col-span-3">ICE AMERICANO</span>
              <span className="col-span-1">4.50€</span>
            </div>
          </div>

          {/* SNACKS */}
          <span className="font-coolvetica text-[40px]">Snacks</span>
          {/*  */}
          <div className="gap-8 flex flex-col items-start col-span-5 col-start-1 w-full font-vogue text-[24px]">
            <div className="grid grid-cols-5 w-full gap-5 text-start">
              <span className="col-span-1">COOKIE</span>
              <span className="col-span-1">3€</span>
              <span className="col-span-1 col-start-4">CAKE</span>
              <span className="col-span-1">3.90€</span>
            </div>

            <div className="flex flex-col gap-4 text-center w-full text-primary text-[14px] pb-[83px]">
              <div className="grid grid-cols-5 w-full gap-5 uppercase">
                <button className="col-span-1 p-[10px] border ">chocolat</button>
                <button className="col-span-1 p-[10px] border col-start-4">CARROT</button>
              </div>
              <div className="grid grid-cols-5 w-full gap-5 uppercase">
                <button className="col-span-1 p-[10px] border">PISTACHE</button>
                <button className="col-span-1 p-[10px] border col-start-4">CITRON</button>
              </div>
              <div className="grid grid-cols-5 w-full gap-5 uppercase">
                <button className="col-span-1 p-[10px] border">CARAMEL</button>
                <button className="col-span-1 p-[10px] border col-start-4">marbré</button>
              </div>
            </div>
          </div>
        </div>
        {/* Items */}
        <div className="col-span-5 col-start-8 w-full h-full pt-[108px] pb-[83px]">
          <div className="w-full h-full flex items-center justify-center select-frame">
            <span className="font-coolvetica text-[24px] text-primary/20">SELECT YOUR ITEM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
