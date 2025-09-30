import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Interior Restaurant"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Contact & Localizare
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Suntem aici să răspundem la întrebările tale și să te ajutăm cu
            rezervările.
          </p>
        </div>
      </section>

      {/* Detalii, Program și Formular */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Detalii și Program */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-8">Detalii și Program</h2>

              <div className="space-y-6 mb-10">
                {/* Contact Item - Adresa */}
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-black mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    Strada Exemplu nr. 123, Sector 1, București
                  </span>
                </div>

                {/* Contact Item - Telefon */}
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-black mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    +40 123 456 789 (Rezervări)
                  </span>
                </div>

                {/* Contact Item - Email */}
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-black mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    contact@qrestaurant.ro
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-black mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-black" />
                  Programul Nostru
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span>Luni - Vineri:</span>
                    <span className="font-medium">12:00 - 23:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sâmbătă:</span>
                    <span className="font-medium">10:00 - 00:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Duminică:</span>
                    <span className="font-medium">10:00 - 22:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Formular de Contact */}
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-xl">
              <h2 className="text-4xl font-bold mb-8">Trimite-ne un mesaj</h2>
              <form className="space-y-6">
                {/* Nume */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Nume și Prenume
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                    placeholder="Introdu numele tău complet"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Adresa de Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                    placeholder="exemplu@domeniu.ro"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Subiect
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                    placeholder="Rezervare, Feedback, Parteneriat, etc."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                    placeholder="Scrie-ne mesajul tău..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold
                           hover:bg-gray-800 transform hover:scale-[1.01] transition duration-300 shadow-lg"
                >
                  Trimite Mesajul Acum
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ne găsești ușor</h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto">
            Situat în inima orașului, qRestaurant este destinația perfectă, ușor
            accesibilă cu mașina sau transportul public.
          </p>

          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.57954783112!2d26.012237300862356!3d44.43791870161637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1759266489385!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}