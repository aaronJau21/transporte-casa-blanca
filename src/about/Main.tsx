import Image from "next/image";

export const Main = () => {
  return (
    <section className="lg:flex">
      <div className="lg:flex-1 flex flex-col lg:flex-col lg:justify-center lg:items-center my-16 lg:my-0">
        <h2 className="text-3xl mb-9 text-primary font-bold font-karla text-center">
          Un puente hacia la selva, un viaje con propósito
        </h2>
        <p className="lg:w-[70%] px-16 lg:px-0 text-justify">
          Transportes Casablanca nació de la pasión por conectar mundos. Fundado
          hace 3 años por una familia emprendedora, nuestra empresa comenzó con
          una simple idea: ofrecer un transporte que combine confianza, rapidez
          y comodidad para los viajeros que buscan explorar la magia de la Selva
          Central del Perú. Inspirados por la calidez y hospitalidad de Oxapampa
          y el bullicio de Lima, hemos diseñado un servicio pensado para quienes
          valoran cada minuto y disfrutan cada trayecto. Hoy, con nuestras
          modernas camionetas y un equipo dedicado, seguimos cumpliendo nuestro
          compromiso de acercar destinos y crear experiencias memorables.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/images/about/principal.jpg"
          alt="Imagen del carro"
          className="w-full"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};
