import { MdOutlineSecurity } from "react-icons/md";
import { Items } from "./Items";
import { FaPhone } from "react-icons/fa";

const standItems = [
  {
    title: "Viaje con nosotros",
    description:
      "Separe su cita ahora y disfrute con nostros la mejor experiencia.",
    icon: <FaPhone size={40} className="text-primary" />,
  },
  {
    title: "horario de trabajo",
    description: "De lunes a domingo de 9:00 - 21:00",
    icon: <MdOutlineSecurity size={40} className="text-primary" />,
  },
];

export const StandOut = () => {
  return (
    <section className="container mx-auto w-11/12 lg:grid lg:gap-x-9 lg:grid-cols-2 mb-24 mt-10">
      {standItems.map((item) => (
        <div key={item.title} className="flex justify-center">
          <Items {...item} />
        </div>
      ))}
    </section>
  );
};
