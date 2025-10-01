"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const textColor = isScrolled ? "text-gray-800" : "text-white";
  const logoColor = isScrolled ? "text-black" : "text-white";

  const menuBgColor = isScrolled ? "bg-white" : "bg-transparent";
  const menuShadow = isScrolled ? "shadow-xl" : "";

  const menuTextColor = isScrolled ? "text-gray-800" : "text-white";
  const menuHoverColor = isScrolled
    ? "hover:text-black"
    : "hover:text-gray-300";

  const buttonClasses = isScrolled
    ? "bg-black text-white hover:bg-gray-800"
    : "bg-white text-black hover:bg-[#191919] hover:text-white";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-2xl font-bold ${logoColor}`}>
            qRestaurant
          </Link>
          <div className="hidden md:flex items-center font-semibold space-x-8">
            <Link
              href="/about"
              className={`hover:opacity-75 transition-opacity ${textColor}`}
            >
              Despre
            </Link>
            <Link
              href="/menu"
              className={`hover:opacity-75 transition-opacity ${textColor}`}
            >
              Meniu
            </Link>
            <Link
              href="/contact"
              className={`hover:opacity-75 transition-opacity ${textColor}`}
            >
              Contact
            </Link>
            <Link href="/reservations" passHref>
              <button
                className={`cursor-pointer px-6 py-2 rounded-full transition-all ${buttonClasses}`}
              >
                Rezervă o masă
              </button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } transition-all duration-300 overflow-hidden ${menuBgColor} ${menuShadow}`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <Link
            href="/about"
            className={`${menuTextColor} text-lg ${menuHoverColor}`}
            onClick={toggleMenu}
          >
            Despre
          </Link>
          <Link
            href="/menu"
            className={`${menuTextColor} text-lg ${menuHoverColor}`}
            onClick={toggleMenu}
          >
            Meniu
          </Link>
          <Link
            href="/contact"
            className={`${menuTextColor} text-lg ${menuHoverColor}`}
            onClick={toggleMenu}
          >
            Contact
          </Link>

          <Link href="/rezervari" passHref className="pt-2">
            <button
              className={`w-full px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${
                isScrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={toggleMenu}
            >
              Rezervă o masă
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
