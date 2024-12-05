export const Vide = () => {
  return (
    <section className="max-w-2xl px-6 py-8 mx-auto bg-white ">
      <h3 className="text-4xl text-center font-black">
        Algunos de nuestros cLientes
      </h3>
      <main className="mt-8">
        <h4 className="mt-6 text-gray-700 dark:text-gray-200 text-2xl font-bold">
          Maritsa Fabian{" "}
        </h4>

        <p className="mt-2 leading-loose text-gray-900 dark:text-gray-300 text-justify">
          Recomiendo ampliamente a la empresa por su excelente servicio. Su
          responsabilidad, puntualidad y atención son excepcionales, realmente
          agradecemos la rapidez y eficiencia para todos mis envíos a
          Chanchamayo - Perú
        </p>

        <div className="flex justify-center mt-5">
          <video
            className="w-96 h-96"
            controls
            src="/images/home/video1.mp4"
          ></video>
        </div>
      </main>
    </section>
  );
};
