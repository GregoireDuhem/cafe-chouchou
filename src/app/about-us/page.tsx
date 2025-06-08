/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Footer from "@/app/Footer";
import Header from "@/app/Header";

export default function page() {
  return (
    <>
      <div className="min-h-dvh w-screen bg-white">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-primary text-center min-h-[calc(100vh-152px)]">
          <div className="col-span-12 flex items-start justify-between pt-6">
            <Link className="text-[16px] underline" href="/">
              Home &gt; About us
            </Link>
            <div className="flex gap-4 uppercase font-coolvetica-cond text-[20px]">
              <Link href="/menu">[menu]</Link>
              <Link href="/shop">[shop]</Link>
              <Link href="/gallery">[gallery]</Link>
            </div>
          </div>

          <div className="col-span-12 uppercase text-[48px] flex items-start pt-[76px]">
            <h1 className="font-vogue pl-[15px] pr-[5px] bg-pink ">Gallery</h1>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-5 pb-[64px]">
            <div className="col-span-3">
              <img src="/img/about-us-2.png" alt="about us 2" className="w-full pt-[212px]" />
            </div>
            <div className="col-span-6 text-start text-[20px] text-black pt-[26px] h-fit">
              Welcome to <span className="font-coolvetica">Cafe Chouchou</span> where timeless elegance meets your daily
              ritual. Designed as a refined escape in shades of noir and blush pink, our café blends high fashion
              aesthetics with the art of coffee. <br />
              <br />
              Inspired by the icons of Parisian couture, <span className="font-coolvetica">Cafe Chouchou</span> is more
              than a café it’s a curated experience. Every cup, every detail, is a celebration of style, femininity, and
              bold softness. We believe luxury should be felt, sipped, and shared in quiet moments that feel
              effortlessly beautiful. <br />
              <br />
              At Cafe Chouchou, coffee is just the beginning. It’s a moment to pause, connect, and indulge. Our menu is
              crafted like a runway collection: precise, elegant, and full of personality. Each blend and bite is
              selected with intention an invitation to slow down and savor. With a community of dreamers, creatives, and
              connoisseurs, Café Chouchou becomes a second skin, a place to be seen, and a place to feel seen. Always
              sophisticated. Always Chouchou.
            </div>
            <div className="col-span-3">
              <img src="/img/about-us-1.png" alt="about us 1" className="w-full" />
            </div>
            <div className="col-span-5 col-start-8">
              <img src="/img/about-us-3.png" alt="about us 3" className="w-full" />
            </div>
          </div>
        </div>
        <div className="min-h-dvh w-screen bg-primary">
          <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 pt-[159px] pb-[130px] text-white text-center">
            <div className="col-span-7">
              <img src="/img/about-us-4.png" alt="about us 4" />
            </div>
            <div className="col-span-4 col-start-9">
              <div className="flex flex-col justify-center gap-16">
                <div className="font-bold text-[32px] font-inria-bold">Our values</div>
                <div className="flex flex-col gap-12">
                  <div className="flex justify-between">
                    <span className="text-[20px] font-bold">Sustainability</span>
                    <span className="text-[16px]">Planet-first, always.</span>
                  </div>
                  <hr className="w-full h-[1px] bg-white" />
                  <div className="flex justify-between">
                    <span className="text-[20px] font-bold">Inclusivity</span>
                    <span className="text-[16px]">All welcome, all equal.</span>
                  </div>
                  <hr className="w-full h-[1px] bg-white" />
                  <div className="flex justify-between">
                    <span className="text-[20px] font-bold">Kindness</span>
                    <span className="text-[16px]">Soft hearts, strong values.</span>
                  </div>
                  <hr className="w-full h-[1px] bg-white" />
                  <div className="flex justify-between">
                    <span className="text-[20px] font-bold">Integrity</span>
                    <span className="text-[16px]">Do good, stay true.</span>
                  </div>
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
