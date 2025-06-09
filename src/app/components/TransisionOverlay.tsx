"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [nextPath, setNextPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === pathname || href.startsWith("#")) return;

      e.preventDefault();
      setNextPath(href);

      const tl = gsap.timeline();
      tl.set(overlayRef.current, { display: "block", opacity: 0 });
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => router.push(href),
      });
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [pathname, router]);

  useEffect(() => {
    // when route changes, fade out overlay
    if (!nextPath) return;

    gsap.fromTo(
      overlayRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.6, ease: "power2.inOut", onComplete: () => setNextPath(null) }
    );
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed bottom-0 left-0 w-full h-full bg-white z-[9999] pointer-events-none opacity-0 hidden"
    >
      <header className="h-[152px] w-screen">
        <div
          className={`relative h-full w-full px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-5 items-center text-primary
          }`}
        >
          <div className="col-span-12 lg:col-span-2 lg:col-start-6 uppercase text-[28px] sm:text-[36px] lg:text-[48px] font-vogue text-center leading-[0.8] cursor-pointer">
            Cafe <br />
            chouchou
          </div>
        </div>
      </header>
    </div>
  );
}
