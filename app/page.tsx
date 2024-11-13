"use client";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "./components/Preloader";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import { MobileGallery } from "./components/MobileGallery";
export default function Home() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="relative h-full w-full bg-zinc-950">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Gallery />
      <MobileGallery />
      <p className="absolute lg:bottom-5 bottom-0 right-5 pb-5 lg:pb-0">
        @Design By Arturo Baylon
      </p>
    </main>
  );
}
