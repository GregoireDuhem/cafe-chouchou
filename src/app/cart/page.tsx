/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "@/app/Footer";
import Header from "@/app/Header";

export default function page() {
  return (
    <>
      <div className="min-h-dvh w-screen bg-white">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-primary text-center items-start h-full">
          {/* Title */}
          <div className="col-span-12 uppercase text-[48px] flex items-start pt-[76px] h-fit">
            <h1 className="font-vogue pl-[15px] pr-[5px] leading-[50px] bg-pink">Check-out</h1>
          </div>

          {/* Left - Cart Section */}
          <div className="col-span-8 flex flex-col items-start pt-[64px] h-fit">
            {/* Cart Title & Count */}
            <div className="grid grid-cols-8 w-full gap-5 text-start items-end">
              <span className="col-span-1 font-coolvetica text-[40px]">Cart</span>
              <span className="col-span-1 font-coolvetica text-[16px]">(1 Article)</span>
            </div>

            <hr className="w-full h-[1px] bg-black mt-[14px]" />

            {/* Cart Row */}
            <div className="grid grid-cols-8 gap-5 w-full text-start items-center mt-5">
              <img src="/img/shop-1.webp" alt="shop-1" className="col-span-2 w-[210px] h-auto" />
              <span className="col-span-2 font-coolvetica text-[16px]">Chouchou Shirt</span>
              <span className="col-span-1 font-coolvetica text-[16px]">29 €</span>
              <div className="flex col-span-2 justify-end">
                <div className="relative">
                  <button className="w-[57px] border h-[40px]">-</button>
                  <input
                    type="text"
                    value="1"
                    className="w-[57px] border-t-[1px] border-b-[1px] text-center h-[40px]"
                  />
                  <button className="w-[57px] border h-[40px]">+</button>
                  <button className="underline absolute right-1/2 translate-x-1/2 -bottom-6 text-[14px] font-coolvetica text-[#616161]">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <hr className="w-full h-[1px] bg-black mt-[32px]" />
          </div>

          {/* Right - Total Section */}
          <div className="col-span-4 flex flex-col pt-[64px] h-fit items-start">
            <div className="grid grid-cols-4 w-full gap-5 text-start items-end">
              <span className="col-span-2 font-coolvetica text-[16px]">Total</span>
              <div className="col-span-2 flex font-coolvetica text-[40px] gap-[8px] justify-end">
                <span>33,99</span>
                <span>€</span>
              </div>
            </div>
            <hr className="w-full h-[1px] bg-black mt-[14px]" />
            <div className="grid grid-cols-4 gap-5 justify-between w-full mt-[16px] font-coolvetica text-[16px]">
              <div className="col-span-4 justify-between flex">
                <span>Article</span>
                <span>29 €</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 justify-between w-full mt-[24px] font-coolvetica text-[16px]">
              <div className="col-span-4 justify-between flex">
                <span>Shipping Cost</span>
                <span>4.99 €</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 justify-between w-full mt-[48px] font-coolvetica text-[16px]">
              <div className="col-span-4 flex flex-col text-start">
                <span>Discount Code</span>
                <div className="flex w-full items-center mt-[8px]">
                  <input type="text" placeholder="Enter your discount code" className="w-full border h-[51px] pl-2" />
                  <button className="bg-primary h-[51px] w-fit text-white font-coolvetica text-[16px] px-4">OK</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 justify-between w-full mt-[24px] font-coolvetica text-[16px]">
              <div className="col-span-4">
                <button className="bg-black rounded-lg text-white font-coolvetica text-[16px] w-full h-[51px]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
