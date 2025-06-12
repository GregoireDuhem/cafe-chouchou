/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Footer() {
  return (
    <div className="min-h-[643px] w-screen overflow-x-hidden relative z-0 bg-[linear-gradient(to_bottom,_#1E1E1E_0%,_rgba(0,0,0,1)_94%)]">
      <div className="text-black/30 font-inknut-semibold text-[8rem] rotate-[7.5deg] absolute top-42 w-full text-center z-10 hidden sm:block">
        CAFE CHOUCHOU
      </div>
      <div className="relative h-full w-full px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-10 items-start text-white z-20">
        <div className="col-span-4 sm:col-span-6 lg:col-span-2 pt-[16px] flex gap-2 sm:gap-[14px]">
          <Icon icon="pajamas:twitter" className="size-6 cursor-pointer" />
          <Icon icon="uil:instagram" className="size-6 cursor-pointer" />
          <Icon icon="uil:youtube" className="size-6 cursor-pointer" />
        </div>

        <FooterInfos
          Title="About us"
          body={["Legal information", "Cookie policy", "General terms and conditions", "Privacy policy", "Contact"]}
        />
        <FooterInfos Title="Categories" body={["Menu", "Shop", "Gallery", "About us"]} />
        <FooterInfos
          Title="Customer Service"
          body={["Feedback and discussion", "Payment", "Shipping conditions", "Guarantee"]}
        />

        {/* Newsletter */}
        <div className="col-span-12 sm:col-span-6 sm:col-start-7 pt-14">
          <div className="text-sm sm:text-[20px] font-semibold">SUBSCRIBE TO OUR NEWSLETTER</div>
          <div className="pb-5 text-sm sm:text-[16px]">
            Keep up to date with new collections, products and exclusive offers.
          </div>
          <div className="flex flex-col w-full relative items-center justify-center gap-4">
            <div className="flex w-full relative items-center justify-center h-[30px]">
              <input
                type="text"
                placeholder="Your email"
                name="email"
                className="w-full h-[40px] text-start placeholder:text-start placeholder:text-white placeholder:text-[12px] sm:placeholder:text-[16px] focus:outline-none bg-transparent"
              />
              <Icon icon="ph:arrow-right" className="size-8 cursor-pointer" />
            </div>
            <hr className="w-full h-[3px] bg-white " />
          </div>
        </div>

        {/* Payment methods */}
        <div className="col-span-12 col-start-1 w-full flex flex-col gap-6">
          <div className="text-sm sm:text-[16px] font-semibold flex flex-col gap-5 items-start">
            <div className="flex gap-2 items-center">
              <Icon icon="ph:lock" className="size-6" />
              <span>Secure Payment Guaranteed</span>
            </div>
            <hr className="w-full h-[3px] bg-white" />
            <img src="/img/logoCB.webp" alt="logoCB" className="w-auto h-[32px] object-contain" />
          </div>
          <div className="text-center font-semibold pb-5">© 2025, Cafe Chouchou. ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  );
}

function FooterInfos({ Title, body }: { Title?: string; body?: string[] }) {
  return (
    <div className="pt-[24px] sm:pt-[81px] w-full col-span-12 lg:col-span-3 flex flex-col gap-[28px] text-center sm:text-left">
      <span className="text-sm sm:text-[16px] font-semibold">{Title}</span>
      <div className="flex flex-col gap-3 text-sm sm:text-[16px] leading-[140%] items-center sm:items-start">
        {body?.map((item, index) => (
          <div key={index} className="cursor-pointer link-underline w-fit">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
