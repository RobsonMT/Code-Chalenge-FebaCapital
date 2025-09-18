"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdMenu, MdOutlineClose, MdWhatsapp } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/#home" },
    { name: "Sobre a Liva", href: "/#sobre" },
    { name: "Empreendimentos", href: "/#empreendimentos" },
    { name: "Notícias", href: "/#noticias" },
    { name: "Contatos", href: "/#contatos" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              height={"32"}
              width={"81"}
              alt="logo"
            />
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex flex-row gap-3">
            <FaFacebook className="text-black" size={25} />
            <FaSquareInstagram className="text-black rounded-full" size={25} />
          </div>

          <a href="https://wa.me/5599999999999">
            <button className="hidden md:flex flex-row items-center gap-3 bg-[#1AA584] px-4 py-2 rounded-sm cursor-pointer">
              <MdWhatsapp size={25} className="text-white" />
              <p className="uppercase text-white">whatsapp</p>
            </button>
          </a>

          {/* Botão Mobile (hambúrguer) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <MdMenu size={28} />
          </button>
        </div>
      </div>

      {/* Menu Mobile Fullscreen */}
      {open && (
        <div className="fixed inset-0 h-full w-full bg-white flex flex-col items-start justify-center space-y-6 z-50">
          <Link
            href={"/"}
            className="w-full absolute top-6 left-0 px-6 text-gray-700"
          >
            <Image
              src={"/images/logo.png"}
              height={"32"}
              width={"81"}
              alt="logo"
            />
            <hr className="mt-4 border-b border-b-neutral-100" />
          </Link>
          {/* Botão Fechar (X) */}
          <button
            className="absolute top-6 right-6 text-gray-700"
            onClick={() => setOpen(false)}
          >
            <MdOutlineClose size={32} />
          </button>

          <div className="flex flex-col gap-3 mt-20 p-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-semibold text-gray-700 hover:text-green-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 px-8">
            <p className="font-medium">Acompanhe nas redes</p>
            <div className="flex flex-row gap-3">
              <FaFacebook className="text-black" size={25} />
              <FaSquareInstagram
                className="text-black rounded-full"
                size={25}
              />
            </div>
          </div>
          <div className="min-w-[100vw] h-full bg-[#F2F2F2] flex justify-center items-center px-8 mb-15">
            <a href="https://wa.me/5599999999999" className="w-full">
              <button className="flex flex-row items-center justify-center w-full gap-3 bg-[#1AA584] px-4 py-2 rounded-sm cursor-pointer mt-4">
                <MdWhatsapp size={25} className="text-white" />
                <p className="uppercase text-white">whatsapp</p>
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
