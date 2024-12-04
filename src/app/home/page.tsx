import { Carousel, Contact, Informacion, Offer } from "@/home";

export const metadata = {
  title: "Inicio - Transporte Casa Blanca",
  description: "Transporte Casa Blanca",
};

export default function HomePage() {
  return (
    <>
      <Informacion />
      <Offer />
      <section className="h-[35rem] flex items-center justify-center">
        <Carousel />
      </section>

      <section className="h-96 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300">
        <Contact />
      </section>
    </>
  );
}
