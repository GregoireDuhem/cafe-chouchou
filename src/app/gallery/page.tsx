/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import { GalleryImage } from "./GalleryImage";
import gsap from "gsap";
import { useLoader } from "../components/LoaderContext";
import ScrambleLink from "../components/ScrambleLink";

export default function page() {
  const { isLoading } = useLoader();

  useEffect(() => {
    if (isLoading) return;
    const items = gsap.utils.toArray(".gallery-item");
    gsap.fromTo(
      items,
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", stagger: 0.4, delay: 0.2 }
    );
  }, [isLoading]);

  return (
    <>
      <div className="min-h-dvh w-screen bg-primary">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-white text-center min-h-[calc(100vh-152px)]">
          <div className="col-span-12 flex items-start justify-between pt-6">
            <Link className="text-[16px] underline" href="/">
              <ScrambleLink href="/" label="Home > Gallery" />
            </Link>
            <div className="flex gap-4 uppercase font-coolvetica-cond text-[20px]">
              <ScrambleLink href="/menu" label="[menu]" />
              <ScrambleLink href="/shop" label="[shop]" />
              <ScrambleLink href="/about-us" label="[about us]" />
            </div>
          </div>

          <div className="col-span-12 uppercase text-[48px] flex items-start pt-[76px]">
            <h1 className="font-vogue pl-[15px] pr-[5px] bg-pink text-primary leading-[50px]">Gallery</h1>
          </div>

          <div className="col-span-12 grid grid-cols-12 pt-[91px] gap-5 pb-[40px]">
            <GalleryImage src="/img/gallery-1.webp" className="col-span-8 h-full" />
            <GalleryImage src="/img/gallery-2.webp" className="col-span-4 h-full" />
            <GalleryImage src="/img/gallery-3.webp" className="col-span-4 h-full" />
            <div className="col-span-8 grid grid-cols-8 gap-5">
              <GalleryImage src="/img/gallery-4.webp" className="col-span-8 h-full" />
              <GalleryImage src="/img/gallery-5.webp" className="col-span-8 h-full" />
            </div>
            <GalleryImage src="/img/gallery-6.webp" className="col-span-12 h-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
