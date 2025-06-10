/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import gsap from "gsap";
import { useLoader } from "../components/LoaderContext";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [prevItem, setPrevItem] = useState<string | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const newImageRef = useRef<HTMLImageElement>(null);
  const drinksRef = useRef<HTMLDivElement>(null);
  const drinksChildRef = useRef<HTMLDivElement>(null);
  const startImageRef = useRef<HTMLImageElement>(null);
  const { isLoading } = useLoader();

  const isSelected = (item: string) => selectedItem === item;

  const handleSelect = (item: string) => {
    if (item !== selectedItem) {
      setPrevItem(selectedItem);
      setSelectedItem(item);
    }
  };

  useEffect(() => {
    if (isLoading) return;
    if (newImageRef.current) {
      gsap.fromTo(
        newImageRef.current,
        { y: "100%", opacity: 1 },
        { y: "0%", opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [selectedItem, isLoading]);

  useEffect(() => {
    if (isLoading) return;
    gsap.fromTo(
      drinksRef.current?.children || [],
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2, delay: 0.1 }
    );
    gsap.fromTo(
      drinksChildRef.current?.children || [],
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.3, delay: 0.1 }
    );
    gsap.fromTo(
      startImageRef.current?.children || [],
      { opacity: 0.5, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, [isLoading]);

  const renderDrinkItem = (name: string, price: string, key: string) => (
    <div className="grid grid-cols-5 w-full gap-5 opacity-0" key={key}>
      <span
        className={`col-span-3 cursor-pointer link-underline w-fit ${isSelected(key) ? "selected" : ""}`}
        onClick={() => handleSelect(key)}
      >
        {name}
      </span>
      <span className="col-span-1">{price}</span>
    </div>
  );

  const renderFlavorButton = (label: string, key: string, extraClasses = "") => (
    <button
      className={`col-span-1 p-[10px] button-gradient ${key ? `btn-${key}` : ""} ${extraClasses} ${
        isSelected(key) ? "selected" : ""
      }`}
      onClick={() => handleSelect(key)}
    >
      {label}
    </button>
  );

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
          <div className="col-span-5 flex flex-col text-start uppercase pt-[108px] gap-[40px]" ref={drinksRef}>
            <span className="font-coolvetica text-[40px] opacity-0">Drinks</span>
            <div
              className="gap-8 flex flex-col items-start col-span-5 col-start-1 w-full font-vogue text-[24px]"
              ref={drinksChildRef}
            >
              {renderDrinkItem("MATCHA LATTE", "7.50€", "matcha")}
              {renderDrinkItem("CAFE LATTE", "4.50€", "cafe")}
              {renderDrinkItem("ICE AMERICANO", "4.50€", "americano")}
            </div>

            <span className="font-coolvetica text-[40px] opacity-0">Snacks</span>
            <div className="gap-8 flex flex-col items-start col-span-5 col-start-1 w-full font-vogue text-[24px] opacity-0">
              <div className="grid grid-cols-5 w-full gap-5 text-start">
                <span className="col-span-1">COOKIE</span>
                <span className="col-span-1">3€</span>
                <span className="col-span-1 col-start-4">CAKE</span>
                <span className="col-span-1">3.90€</span>
              </div>
              <div className="flex flex-col gap-4 text-center w-full text-primary text-[14px] pb-[83px]">
                <div className="grid grid-cols-5 w-full gap-5 uppercase">
                  {renderFlavorButton("CHOCOLAT", "chocolat")}
                  {renderFlavorButton("CARROT", "carrot", "col-start-4")}
                </div>
                <div className="grid grid-cols-5 w-full gap-5 uppercase">
                  {renderFlavorButton("PISTACHE", "pistache")}
                  {renderFlavorButton("CITRON", "citron", "col-start-4")}
                </div>
                <div className="grid grid-cols-5 w-full gap-5 uppercase">
                  {renderFlavorButton("CARAMEL", "caramel")}
                  {renderFlavorButton("MARBRÉ", "marbre", "col-start-4")}
                </div>
              </div>
            </div>
          </div>

          {/* Image Preview */}
          <div className="col-span-5 col-start-8 w-full h-full pt-[108px] pb-[83px]" ref={startImageRef}>
            <div
              ref={imageWrapperRef}
              className="w-full h-full flex items-center justify-center select-frame overflow-hidden relative opacity-0"
            >
              {/* Previous image stays in background */}
              {prevItem && (
                <img
                  src={`/img/${prevItem}.png`}
                  alt={prevItem}
                  className="absolute top-0 left-0 w-full h-full object-contain z-0 scale-75"
                />
              )}
              {/* Animated incoming image */}
              {selectedItem ? (
                <img
                  ref={newImageRef}
                  key={selectedItem}
                  src={`/img/${selectedItem}.png`}
                  alt={selectedItem}
                  className="absolute top-0 left-0 w-full h-full object-contain z-10 scale-75"
                />
              ) : (
                <span className="font-coolvetica text-[24px] text-primary/20 z-10">SELECT YOUR ITEM</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
