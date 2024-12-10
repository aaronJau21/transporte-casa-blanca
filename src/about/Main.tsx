import Image from "next/image";

export const Main = () => {
  return (
    <section className="lg:flex mt-16">
      <div className="lg:flex-1 flex flex-col lg:flex-col lg:justify-center lg:items-center my-16 lg:my-0 ">
        <h2 className="md:text-3xl text-center mb-9 text-primary font-bold font-karla lg:ml-72 xl:ml-64">
          Un puente hacia la selva, un viaje con propósito
        </h2>
        <p className="lg:w-[90%] px-16 lg:px-0 text-justify text-xl lg:ml-72">
          Transportes Casablanca nació de un profundo deseo por conectar
          personas y destinos. Fundado hace 3 años por Edén, un trujillano
          visionario, e Irma, oriunda de la hermosa Selva Central, este sueño
          comenzó con una simple pero poderosa idea: ofrecer un transporte que
          combine confianza, rapidez y comodidad para quienes buscan explorar la
          riqueza y diversidad de nuestra región. Inspirados por la calidez y
          hospitalidad de la gente de la Selva Central, Edén e Irma
          transformaron su pasión en un servicio diseñado para viajeros que
          valoran cada minuto y disfrutan cada trayecto. Con modernas camionetas
          y un equipo comprometido, Transportes Casablanca no solo acerca
          distancias, sino que también crea experiencias inolvidables que hacen
          que cada viaje sea especial. Hoy, seguimos impulsados por esa misma
          pasión y el deseo de brindar más que un transporte: una conexión
          auténtica con lo que realmente importa.
        </p>
      </div>
      <div className="flex-1  ">
        <div className="flex justify-center items-center h-full">
          <Image
            src="/images/about/nosotos.jpg"
            alt="Imagen del carro"
            // className="w-96"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};
