import Image from "next/image";

interface Props {
  src: {
    img: string;
    title: string;
    description: string;
  };
}

export const ItemCrousel = ({ src }: Props) => {
  return (
    <div key={src.title} className="flex-shrink-0 w-screen h-[35rem] relative">
      <Image
        src={src.img}
        alt={`Slide ${src.title}`}
        className=" w-full h-full "
        width={500}
        height={500}
        priority
      />
      {/* Texto sobre la imagen (opcional) */}
      <div className="absolute top-5 left-9 lg:top-5 lg:left-9  lg:h-64 rounded-md bg-white w-72 lg:w-96 p-5 text-black">
        <div className="mb-3">
          <p className="text-sm text-gray-500">
            Diciembre 1, 2024 por{" "}
            <a href="#" className="text-sky-500">
              TRANSPORTE CASABLANCA
            </a>
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-center">{src.title}</h2>
        <p className="text-sm">{src.description}</p>
        <div className="flex justify-end mt-3">
          <a
            href="https://wa.me/51966389211"
            className="bg-sky-500 text-white px-3 py-1 rounded-md"
          >
            mas info
          </a>
        </div>
      </div>
    </div>
  );
};
