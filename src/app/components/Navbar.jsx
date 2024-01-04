"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./Navlink";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";

const NavLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto container px-4 py-1 lg:py-1">
        <Link href="/" className="text-sm md:font-medium text-white font-semibold">
          <Image src="/image/logo.png" alt="logo" width={94} height={36} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!showMenu ? (
            <button onClick={() => setShowMenu(true)} className="text-white border-white border rounded hover:text-slate-200 hover:border-slate-200 flex items-center px-[2px] py-[2px] text-xl">
              <IoMenu />
            </button>
          ) : (
            <button onClick={() => setShowMenu(false)} className="text-white border-white border rounded hover:text-slate-200 hover:border-slate-200 flex items-center px-[2px] py-[2px] text-xl">
              <IoClose />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, i) => (
              <li key={i}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showMenu ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
