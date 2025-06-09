"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [showMainTitle, setShowMainTitle] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glitchTL = gsap.timeline({ repeat: 0 });
    glitchTL
      .fromTo(glitchRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to(glitchRef.current, {
        opacity: 0,
        duration: 0.2,
        delay: 1,
        onComplete: () => setShowMainTitle(true),
      });
  }, []);

  useEffect(() => {
    if (showMainTitle && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }
  }, [showMainTitle]);

  const handleClick = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        overlayRef.current!.style.pointerEvents = "none"; // disable interaction
        onFinish();
      },
    });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col justify-center items-center"
      onClick={handleClick}
    >
      {/* Glitch / 3 Titles */}
      {!showMainTitle && (
        <div
          ref={glitchRef}
          className="flex flex-col gap-16 text-[48px] sm:text-[128px] font-vogue leading-[0.8] text-center"
        >
          <div>
            <p className="glitch" data-text="Cafe">
              Cafe
            </p>
            <p className="glitch" data-text="Chouchou">
              Chouchou
            </p>
          </div>
          <div>
            <p className="glitch" data-text="Cafe">
              Cafe
            </p>
            <p className="glitch" data-text="Chouchou">
              Chouchou
            </p>
          </div>
          <div>
            <p className="glitch" data-text="Cafe">
              Cafe
            </p>
            <p className="glitch" data-text="Chouchou">
              Chouchou
            </p>
          </div>
        </div>
      )}

      {/* Final Title + Click Text */}
      {showMainTitle && (
        <>
          <div className="w-screen h-screen cursor-pointer relative overflow-hidden">
            <div className="absolute top-1/2 w-full cursor-pointer">
              <div className="text-center text-[48px] sm:text-[128px] font-vogue leading-[0.8]">
                Cafe <br /> chouchou
              </div>
              <div ref={textRef} className="opacity-0 mt-32 text-[18px] font-akira-expanded text-center strong-pulse">
                Click anywhere
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
