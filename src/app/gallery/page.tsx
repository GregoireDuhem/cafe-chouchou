/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import { GalleryImage } from "./GalleryImage";

export default function page() {
  return (
    <>
      <div className="min-h-dvh w-screen bg-primary">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-white text-center min-h-[calc(100vh-152px)]">
          <div className="col-span-12 flex items-start justify-between pt-6">
            <Link className="text-[16px] underline" href="/">
              Home &gt; Gallery
            </Link>
            <div className="flex gap-4 uppercase font-coolvetica-cond text-[20px]">
              <Link href="/menu">[menu]</Link>
              <Link href="/shop">[shop]</Link>
              <Link href="/about-us">[about us]</Link>
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
