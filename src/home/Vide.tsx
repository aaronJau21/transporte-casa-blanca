import { VideoItem } from "./VideoItem";

const itemsVideos = [
  {
    path: "/images/home/video1.mp4",
    nombre: "Maritsa Fabian",
    comentario: `
    Recomiendo ampliamente a la empresa por su excelente servicio. Su
          responsabilidad, puntualidad y atención son excepcionales, realmente
          agradecemos la rapidez y eficiencia para todos mis envíos a
          Chanchamayo - Perú
    `,
  },
  {
    path: "/images/home/video2.mp4",
    nombre: "Monolo Perez",
    comentario: `
   RECOMEND
    `,
  },
];

export const Vide = () => {
  return (
    <section className=" px-6 py-8 mx-auto bg-white ">
      <h3 className="text-4xl text-center font-black">
        Experiencias de nuestros Clientes
      </h3>
      <div className="mt-8 lg:grid lg:grid-cols-3 container mx-auto w-11/12">
        {itemsVideos.map((item) => (
          <VideoItem key={item.nombre} {...item} />
        ))}
      </div>
    </section>
  );
};
