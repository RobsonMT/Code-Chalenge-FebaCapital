"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const slides = [
  { id: 1, src: "/banners/banner-1.png", alt: "Slide 1" },
  { id: 2, src: "/banners/banner-2.png", alt: "Slide 2" },
  { id: 3, src: "/banners/banner-3.png", alt: "Slide 3" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Troca automática a cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-[calc(100vh-80px)] flex-shrink-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/70 p-2 shadow-md cursor-pointer"
      >
        <FaLongArrowAltLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/70 p-2 shadow-md cursor-pointer"
      >
        <FaLongArrowAltRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Barra View</h1>
        <p className="text-lg md:text-xl text-black px-4 py-1 rounded-[4px] mb-6 bg-[#DCF8B1]">
          Apartamento com 3 dormitórios sendo 1 suíte
        </p>
        <button className="px-4 py-2 border-2 rounded-lg text-lg font-medium transition-colors">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default Carousel;
