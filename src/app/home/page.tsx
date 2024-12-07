import { Contact, Destinos, Informacion, Offer, Vide } from "@/home";

export const metadata = {
  title: "Inicio - Transporte Casa Blanca",
  description: "Transporte Casa Blanca",
};

export default function HomePage() {
  return (
    <>
      <Informacion />
      <Offer />
      <Destinos />
      <Vide />
      <Contact />
    </>
  );
}
