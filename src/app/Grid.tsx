import React from "react";

export default function Grid() {
  return (
    <div className="fixed top-0 left-0 w-dvw h-screen pointer-events-none z-50">
      <div className="h-full w-full px-4 grid grid-cols-4 gap-4 sm:hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-red-500 opacity-10 h-full" />
        ))}
      </div>
      <div className="hidden sm:grid lg:hidden h-full w-full px-6 grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-red-500 opacity-10 h-full" />
        ))}
      </div>
      <div className="hidden lg:grid h-full w-full px-[120px] grid-cols-12 gap-[20px]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-red-500 opacity-10 h-full" />
        ))}
      </div>
    </div>
  );
}
