import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
            alt="Restaurant"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">qRestaurant</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            O experiență culinară unică într-un ambient modern și elegant
          </p>
          <button
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-opacity-90 transition duration-300"
          >
            Rezervă o masă
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974"
                alt="Restaurant interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Despre qRestaurant</h2>
              <p className="text-gray-600 mb-6">
                Cu o tradiție în arta culinară și o pasiune pentru inovație,
                qRestaurant vă oferă o experiență gastronomică de neuitat.
                Bucătarii noștri talentați combină ingrediente proaspete și
                tehnici moderne pentru a crea preparate care încântă toate
                simțurile.
              </p>
              <p className="text-gray-600 mb-8">
                Ambientul nostru elegant și atmosfera primitoare fac din
                qRestaurant locul perfect pentru orice ocazie specială sau o
                simplă ieșire în oraș.
              </p>
              <a href="/menu" className="no-underline cursor-pointer">
                <button
                  className="bg-black text-white px-8 py-3 rounded-full 
                               hover:bg-gray-800 cursor-pointer transition duration-300"
                >
                  Descoperă Meniul
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Specialitățile Noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1964"
                  alt="Special dish 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Somon în crustă de ierburi
                </h3>
                <p className="text-gray-600 mb-4">
                  File de somon proaspăt cu crustă aromată de ierburi
                  mediteraneene
                </p>
                <span className="text-xl font-semibold">89 lei</span>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974"
                  alt="Special dish 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Risotto cu trufe negre
                </h3>
                <p className="text-gray-600 mb-4">
                  Risotto cremoos cu parmezan și trufe negre proaspete
                </p>
                <span className="text-xl font-semibold">75 lei</span>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070"
                  alt="Special dish 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tagliata de vită</h3>
                <p className="text-gray-600 mb-4">
                  Mușchi de vită maturat cu rucola și parmezan
                </p>
                <span className="text-xl font-semibold">120 lei</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/menu" className="no-underline">
              <button
                className="bg-black text-white px-8 py-3 rounded-full 
                             hover:bg-gray-800 cursor-pointer transition duration-300"
              >
                Vezi Meniul Complet
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contactează-ne</h2>
              <p className="text-gray-600 mb-8">
                Pentru rezervări sau întrebări, nu ezita să ne contactezi.
                Suntem aici să îți oferim o experiență gastronomică de neuitat.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Strada Exemplu nr. 123, București
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-600">+40 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600">contact@qrestaurant.ro</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nume
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Email-ul tău"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Mesajul tău"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-full 
                           hover:bg-gray-800 transition duration-300"
                >
                  Trimite Mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
