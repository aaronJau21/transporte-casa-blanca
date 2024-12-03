import { Line } from "@/components";
import { FaCalendarAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[51rem] text-center">
        <p className="text-base font-bold">LLAMENOS 24/7</p>
        <h3 className="text-5xl font-black">+51 933 524 495</h3>
        <Line color="border-gray-600" className="flex justify-center mt-9" />
        <p className="text-lg font-bold mt-5">RESERVAR UNA CITA HOY</p>
        <div className="flex justify-center mt-5">
          <a
            href="https://wa.me/51966389211"
            className="flex items-center gap-x-3 border-2 border-primary px-5 py-3 rounded-md text-primary hover:bg-primary hover:text-white transition-colors delay-200"
          >
            RESERVA AHORA <FaCalendarAlt />
          </a>
        </div>
      </div>
    </div>
  );
};
