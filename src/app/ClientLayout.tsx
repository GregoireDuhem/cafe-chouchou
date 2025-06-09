"use client";

import TransitionOverlay from "./components/TransisionOverlay";
import { LoaderProvider } from "./components/LoaderContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <TransitionOverlay />
      {children}
    </LoaderProvider>
  );
}
