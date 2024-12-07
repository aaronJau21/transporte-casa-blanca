import Image from "next/image";
import React from "react";

interface Props {
  img1: string;
  title1: string;
  description1: string;
  img2: string;
  title2: string;
  description2: string;
  img3: string;
  title3: string;
  description3: string;
}

export const CarrouselItem = ({
  description1,
  description2,
  description3,
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
}: Props) => {
  return (
    <div className="grid grid-cols-3 gap-x-5 h-full p-5">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="h-72">
          <Image
            src={img1}
            alt={title1}
            width={700}
            height={500}
            className="rounded-3xl h-full"
          />
        </div>
        <div className="text-black text-center mt-3">
          <h3 className="text-3xl font-bold">{title1}</h3>
          <p>{description1}</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <div className="h-72">
          <Image
            src={img2}
            alt={title2}
            width={700}
            height={500}
            className="rounded-3xl h-full"
          />
        </div>
        <div className="text-black text-center mt-3">
          <h3 className="text-3xl font-bold">{title2}</h3>
          <p>{description2}</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <div className="h-72">
          <Image
            src={img3}
            alt={title3}
            width={700}
            height={500}
            className="rounded-3xl h-full"
          />
        </div>
        <div className="text-black text-center mt-3">
          <h3 className="text-3xl font-bold">{title3}</h3>
          <p>{description3}</p>
        </div>
      </div>
    </div>
  );
};
