"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
}

export const NavbarItem = ({ href, label }: Props) => {
  const currentPath = usePathname();
  return (
    <li>
      <Link
        className={`text-white text-xl  ${
          currentPath === href ? "text-black font-bold" : ""
        }`}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
