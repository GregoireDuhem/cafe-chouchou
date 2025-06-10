"use client";

import { useRef } from "react";
import Link from "next/link";

const scrambleOnce = (target: string, progress: number) => {
  const chars = "!@#$▒%&?*+-".split(""); // simpler set
  return target
    .split("")
    .map((char, i) => {
      return i < progress ? char : chars[Math.floor(Math.random() * chars.length)];
    })
    .join("");
};

export default function ScrambleLink({ href, label }: { href: string; label: string }) {
  const textRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!textRef.current) return;

    let frame = 0;
    const totalFrames = 12;
    const revealPerFrame = Math.ceil(label.length / totalFrames);

    const interval = setInterval(() => {
      if (!textRef.current) return;

      const progress = Math.min(label.length, frame * revealPerFrame);
      textRef.current.textContent = scrambleOnce(label, progress);

      frame++;

      if (progress >= label.length) {
        textRef.current.textContent = label;
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <a ref={textRef} onMouseEnter={handleMouseEnter} className="hover:text-pink transition-colors duration-300">
        {label}
      </a>
    </Link>
  );
}
