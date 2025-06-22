/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";

export function GalleryImage({ src, className }: { src: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true); // Handles browser cache case on refresh
    }
  }, []);

  return (
    <div className={`${className} relative overflow-hidden gallery-item opacity-0`}>
      {!loaded && <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-md z-10" />}
      <img
        ref={imgRef}
        src={src}
        alt="gallery"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 opacity-0 ${
          loaded ? "opacity-100 z-20" : "opacity-0"
        }`}
      />
    </div>
  );
}
