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

      <Contact />
    </>
  );
}
