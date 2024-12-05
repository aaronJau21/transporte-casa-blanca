import { Line } from "@/components";
import { FaCog, FaRegCompass } from "react-icons/fa";
import { PiTreeStructureBold } from "react-icons/pi";
import { GiCarSeat } from "react-icons/gi";
import { MdAir, MdOutlineTireRepair } from "react-icons/md";
import { OfferItem } from "./OfferItem";

const offerceItem = [
  {
    icon: <FaCog size={70} color="#3CAA31" />,
    title: "Autos con su mantenimiento al dia",
  },
  {
    icon: <FaRegCompass size={70} color="#3CAA31" />,
    title: "vehiculos con gps",
  },
  {
    icon: <PiTreeStructureBold size={70} color="#3CAA31" />,
    title: "vista panoramica",
  },
  {
    icon: <GiCarSeat size={70} color="#3CAA31" />,
    title: "acientos comodos",
  },
  {
    icon: <MdAir size={70} color="#3CAA31" />,
    title: "aire acondicionado",
  },
  {
    icon: <MdOutlineTireRepair size={70} color="#3CAA31" />,
    title: "llantas nuevas",
  },
];

export const Offer = () => {
  return (
    <main className="pt-9 pb-16 container mx-auto w-11/12 ">
      <h2 className="text-4xl font-black ml-9">QUE OFREMOS</h2>
      <Line color="border-black" />
      <div className="lg:flex lg:justify-between mt-9 mx-9">
        <p className="lg:w-[35rem] text-center lg:text-start">
          Ofrecemos un servicio exclusivo y de alta calidad para satisfacer las
          necesidades de nuestros clientes más exigentes. Nuestro objetivo es
          brindar una experiencia de viaje excepcional, combinando lujo,
          comodidad y seguridad.
        </p>

        <div className="flex justify-center mt-9 lg:mt-0">
          <button>
            <a
              href="https://wa.me/51966389211"
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
            </a>
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
