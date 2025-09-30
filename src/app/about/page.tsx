import React from "react";
import { ChefHat, Heart, Users } from "lucide-react"; // Iconițe pentru a sublinia valorile

export default function About() {
  // Componenta ValueCard a fost eliminată

  return (
    <main className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1702885967362-c3aaed15f41d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Interior Restaurant"
            className="w-full h-full object-cover brightness-[.55]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Povestea qRestaurant
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Descoperă viziunea noastră despre arta culinară și pasiunea care ne
            ghidează.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6 border-b-2 border-black pb-2 inline-block">
                Misiunea Noastră
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                qRestaurant a fost fondat în $2010$ cu o singură viziune: să
                transforme fiecare masă într-o experiență memorabilă. Nu ne
                limităm doar la preparate gustoase; ne concentrăm pe calitatea
                ingredientelor, pe inovația rețetelor și pe un serviciu
                impecabil, menit să te facă să te simți ca acasă.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Credem că arta culinară este o formă de exprimare. Bucătarii
                noștri sunt adevărați artiști care combină tradiția cu influențe
                moderne, creând un meniu dinamic, adaptat la cele mai înalte
                standarde internaționale.
              </p>
              <a href="/menu" className="no-underline">
                <button
                  className="bg-black text-white cursor-pointer px-8 py-3 rounded-full text-lg font-semibold 
                               hover:bg-gray-800 transition duration-300 shadow-md"
                >
                  Vezi Meniul
                </button>
              </a>
            </div>

            <div className="relative h-[450px] order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bucătar preparând mâncare"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Valorile care ne definesc</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Fiecare detaliu al experienței qRestaurant este construit în jurul
            acestor principii fundamentale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Valoare 1: Excelență Gastronomică */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <ChefHat className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excelență Gastronomică</h3>
              <p className="text-gray-600">
                Folosim doar cele mai proaspete ingrediente, obținând
                recunoaștere pentru standardul nostru ridicat.
              </p>
            </div>

            {/* Valoare 2: Pasiune și Inovație */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <Heart className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Pasiune și Inovație</h3>
              <p className="text-gray-600">
                Bucătăria noastră este un loc unde tradiția întâlnește viitorul,
                creând gusturi surprinzătoare.
              </p>
            </div>

            {/* Valoare 3: Ospitalitate Autentică */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <Users className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Ospitalitate Autentică</h3>
              <p className="text-gray-600">
                Ne tratăm oaspeții ca pe familie, asigurând un serviciu cald și
                atent la fiecare vizită.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Echipa din Spatele Gustului
          </h2>
          <p className="text-gray-600 mb-12 max-w-4xl mx-auto">
            Fiecare membru al echipei noastre, de la bucătarul-șef la somelier,
            contribuie la magia qRestaurant.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membru 1 */}
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Portret Bucătar Șef"
                className="w-full h-auto rounded-full object-cover mx-auto aspect-square border-4 border-gray-100 shadow-md"
              />
              <p className="text-xl font-bold">Chef Andrei Popescu</p>
              <p className="text-sm text-gray-500">Bucătar Șef Executiv</p>
            </div>

            {/* Membru 2 */}
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Portret Manager"
                className="w-full h-auto rounded-full object-cover mx-auto aspect-square border-4 border-gray-100 shadow-md"
              />
              <p className="text-xl font-bold">Cristina Ionescu</p>
              <p className="text-sm text-gray-500">Manager General</p>
            </div>

            {/* Membru 3 */}
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Portret Somelier"
                className="w-full h-auto rounded-full object-cover mx-auto aspect-square border-4 border-gray-100 shadow-md"
              />
              <p className="text-xl font-bold">Mihai Vasile</p>
              <p className="text-sm text-gray-500">Somelier Senior</p>
            </div>

            {/* Membru 4 */}
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1697898109582-40f15c65f174?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Portret Patiser"
                className="w-full h-auto rounded-full object-cover mx-auto aspect-square border-4 border-gray-100 shadow-md"
              />
              <p className="text-xl font-bold">Elena Georgescu</p>
              <p className="text-sm text-gray-500">Chef Patiser</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}