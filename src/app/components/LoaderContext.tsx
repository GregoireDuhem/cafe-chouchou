"use client";

import { createContext, useContext, useState } from "react";
import Loader from "./Loader";

const LoaderContext = createContext<{ isLoading: boolean }>({ isLoading: true });

export function useLoader() {
  return useContext(LoaderContext);
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoaderContext.Provider value={{ isLoading }}>
      {children}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
    </LoaderContext.Provider>
  );
}
