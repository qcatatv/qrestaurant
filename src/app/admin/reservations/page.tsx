"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  RefreshCw,
  Users,
  Clock,
  Calendar,
  Mail,
  Phone,
  Hash,
  Trash2,
} from "lucide-react";

interface LocalBooking {
  id: string;
  partySize: number;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
}

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<LocalBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReservations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/rezervari");

      if (!response.ok) {
        throw new Error(`Eroare HTTP: ${response.status}`);
      }

      const data: LocalBooking[] = await response.json();

      data.sort((a, b) => {
        const dateTimeA = new Date(`${a.date} ${a.time}`).getTime();
        const dateTimeB = new Date(`${b.date} ${b.time}`).getTime();
        return dateTimeA - dateTimeB;
      });

      setReservations(data);
    } catch (err) {
      console.error("Eroare la preluarea rezervărilor:", err);
      setError(
        "Nu s-au putut prelua rezervările. Verificați consola serverului."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  const renderReservationCard = (booking: LocalBooking) => {
    const dateObj = new Date(booking.date);
    const displayDate = dateObj.toLocaleDateString("ro-RO", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    return (
      <div
        key={booking.id}
        className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 hover:bg-gray-700/70 transition duration-300 flex flex-col justify-between backdrop-blur-sm hover:scale-[1.02] transform"
      >

        <div className="space-y-3 text-gray-300 flex-grow">
          <p className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-gray-200" />
            <span className="font-semibold">Dată:</span> {displayDate}
          </p>
          <p className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-200" />
            <span className="font-semibold">Oră:</span> {booking.time}
          </p>
          <p className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-gray-200" />
            <span className="font-semibold">Persoane:</span> {booking.partySize}
          </p>
        </div>

        <div className="space-y-3 text-gray-500 pt-3 border-t border-gray-700 mt-4">
          <p className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-2" />
            {booking.email}
          </p>
          <p className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-2" />
            {booking.phone}
          </p>
          <p className="flex items-center text-xs pt-1">
            <Hash className="w-4 h-4 mr-2" /> {booking.id}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto mt-20">
        <header className="flex justify-between items-center mb-10 border-b border-gray-700/50 pb-6 backdrop-blur-sm bg-black/30 rounded-lg p-6">
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Dashboard Rezervări
          </h1>
          <button
            onClick={fetchReservations}
            disabled={loading}
            className={`px-4 py-2 cursor-pointer rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 
                            ${
                              loading
                                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                : "bg-gray-200 text-black hover:bg-white"
                            }`}
          >
            <RefreshCw
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Încărcare..." : "Reîmprospătează"}
          </button>
        </header>

        {error && (
          <div className="bg-red-900 p-4 rounded-lg mb-6 text-red-300">
            {error}
          </div>
        )}

        {!loading && reservations.length === 0 && !error && (
          <div className="text-center p-20 bg-gray-900 rounded-xl">
            <p className="text-2xl font-bold text-gray-500">
              Nicio rezervare înregistrată.
            </p>
            <p className="text-gray-400 mt-2">
              Adaugă rezervări pe pagina de frontend.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reservations.map(renderReservationCard)}
        </div>
      </div>
    </main>
  );
}