import React from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = {
  appetizers: [
    {
      name: "Carpaccio de Vită",
      description:
        "File de vită cu rucola, parmezan și ulei de măsline extra virgin",
      price: "45",
    },
    {
      name: "Tartar de Ton",
      description: "Ton proaspăt cu avocado, mango și dressing de citrice",
      price: "52",
    },
    {
      name: "Bruschete cu Hribi",
      description: "Pâine artizanală cu hribi sălbatici și ulei de trufe",
      price: "38",
    },
  ],
  mainCourse: [
    {
      name: "Somon în Crustă de Ierburi",
      description:
        "File de somon proaspăt cu crustă aromată de ierburi mediteraneene",
      price: "89",
    },
    {
      name: "Risotto cu Trufe Negre",
      description: "Risotto cremoos cu parmezan și trufe negre proaspete",
      price: "75",
    },
    {
      name: "Tagliata de Vită",
      description: "Mușchi de vită maturat cu rucola și parmezan",
      price: "120",
    },
    {
      name: "Ravioli cu Homar",
      description: "Paste proaspete umplute cu homar și sos de crustacee",
      price: "95",
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Rețetă tradițională cu mascarpone și cafea premium",
      price: "32",
    },
    {
      name: "Panna Cotta cu Fructe de Pădure",
      description: "Cremă fină cu sos de fructe de pădure proaspete",
      price: "28",
    },
    {
      name: "Fondant de Ciocolată",
      description: "Servit cu înghețată de vanilie și coulis de zmeură",
      price: "35",
    },
  ],
};

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
            alt="Menu background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Meniul Nostru</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            O selecție rafinată de preparate create cu pasiune și ingrediente
            premium
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Appetizers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Aperitive</h2>
            <div className="space-y-8">
              {menuItems.appetizers.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-gray-200 pb-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-xl font-semibold ml-4">
                    {item.price} lei
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Course */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Fel Principal
            </h2>
            <div className="space-y-8">
              {menuItems.mainCourse.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-gray-200 pb-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-xl font-semibold ml-4">
                    {item.price} lei
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Desert</h2>
            <div className="space-y-8">
              {menuItems.desserts.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-gray-200 pb-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-xl font-semibold ml-4">
                    {item.price} lei
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-16 text-center text-gray-600">
            <p>
              Pentru rezervări și comenzi speciale, vă rugăm să ne contactați
            </p>
            <a href="/reservations" className="inline-block">
              <button className="mt-6 bg-[#191919] cursor-pointer hover:outline-black hover:outline-1 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black  transition duration-300">
                Rezervă o masă
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
