import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="">
        <div className="h-80 flex justify-between items-center container mx-auto w-11/12">
          <Image
            src="/logo.jpg"
            alt="logo Casa Blanca Transporte"
            width={170}
            height={170}
          />

          <div className="text-white">
            <h4 className="text-3xl font-bold mb-4">Contacto</h4>
            <p>Direccion : Terminal terrestre Plaza norte</p>
            <p>numero: +51 933 524 495</p>
            <p>Email: zabaletaerinson@gmail.com</p>
            <p>lunes-sabado : 9:00 AM - 5:00 PM</p>
          </div>
          <div className="text-white">
            <h4 className="text-3xl font-bold mb-4">Horario</h4>
            <p>Traslados y conexiones aeroportuarias</p>
            <p>Traslados de personal y ejecutivos</p>
            <p>Vehículos a disposición con chofer</p>
            <p>translado rutas largas</p>
          </div>
        </div>
        <div className="h-24 border-t border-white">
          <div className="flex h-full justify-between items-center container mx-auto w-11/12 text-white">
            <p>© 2024 Transporte Casa Blanca</p>
            <p>Powered by Transporte Casa Blanca</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
