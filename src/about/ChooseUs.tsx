import { LiaRouteSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { Items } from "./Items";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosSpeedometer } from "react-icons/io";
import { PiCoinThin, PiShootingStarThin } from "react-icons/pi";
import { IoFileTrayFull } from "react-icons/io5";

const standItems = [
  {
    title: "Confianza",
    description:
      "Porque sabemos lo importante que es llegar seguro a tu destino",
    icon: <VscWorkspaceTrusted size={40} />,
  },
  {
    title: "Seguridad",
    description:
      "Cumplimos con los más altos estándares para proteger lo que más importa: tú.",
    icon: <MdOutlineSecurity size={40} />,
  },
  {
    title: "Rapidez",
    description: "Viaja sin preocupaciones y sin costos ocultos.",
    icon: <IoIosSpeedometer size={40} />,
  },
  {
    title: "Comodidad",
    description:
      "Nos enfocamos en cada detalle para que disfrutes cada kilómetro del viaje.",
    icon: <LiaRouteSolid size={40} />,
  },
  {
    title: "La ruta más personalizada",
    description:
      "Somos la única empresa que utiliza camionetas modernas para garantizar mayor rapidez y comodidad.",
    icon: <LiaRouteSolid size={40} />,
  },
  {
    title: "Seguridad como prioridad",
    description:
      "Vehículos en excelente estado y conductores altamente capacitados.",
    icon: <PiShootingStarThin size={40} />,
  },
  {
    title: "Precios justos",
    description: "Viaja sin preocupaciones y sin costos ocultos.",
    icon: <PiCoinThin size={40} />,
  },
  {
    title: "Cobertura estratégica",
    description:
      "Con oficinas en Lima y San Ramón, conectamos todos los destinos principales de la Selva Central.",
    icon: <IoFileTrayFull size={40} />,
  },
];

export const ChooseUs = () => {
  return (
    <section className="container mx-auto w-11/12 mb-32">
      <h2 className="text-4xl font-Karla font-black text-center">
        Un puente hacia la selva, un viaje con propósito
      </h2>
      <p className="text-justify">
        Transportes Casablanca nació de la pasión por conectar mundos. Fundado
        hace 3 años por una familia emprendedora, nuestra empresa comenzó con
        una simple idea: ofrecer un transporte que combine confianza, rapidez y
        comodidad para los viajeros que buscan explorar la magia de la Selva
        Central del Perú. Inspirados por la calidez y hospitalidad de Oxapampa y
        el bullicio de Lima, hemos diseñado un servicio pensado para quienes
        valoran cada minuto y disfrutan cada trayecto. Hoy, con nuestras
        modernas camionetas y un equipo dedicado, seguimos cumpliendo nuestro
        compromiso de acercar destinos y crear experiencias memorables.
      </p>

      <div className="flex flex-col  items-center lg:grid lg:grid-cols-2 xl:grid-cols-3 mt-5">
        {standItems.map((item) => (
          <Items key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
