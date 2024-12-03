import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative flex items-center justify-between min-h-screen bg-gray-100 p-6">
      {" "}
      <div className="absolute inset-0 w-1/2 bg-white clip-triangle"></div>{" "}
      <div className="relative z-10 w-1/2 p-6">
        {" "}
        <h1 className="text-4xl font-bold mb-4">TRANSPORTE ZABALETA</h1>{" "}
        <p className="mb-8">
          {" "}
          Nuestro equipo de atención al cliente altamente capacitado está
          disponible para ayudarte de lunes a domingo, las 24 horas del día. Ya
          sea que necesites organizar un traslado al aeropuerto, un viaje de
          negocios o un evento especial, estamos aquí para brindarte una
          experiencia de transporte VIP de primera clase.{" "}
        </p>{" "}
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full inline-flex items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M2 4a1 1 0 011-1h3.586A1 1 0 017 3.586l.707.707a1 1 0 010 1.414L7 6.414A1 1 0 016.293 7H3v3.293A1 1 0 013 11v1a1 1 0 001 1h1v2a2 2 0 002 2h6a2 2 0 002-2v-6a1 1 0 00-1-1h-5a1 1 0 01-1-1V5a1 1 0 00-1-1H7v-.586A1 1 0 016.293 3H4a1 1 0 00-1-1v1H2z"
              clipRule="evenodd"
            />{" "}
          </svg>{" "}
          LLAMAR 24/7{" "}
        </button>{" "}
      </div>{" "}
      <div className="relative z-10 w-1/2">
        {" "}
        <Image
          src="/images/principalAbout.jpg"
          alt="Driver"
          className="w-full h-full object-cover rounded-lg shadow-lg"
          width={500}
          height={500}
        />{" "}
      </div>{" "}
    </div>
  );
}
