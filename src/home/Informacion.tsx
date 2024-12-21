"use client";

import React, { useEffect, useState } from "react";

export const Informacion = () => {
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    const img = new Image();
    img.src = "images/home/imagen1.png";
    img.onload = () => setBgImage(img.src);
  }, []);
  return (
    <section
      className="h-[49rem] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex justify-start items-center h-full w-72 md:w-[39rem] text-white ">
        <div className="md:ml-16 p-3">
          <h2 className="text-base md:text-xl lg:text-5xl 2xl:text-6xl text-primary md:text-white font-semibold mb-5 ">
            ¡¡Embárcate en una aventura única!! <br />
            <span className="text-3xl">
              La Selva Central peruana te espera...
            </span>{" "}
            <br />
            <span className="text-3xl">¡¡ Nosotros te llevamos !!</span>
          </h2>
          <button>
            <a
              href="https://wa.me/51966389211"
              className="flex border-2 border-primary bg-primary text-white py-1 px-3 rounded-md text-xl hover:bg-green-700 hover:text-white transition-colors delay-200"
            >
              Contactanos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
