import { Line } from "@/components";
import { FaCar, FaClock, FaRegHandshake } from "react-icons/fa";
import { OfferItem } from "./OfferItem";
import Link from "next/link";

const offerceItem = [
  {
    icon: <FaCar size={60} color="#3CAA31" />,
    title: "Vehículos Modernos y Seguros",
  },
  {
    icon: <FaClock size={60} color="#3CAA31" />,
    title: "Disponibilidad 24/7",
  },
  {
    icon: <FaRegHandshake size={60} color="#3CAA31" />,
    title: "Chofer Profesional",
  },
];

export const Offer = () => {
  return (
    <main className="pt-9 pb-16 container mx-auto w-11/12 ">
      <h3 className="text-4xl font-black ml-9">QUE OFRECEMOS</h3>
      <Line color="border-black" />
      <div className="lg:flex lg:justify-between mt-9 mx-9">
        <p className="lg:w-[35rem] lg:text-start text-xl text-justify">
          Te llevamos a tu destino en modernas camionetas, conectando Lima con
          toda la Selva Central y retornando con la misma calidad y compromiso.
          Ofrecemos un servicio confiable, cómodo y seguro, diseñado para que
          cada trayecto sea una experiencia agradable. Nos destacamos por
          brindar atención personalizada y un trato amable, asegurando tu
          bienestar y tranquilidad en cada viaje.
        </p>

        <div className="flex justify-center mt-9 lg:mt-0">
          <button>
            <Link
              href="/services"
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mx-9 mb-16">
        {offerceItem.map((item) => (
          <OfferItem key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
};
