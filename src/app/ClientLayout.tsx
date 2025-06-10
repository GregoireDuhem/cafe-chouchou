"use client";

import TransitionOverlay from "./components/TransisionOverlay";
import { LoaderProvider } from "./components/LoaderContext";
import LenisProvider from "./components/LenisProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <TransitionOverlay />
      <LenisProvider>{children}</LenisProvider>
    </LoaderProvider>
  );
}
