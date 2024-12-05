import { ChooseUs, Main, StandOut } from "@/about";
import { Contact } from "@/home";

export const metadata = {
  title: "Nosotros",
  description: "La historia de Transporte Casablanca",
};

export default function AboutPage() {
  return (
    <>
      <Main />
      <StandOut />
      <ChooseUs />
      <Contact />
    </>
  );
}
