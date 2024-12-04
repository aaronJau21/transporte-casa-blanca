import { Line } from "@/components";
import Link from "next/link";
import React from "react";

export const Informacion = () => {
  return (
    <section
      className="h-[41rem] bg-center"
      style={{ backgroundImage: "url('images/home/oxa.jpg')" }}
    >
      <div className="flex justify-center items-center h-full backdrop-brightness-50 text-white">
        <div className="w-[51rem] text-center">
          <h2 className="text-5xl font-black">
            Viajar seguro, cómodo y rápido con Transportes Casablanca
          </h2>
          <Line color="border-gray-600" className="flex justify-center" />
          <p className="my-9 text-lg">
            En Transportes Casa Blanca, conectamos a las personas y sus destinos
            con rapidez, seguridad y comodidad. Somos el puente entre Lima y la
            Selva Central, ofreciendo un servicio personalizado que transforma
            cada viaje en una experiencia única.
          </p>

          <div className="flex justify-center ">
            <Link
              href="https://wa.me/51966389211"
              className="flex gap-x-2 border-2 border-primary py-2 px-3 font-semibold text-xl  text-primary hover:text-white hover:bg-primary transition-colors delay-200"
            >
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              LLAMAR 24/7
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
