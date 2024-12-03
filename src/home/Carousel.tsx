"use client";
import React, { useState } from "react";
import { ItemCrousel } from "./ItemCrousel";

export const Carousel = () => {
  const images = [
    {
      img: "/images/slide1.jpg",
      title: "La Merced",
      description:
        "La Merced es conocida por ser la «Capital Cafetalera del Perú» debido a su producción de café. También es un destino turístico popular, especialmente para aquellos que buscan aventuras y disfrutan de la naturaleza",
    },
    {
      img: "/images/slide2.jpg",
      title: "Oxapampa ",
      description:
        "Conocido como «La Puerta de Oro de la Selva Central», ofrece varios atractivos turísticos que te permitirán disfrutar de su exquisita gastronomía, una gran biodiversidad y la hospitalidad de sus habitantes.",
    },
    {
      img: "/images/slide3.jpg",
      title: "Pichanaki",
      description:
        "Después de sus incursiones por la Selva Central, los sacerdotes franciscanos se convencieron de la necesidad de contar con un convento, un centro de operaciones para su labor evangelizadora.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-screen mx-auto overflow-hidden">
      {/* Contenedor de las imágenes */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src) => (
          <ItemCrousel key={src.title} src={src} />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 right-1/2 bg-white p-3 rounded-3xl space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary "
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
