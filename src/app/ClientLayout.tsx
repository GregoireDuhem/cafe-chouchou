"use client";

import TransitionOverlay from "./components/TransisionOverlay";
import { LoaderProvider } from "./components/LoaderContext";
import LenisProvider from "./components/LenisProvider";
import Grid from "./Grid";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <TransitionOverlay />
      <Grid />
      <LenisProvider>{children}</LenisProvider>
    </LoaderProvider>
  );
}
