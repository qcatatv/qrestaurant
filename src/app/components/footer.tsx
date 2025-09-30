import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"; // Am adăugat MapPin și Social Media Icons

export default function Footer() {
  // Componenta FooterLink a fost eliminată

  // Clasa de stil pentru link-uri (aplicată direct pe <a>)
  const linkClasses = "text-gray-400 hover:text-white transition duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";

  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Grila Principală - Logo, Link-uri, Servicii, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-10">

          {/* Coloana 1: Logo și Descriere */}
          <div className="lg:col-span-1">
            <h3 className="text-4xl font-extrabold mb-4 tracking-wider text-white">
              qRestaurant
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              O destinație culinară premium. Pasiune, inovație și ingrediente
              alese cu grijă, pentru o experiență de neegalat.
            </p>
            {/* Secțiune Social Media */}
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

          {/* Coloana 2: Navigare Rapidă */}
          <div className="lg:pl-8">
            <h4 className="text-xl font-bold mb-5 uppercase text-gray-200">
              Navigare
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className={linkClasses}>
                  Acasă
                </a>
              </li>
              <li>
                <a href="/despre" className={linkClasses}>
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="/meniu" className={linkClasses}>
                  Meniu & Galerie
                </a>
              </li>
              <li>
                <a href="/rezervari" className={linkClasses}>
                  Rezervări
                </a>
              </li>
            </ul>
          </div>

          {/* Coloana 3: Informații Utile */}
          <div className="lg:pl-8">
            <h4 className="text-xl font-bold mb-5 uppercase text-gray-200">
              Utile
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/evenimente" className={linkClasses}>
                  Evenimente Private
                </a>
              </li>
              <li>
                <a href="/cariere" className={linkClasses}>
                  Cariere
                </a>
              </li>
              <li>
                <a href="/termene" className={linkClasses}>
                  Termene și Condiții
                </a>
              </li>
              <li>
                <a href="/faq" className={linkClasses}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Coloana 4: Detalii Contact */}
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
              
              {/* Telefon */}
              <a
                href="tel:+40123456789"
                className="flex items-center hover:text-white transition duration-300"
              >
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-white" />
                +40 123 456 789 (Rezervări)
              </a>
              
              {/* Email */}
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

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} **qRestaurant**. Toate drepturile
            rezervate. | Design realizat cu <span className="text-red-500">❤</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}