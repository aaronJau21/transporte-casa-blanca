import Image from "next/image";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { RedSocialItem } from "./RedSocialItem";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  {
    label: "Inicio",
    href: "/home",
  },
  {
    label: "Nosotros",
    href: "/about",
  },
];

const redSocial = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/ViajesALaSelvaEnAuto",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@transportecasablanca?_t=8ruUwah8YPo&_r=1",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/transportecasablancape/",
  },
];

export const NavBar = () => {
  return (
    <header className="w-max-screen flex justify-between px-9 lg:px-0 lg:justify-around items-center bg-primary py-3">
      <Link href="/home">
        <Image
          src="/logo.jpg"
          alt="logo Casa Blanca Transporte"
          width={130}
          height={130}
        />
      </Link>

      <h1 className="text-white text-5xl font-mono font-bold hidden lg:inline">
        Transporte Casa Blanca
      </h1>

      <div className="hidden lg:flex lg:items-center lg:gap-x-5">
        <nav>
          <ul className="flex gap-x-5">
            {navLinks.map((item) => (
              <NavbarItem key={item.href} {...item} />
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-x-5">
            {redSocial.map((item, index) => (
              <RedSocialItem key={index} icon={item.icon} link={item.link} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="lg:hidden">
        <GiHamburgerMenu size={25} />
      </div>
    </header>
  );
};
