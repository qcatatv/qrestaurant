import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"; // Am adăugat MapPin și Social Media Icons
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-10">

          <div className="lg:col-span-1">
            <h3 className="text-4xl font-extrabold mb-4 tracking-wider text-white">
              qRestaurant
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              O destinație culinară premium. Pasiune, inovație și ingrediente
              alese cu grijă, pentru o experiență de neegalat.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-xl font-bold mb-5 uppercase text-gray-200">
              Navigare
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/meniu" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Meniu & Galerie
                </Link>
              </li>
              <li>
                <Link href="/rezervari" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Rezervări
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-xl font-bold mb-5 uppercase text-gray-200">
              Utile
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/evenimente" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Evenimente Private
                </Link>
              </li>
              <li>
                <Link href="/cariere" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Cariere
                </Link>
              </li>
              <li>
                <Link href="/termene" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Termene și Condiții
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-5 uppercase text-gray-200">
              Contact
            </h4>
            <div className="space-y-4 text-gray-400 text-base">
              {/* Adresă */}
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-white" />
                <span className="hover:text-white transition duration-300">
                  Strada Exemplu nr. 123, Sector 1, București
                </span>
              </div>
              
              <a
                href="tel:+40123456789"
                className="flex items-center hover:text-white transition duration-300"
              >
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-white" />
                +40 123 456 789 (Rezervări)
              </a>
              
              <a
                href="mailto:contact@qrestaurant.ro"
                className="flex items-center hover:text-white transition duration-300"
              >
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-white" />
                contact@qrestaurant.ro
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} **qRestaurant**. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}