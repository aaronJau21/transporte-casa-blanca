"use client";

import { useState } from "react";
import { CarrouselItem } from "./CarrouselItem";

const images = [
  {
    img1: "/images/home/la_marced.jpg",
    title1: "La merced",
    description1:
      "La Merced es una ciudad peruana, capital del distrito y de la provincia de Chanchamayo ubicada en el departamento de Junín. ",
    img2: "/images/home/pichanaqui.jpg",
    title2: "Pichanaki",
    description2:
      "El distrito de Pichanaqui es uno de los seis que conforman la provincia de Chanchamayo ubicada en el departamento de Junín en el centro del Perú",
    img3: "/images/home/oxa.jpg",
    title3: "OxaPampa",
    description3:
      "Oxapampa es una ciudad peruana capital del distrito y de la provincia de Oxapampa, ubicada en el departamento de Pasco.",
  },
  {
    img1: "/images/home/tarma.jpg",
    title1: "Tarma",
    description1:
      "Tarma es una ciudad del centro del Perú, capital del distrito y de la provincia homónimos, en el departamento de Junín. ",
    img2: "/images/home/villarica.jpg",
    title2: "Villarica",
    description2:
      "Conocido por ser uno de los mejores productores de café peruano, resaltan sus monumentos arquitectónicos y espléndidos atractivos naturales.",
    img3: "/images/home/satipo.jpg",
    title3: "Satipo",
    description3:
      "Satipo es una ciudad peruana, capital del distrito y de la provincia homónimos, ubicada en el departamento de Junín",
  },
];

export const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="default-carousel" className="relative">
      {/* Contenedor de imágenes */}
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-[29rem] container mx-auto w-11/12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <CarrouselItem {...image} />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black group-hover:bg-gray-500 ">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black group-hover:bg-gray-500">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};
