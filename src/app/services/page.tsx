import { Service } from "@/services";

export default function ServicesPage() {
  return (
    <section className="container mx-auto w-11/12">
      <h2 className="text-5xl font-bold font-karla text-center mt-5">
        Nuestros Servicios
      </h2>
      <Service />
    </section>
  );
}
