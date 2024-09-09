// components/Slideshow.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/animation/a-1.svg",
  "/animation/a-2.svg",
  "/animation/a-3.svg",
  "/animation/a-4.svg",
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the image every 4 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60px] md:h-[50px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          initial={{ opacity: 0, y: 15 }} // New image starts below
          animate={{ opacity: 1, y: 0 }} // Animates to the center
          exit={{ opacity: 0, y: 15 }} // Old image moves down and fades out
          transition={{ duration: 0.1, ease: "easeInOut" }} // Faster transition timing
          className="w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
