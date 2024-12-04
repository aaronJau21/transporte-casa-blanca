import Image from "next/image";

interface Props {
  src: {
    img: string;
    title: string;
  };
}

export const ItemCrousel = ({ src }: Props) => {
  return (
    <div key={src.title} className="flex-shrink-0 w-full h-[35rem] relative">
      <Image
        src={src.img}
        alt={`Slide ${src.title}`}
        className=" w-[99vw] h-full"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
