/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isGallery = pathname === "/gallery";

  return (
    <header className="h-[152px] w-screen">
      <div
        className={`relative h-full w-full px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-5 items-center ${
          isGallery ? "text-white" : "text-primary"
        }`}
      >
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-start">
          <div className="font-coolvetica text-[12px] sm:text-[24px]">+33 9 40 07 57 64</div>
        </div>
        <Link
          href="/"
          className="col-span-2 sm:col-span-2 lg:col-span-6 uppercase text-[28px] sm:text-[36px] lg:text-[48px] font-vogue text-center leading-[0.8] curor-pointer"
        >
          Cafe <br />
          chouchou
        </Link>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-end">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 w-full h-full">
            <div className="flex justify-end items-center col-start-1 sm:col-start-2">
              <img src="/img/user.svg" alt="user" className="cursor-pointer" />
            </div>
            <Link href="/cart" className="flex justify-start items-center col-start-3">
              <img src="/img/cart.svg" alt="cart" className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <hr className={`absolute bottom-0 h-[2px] w-full ${isGallery ? "bg-white" : "bg-black"}`} />
      </div>
    </header>
  );
}
