/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const isSelected = (item: string) => selectedItem === item;

  return (
    <>
      <div className="min-h-dvh w-screen bg-white">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-primary text-center min-h-[calc(100vh-152px)]">
          {/* Breadcrumb and Nav */}
          <div className="col-span-12 flex items-start justify-between pt-6">
            <Link className="text-[16px] underline" href="/">
              Home &gt; Menu
            </Link>
            <div className="flex gap-4 uppercase font-coolvetica-cond text-[20px]">
              <Link href="/shop">[shop]</Link>
              <Link href="/gallery">[gallery]</Link>
              <Link href="/about-us">[about us]</Link>
            </div>
          </div>

          {/* Title */}
          <div className="col-span-12 uppercase text-[48px] flex items-start pt-[76px]">
            <span className="font-vogue pl-[15px] pr-[5px] leading-[50px] bg-pink">Menu</span>
          </div>

          {/* Menu Section */}
          <div className="col-span-5 flex flex-col text-start uppercase pt-[108px] gap-[40px]">
            {/* DRINKS */}
            <span className="font-coolvetica text-[40px]">Drinks</span>
            <div className="gap-8 flex flex-col items-start col-span-5 col-start-1 w-full font-vogue text-[24px]">
              <div className="grid grid-cols-5 w-full gap-5">
                <span
                  className="col-span-3 cursor-pointer link-underline w-fit"
                  onClick={() => setSelectedItem("matcha")}
                >
                  MATCHA LATTE
                </span>
                <span className="col-span-1">7.50€</span>
              </div>
              <div className="grid grid-cols-5 w-full gap-5">
                <span
                  className="col-span-3 cursor-pointer link-underline w-fit"
                  onClick={() => setSelectedItem("cafe")}
                >
                  CAFE LATTE
                </span>
                <span className="col-span-1">4.50€</span>
              </div>
              <div className="grid grid-cols-5 w-full gap-5">
                <span
                  className="col-span-3 cursor-pointer link-underline w-fit"
                  onClick={() => setSelectedItem("americano")}
                >
                  ICE AMERICANO
                </span>
                <span className="col-span-1">4.50€</span>
              </div>
            </div>

            {/* SNACKS */}
            <span className="font-coolvetica text-[40px]">Snacks</span>
            <div className="gap-8 flex flex-col items-start col-span-5 col-start-1 w-full font-vogue text-[24px]">
              <div className="grid grid-cols-5 w-full gap-5 text-start">
                <span className="col-span-1">COOKIE</span>
                <span className="col-span-1">3€</span>
                <span className="col-span-1 col-start-4">CAKE</span>
                <span className="col-span-1">3.90€</span>
              </div>
              <div className="flex flex-col gap-4 text-center w-full text-primary text-[14px] pb-[83px]">
                <div className="grid grid-cols-5 w-full gap-5 uppercase">
                  <button
                    className={`col-span-1 p-[10px] button-gradient btn-chocolat ${
                      isSelected("chocolat") ? "selected" : ""
                    }`}
                    onClick={() => setSelectedItem("chocolat")}
                  >
                    CHOCOLAT
                  </button>
                  <button
                    className={`col-span-1 col-start-4 p-[10px] button-gradient btn-carrot ${
                      isSelected("carrot") ? "selected" : ""
                    }`}
                    onClick={() => setSelectedItem("carrot")}
                  >
                    CARROT
                  </button>
                </div>
                <div className="grid grid-cols-5 w-full gap-5 uppercase">
                  <button
                    className={`col-span-1 p-[10px] button-gradient btn-pistache ${
                      isSelected("pistache") ? "selected" : ""
                    }`}
                    onClick={() => setSelectedItem("pistache")}
                  >
                    PISTACHE
                  </button>
                  <button
                    className={`col-span-1 p-[10px] button-gradient btn-citron col-start-4 ${
                      isSelected("citron") ? "selected" : ""
                    }`}
                    onClick={() => setSelectedItem("citron")}
                  >
                    CITRON
                  </button>
                </div>
                <div className="grid grid-cols-5 w-full gap-5 uppercase">
                  <button
                    className={`col-span-1 p-[10px] button-gradient btn-caramel ${
                      isSelected("caramel") ? "selected" : ""
                    }`}
                    onClick={() => setSelectedItem("caramel")}
                  >
                    CARAMEL
                  </button>
                  <button
                    className={`col-span-1 p-[10px] button-gradient btn-marbre col-start-4 ${
                      isSelected("marbre") ? "selected" : ""
                    }`}
                    onClick={() => setSelectedItem("marbre")}
                  >
                    MARBRÉ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Preview */}
          <div className="col-span-5 col-start-8 w-full h-full pt-[108px] pb-[83px]">
            <div className="w-full h-full flex items-center justify-center select-frame">
              {selectedItem ? (
                <img src={`/img/${selectedItem}.png`} alt={selectedItem} className="max-w-full max-h-full" />
              ) : (
                <span className="font-coolvetica text-[24px] text-primary/20">SELECT YOUR ITEM</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
