import { Line } from "@/components";
import Link from "next/link";

export const Offer = () => {
  return (
    <>
      <h2 className="text-4xl font-black ml-9">QUE OFREMOS</h2>
      <Line color="border-black" />
      <div className="flex justify-between mt-9 mx-9">
        <p className="w-[35rem]">
          Ofrecemos un servicio exclusivo y de alta calidad para satisfacer las
          necesidades de nuestros clientes más exigentes. Nuestro objetivo es
          brindar una experiencia de viaje excepcional, combinando lujo,
          comodidad y seguridad.
        </p>

        <button>
          <Link
            href="#"
            className="flex border-2 border-primary text-primary py-1 px-3 rounded-md text-xl hover:bg-primary hover:text-white transition-colors delay-200"
          >
            Nuestros Servicios
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
          </Link>
        </button>
      </div>
    </>
  );
};
