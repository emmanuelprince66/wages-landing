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
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60px] md:h-[80px] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 2 }} // Adjusted duration for slower effect
          className="max-w-[150px] max-h-[150px] object-contain"
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
