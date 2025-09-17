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
    <div className="relative w-full h-screen overflow-hidden">
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
        className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 bg-black/70 p-4 shadow-md cursor-pointer z-30"
      >
        <FaLongArrowAltLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 bg-black/70 p-4 shadow-md cursor-pointer z-30"
      >
        <FaLongArrowAltRight className="w-6 h-6 text-white" />
      </button>

      {/* Botões mobile (juntos no canto inferior direito) */}
      <div className="flex md:hidden absolute bottom-20 left-6 space-x-1 z-20">
        <button onClick={prevSlide} className="bg-black/70 p-4 shadow-md">
          <FaLongArrowAltLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={nextSlide} className="bg-black/70 p-4 shadow-md">
          <FaLongArrowAltRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-30 text-white">
        <p className="uppercase mb-2">Pré Lançamento</p>
        <h1 className="text-5xl font-bold mb-4">Barra View</h1>
        <p className="text-sm sm:text-lg md:text-xl text-black px-3 py-1 rounded-[4px] mb-6 bg-[#DCF8B1]">
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
