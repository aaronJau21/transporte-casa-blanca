// import Image from "next/image";
import { ServiceItems } from "./ServiceItems";

const serviceItems = [
  {
    title: "Transporte",
    descrition:
      "Entendemos que cada cliente tiene necesidades únicas. Por eso, ofrecemos una variedad de servicios de transporte para satisfacer tus necesidades específicas, ya sea un viaje de negocios, un traslado al aeropuerto o una noche de diversión en la ciudad.",
    img: "/images/service/servicio1.jpg",
  },
  {
    title: "Pet Friendly",
    descrition:
      "Entendemos que cada cliente tiene necesidades únicas. Por eso, ofrecemos una variedad de servicios de transporte para satisfacer tus necesidades específicas, ya sea un viaje de negocios, un traslado al aeropuerto o una noche de diversión en la ciudad.",
    img: "/images/service/servicio2.jpg",
  },
  {
    title: "Entraga de Paquetes",
    descrition:
      "Entendemos que cada cliente tiene necesidades únicas. Por eso, ofrecemos una variedad de servicios de transporte para satisfacer tus necesidades específicas, ya sea un viaje de negocios, un traslado al aeropuerto o una noche de diversión en la ciudad.",
    img: "/images/service/servicio3.jpg",
  },
];

export const Service = () => {
  return (
    <section className="mt-9 md:grid flex flex-col items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-0 mb-9">
      {serviceItems.map((item) => (
        <ServiceItems key={item.title} {...item} />
      ))}
    </section>
  );
};
