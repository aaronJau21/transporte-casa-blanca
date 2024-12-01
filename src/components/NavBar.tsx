import Image from "next/image";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { RedSocialItem } from "./RedSocialItem";

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
  },
  {
    icon: <FaTiktok />,
  },
  {
    icon: <FaInstagram />,
  },
];

export const NavBar = () => {
  return (
    <header className="w-max-screen flex justify-around items-center bg-primary py-3">
      <Link href="/home">
        <Image
          src="/logo.jpg"
          alt="logo Casa Blanca Transporte"
          width={130}
          height={130}
        />
      </Link>

      <div className="flex items-center gap-x-5">
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
              <RedSocialItem key={index} icon={item.icon} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
