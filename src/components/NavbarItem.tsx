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
        className={`text-white text-xl font-mono ${
          currentPath === href ? "text-gray-950 uppercase font-bold" : ""
        }`}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
