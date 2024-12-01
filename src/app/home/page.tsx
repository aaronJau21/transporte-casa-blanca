import { Carousel, Informacion } from "@/home";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};

export default function HomePage() {
  return (
    <>
      <main className="h-[35rem] flex items-center justify-center">
        <Carousel />
      </main>
      <section className="">
        <Informacion />
      </section>
    </>
  );
}
