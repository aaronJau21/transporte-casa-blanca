import { Carousel, Informacion, Offer } from "@/home";

export const metadata = {
  title: "Inicio - Transporte Casa Blanca",
  description: "Transporte Casa Blanca",
};

export default function HomePage() {
  return (
    <>
      <main className="h-[35rem] flex items-center justify-center">
        <Carousel />
      </main>
      <section className="h-96 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300">
        <Informacion />
      </section>
      <section className="pt-9 container mx-auto w-11/12 ">
        <Offer />
      </section>
    </>
  );
}
