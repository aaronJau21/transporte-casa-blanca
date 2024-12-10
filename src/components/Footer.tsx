import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="">
        <div className="sm:h-80 sm:flex sm:justify-between  md:container md:mx-auto md:w-11/12">
          <div className="flex justify-center items-center">
            <Image
              src="/logo.jpg"
              alt="logo Casa Blanca Transporte"
              width={170}
              height={170}
            />
          </div>

          <div className="text-white text-center sm:text-start mt-9">
            <h4 className="text-3xl font-bold mb-4 uppercase">Contacto</h4>
            <p>
              Direcciones Lima: <br />
              - Urb. Mayorazgo 4ta Etapa Mz O Lt 09 calle Badajoz - Ate
              <br />- Mz A39 Lote 3 Bocanegra - Callao
            </p>
            <p>
              Direccion San Ramón: <br />- Carretera Central km 100 San
              Ramón, Chanchamayo
            </p>
            <p>Número: +51 966 389 211</p>
            <p>Email: transportecasablanca@gmail.com</p>
            <p>Lunes-Domingo : 12:00 AM - 12:00 PM</p>
          </div>
          <div className="text-white text-center sm:text-start mt-9">
            <h4 className="text-3xl font-bold mb-4 uppercase">Servicios</h4>
            <p>Traslados y conexiones aeroportuarias</p>
            <p>Traslados de personal y ejecutivos</p>
            <p>Vehículos a disposición con chofer</p>
            <p>Translado rutas largas</p>
          </div>
        </div>
        <div className="h-24 border-t border-white">
          <div className="flex flex-col justify-center h-full  sm:flex-row sm:justify-between items-center container mx-auto w-11/12 text-white">
            <p>© 2024 Transporte Casa Blanca</p>
            <p>Powered by Transporte Casa Blanca</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
