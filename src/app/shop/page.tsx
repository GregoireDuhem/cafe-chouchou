/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLoader } from "../components/LoaderContext";
import gsap from "gsap";
import ScrambleLink from "../components/ScrambleLink";

export default function page() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isLoading } = useLoader();

  useEffect(() => {
    if (isLoading) return;
    gsap.fromTo(
      imageRef.current?.children || [],
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.2, delay: 0.1 }
    );
  }, [isLoading]);

  return (
    <>
      <div className="min-h-dvh w-screen bg-white">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-primary text-center min-h-[calc(100vh-152px)">
          {/*  */}
          <div className="col-span-12 flex items-start justify-between pt-6">
            <Link className="text-[16px] underline" href="/">
              <ScrambleLink href="/" label="Home > Shop" />
            </Link>
            <div className="flex gap-4 uppercase font-coolvetica-cond text-[20px]">
              <ScrambleLink href="/menu" label="[menu]" />
              <ScrambleLink href="/gallery" label="[gallery]" />
              <ScrambleLink href="/about-us" label="[about us]" />
            </div>
          </div>
          <div className="col-span-12 uppercase text-[48px] flex items-start pt-[76px]">
            <h1 className="font-vogue pl-[15px] pr-[5px] bg-pink leading-[50px]">Shop</h1>
          </div>
          {/* Container */}
          <div
            className="col-span-12 grid md:grid-cols-12 text-start uppercase pt-[108px] gap-x-5 h-full w-full pb-[82px]"
            ref={imageRef}
          >
            <ProductCard
              img="/img/shop-1.webp"
              name="Chouchou Tee-shirt"
              price="29€"
              stars="4"
              reviews="4"
              rate="4.3"
            />
            <ProductCard img="/img/shop-2.webp" name="Chouchou Mug" price="14€" stars="5" reviews="57" rate="4.8" />
            <ProductCard img="/img/shop-3.webp" name="Coming Soon" price="" stars="" reviews="" rate="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ProductCard({
  img,
  name,
  price,
  stars,
  reviews,
  rate,
}: {
  img?: string;
  name?: string;
  price?: string;
  stars?: string;
  reviews?: string;
  rate?: string;
}) {
  const isComingSoon = !stars || !reviews;
  const starCount = Math.floor(parseFloat(stars || "0"));

  return (
    <div
      className={`col-span-4 gap-[19px] flex flex-col cursor-pointer group justify-start opacity-0 ${
        isComingSoon ? "pointer-events-none" : ""
      }`}
    >
      <div className="w-full h-full bg-black/1 relative">
        {name === "Chouchou Tee-shirt" && (
          <img
            src="/img/new.webp"
            alt=" new"
            className="absolute top-2 right-2 font-coolvetica-cond leading-tight text-[20px] capitalize bg-pink h-6 w-auto"
          />
        )}
        <Link href="/item">
          <img
            src={img}
            alt={name}
            className="w-full transition-all duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-start">
        <div className="flex justify-between font-coolvetica text-[16px] text-black">
          <span>{name}</span>
          <span>{price}</span>
        </div>

        {/* Keep stars invisible for layout if coming soon */}
        <div className="flex gap-[19px] mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon={i < starCount ? "iconamoon:star-fill" : "iconamoon:star-bold"}
                className={`size-5 text-primary ${isComingSoon ? "invisible" : ""}`}
              />
            ))}
          </div>
          {!isComingSoon && (
            <div className="font-coolvetica text-[15px] text-black flex items-end gap-1">
              {rate} <span className="text-[#484646]">({reviews})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
