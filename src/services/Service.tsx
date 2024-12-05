// import Image from "next/image";
import { ServiceItems } from "./ServiceItems";

const serviceItems = [
  {
    title: "Recojo en tu Casa",
    descrition:
      "Tu comodidad es nuestra prioridad. Llegamos a tu puerta para iniciar tu viaje sin contratiempos, ofreciéndote un servicio confiable y puntual que se adapta a tu horario.",
    img: "/images/service/servicio1.jpg",
  },
  {
    title: "Pet Friendly",
    descrition:
      "Viaja con tus mejores amigos. Nuestras camionetas están diseñadas para que tus mascotas disfruten de un traslado seguro, cómodo y sin estrés. Porque ellos también son parte de la familia.",
    img: "/images/service/servicio2.jpg",
  },
  {
    title: "Entrega de Paquetes",
    descrition:
      "Confía en nosotros para mover lo que más importa. Desde pequeños documentos hasta envíos voluminosos, transportamos tus paquetes con la máxima seguridad y rapidez.",
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
