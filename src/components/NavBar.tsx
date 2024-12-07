"use client";

import Image from "next/image";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { RedSocialItem } from "./RedSocialItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Inicio",
    href: "/home",
  },
  {
    label: "Nosotros",
    href: "/about",
  },
  {
    label: "Servicios",
    href: "/services",
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
  const [showOtherPage, setShowOtherPage] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setShowOtherPage(false);
  }, [currentPath]);

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

      <h1 className="text-6xl font-bold text-white ">Transporte Casablanca</h1>

      <div className="hidden xl:flex xl:items-center xl:gap-x-5">
        <nav>
          <ul className="flex gap-x-5">
            {navLinks.map((item) => (
              <NavbarItem key={item.href} {...item} />
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-x-7">
            {redSocial.map((item, index) => (
              <RedSocialItem key={index} icon={item.icon} link={item.link} />
            ))}
          </ul>
        </nav>
      </div>
      {/* hamburguesa */}
      <div className="xl:hidden">
        <GiHamburgerMenu
          size={25}
          onClick={() => setShowOtherPage(!showOtherPage)}
        />
      </div>
      {showOtherPage ? (
        <motion.div
          className="absolute top-28 right-0 bg-primary w-96 z-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <nav>
            <ul className="flex flex-col items-center gap-y-5">
              {navLinks.map((item) => (
                <NavbarItem key={item.href} {...item} />
              ))}
            </ul>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};
