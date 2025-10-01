"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Users,
  Clock,
  Calendar,
  CheckCircle,
  Mail,
  Phone,
  User,
  Send,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// --- Configurare și Date ---
const availableTimes = [
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

const generateBookingId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "#QR-";
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Interfețe
interface GuestDetails {
  fullName: string;
  email: string;
  phone: string;
}

interface BookingData {
  id: string;
  partySize: number;
  date: Date;
  time: string;
  details: GuestDetails;
}

export default function Reservations() {
  const [partySize, setPartySize] = useState(2);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    fullName: "",
    email: "",
    phone: "",
  });
  const [finalBooking, setFinalBooking] = useState<BookingData | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const dayFormat = new Intl.DateTimeFormat("ro-RO", { weekday: "short" })
    .format;
  const dateFormat = new Intl.DateTimeFormat("ro-RO", { day: "2-digit" })
    .format;
  const monthNameFormat = new Intl.DateTimeFormat("ro-RO", {
    month: "long",
    year: "numeric",
  }).format;

  const allMonths = useMemo(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const list = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentYear, currentMonth + i, 1);
      list.push(date);
    }
    return list;
  }, []);

  const currentMonthDate = allMonths[currentMonthIndex];

  const changeMonth = (direction: "next" | "prev") => {
    if (direction === "next" && currentMonthIndex < allMonths.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    } else if (direction === "prev" && currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const getDaysInMonth = (date: Date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const startingDayOfWeek = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null, isPast: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(year, month, i);
      const isToday = day.toDateString() === today.toDateString();

      const isPast = day.getTime() < today.getTime() && !isToday;

      days.push({ day, isToday, isPast });
    }
    return days;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof GuestDetails
  ) => {
    setGuestDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !partySize ||
      !selectedDate ||
      !selectedTime ||
      !guestDetails.fullName ||
      !guestDetails.email ||
      !guestDetails.phone
    ) {
      alert("Vă rugăm completați toate câmpurile obligatorii.");
      return;
    }

    const bookingId = generateBookingId();

    const dataToSend = {
      id: bookingId,
      partySize,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      guestDetails,
    };

    try {
      const response = await fetch("/api/rezervari", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setFinalBooking({
          id: bookingId,
          partySize,
          date: selectedDate,
          time: selectedTime,
          details: guestDetails,
        });
        setIsConfirmed(true);
      } else {
        alert(
          "Eroare la server: Rezervarea nu a putut fi înregistrată temporar."
        );
      }
    } catch (error) {
      console.error("Eroare de rețea la salvarea rezervării:", error);
      alert("A apărut o eroare de conexiune la rețea.");
    }
  };

  if (isConfirmed && finalBooking) {
    return (
      <main className="min-h-screen bg-black text-white pt-20 flex items-center justify-center p-4">
        <ConfirmationTicket
          booking={finalBooking}
          setIsConfirmed={setIsConfirmed}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1622140739492-f82f386260b5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Interior Restaurant Elegant"
            fill
            className="object-cover brightness-[.4]"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Rezervă o Masă
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            Experiența noastră culinară te așteaptă.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <form
          onSubmit={handleReservation}
          className="max-w-2xl mx-auto bg-[#1a1a1a] p-8 md:p-12 rounded-xl shadow-2xl border border-[#333] space-y-10"
        >
          <h2 className="text-3xl font-extrabold text-white border-b border-gray-700 pb-4">
            Detalii Rezervare
          </h2>

          <div>
            <label className="flex items-center text-lg font-bold mb-4 text-gray-200">
              <Users className="w-5 h-5 mr-2 text-gray-300" />
              Număr de Oaspeți
            </label>
            <div className="grid grid-cols-4 gap-3">
              {partySizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPartySize(size)}
                  className={`px-5 py-3 rounded-lg font-semibold transition-colors duration-200 border-2
                                ${
                                  partySize === size
                                    ? "bg-gray-200 text-black border-gray-200 shadow-md"
                                    : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-gray-500"
                                }
                            `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center text-lg font-bold mb-4 text-gray-200">
              <Calendar className="w-5 h-5 mr-2 text-gray-300" />
              Selectează Data
            </label>

            <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  onClick={() => changeMonth("prev")}
                  disabled={currentMonthIndex === 0}
                  className="p-2 text-white disabled:text-gray-600 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-xl font-bold text-white tracking-wider">
                  {monthNameFormat(currentMonthDate)}
                </h3>
                <button
                  type="button"
                  onClick={() => changeMonth("next")}
                  disabled={currentMonthIndex === allMonths.length - 1}
                  className="p-2 text-white disabled:text-gray-600 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-400 mb-2">
                {["Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"].map(
                  (day) => (
                    <div key={day}>{day}</div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonthDate).map(
                  ({ day, isToday, isPast }, index) => {
                    if (!day)
                      return <div key={`empty-${index}`} className="p-2"></div>;

                    const dateString = day.toISOString().split("T")[0];
                    const isSelected =
                      selectedDate.toDateString() === day.toDateString();

                    return (
                      <button
                        key={dateString}
                        type="button"
                        onClick={() => handleDateSelect(day)}
                        disabled={isPast}
                        className={`aspect-square rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 
                                        ${
                                          isPast
                                            ? "text-gray-600 cursor-not-allowed"
                                            : ""
                                        }
                                        ${
                                          !isPast && isSelected
                                            ? "bg-gray-200 text-black shadow-md"
                                            : ""
                                        }
                                        ${
                                          !isPast && !isSelected && isToday
                                            ? "border border-gray-200 text-white"
                                            : ""
                                        }
                                        ${
                                          !isPast && !isSelected && !isToday
                                            ? "text-gray-200 hover:bg-gray-700"
                                            : ""
                                        }
                                    `}
                      >
                        {dateFormat(day)}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="flex items-center text-lg font-bold mb-4 text-gray-200">
              <Clock className="w-5 h-5 mr-2 text-gray-300" />
              Ora Sosirii
            </label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`px-5 py-3 rounded-lg font-semibold transition-colors duration-200 border-2
                                ${
                                  selectedTime === time
                                    ? "bg-gray-200 text-black border-gray-200 shadow-md"
                                    : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-gray-500"
                                }
                            `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-4 border-t border-gray-700">
            <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-gray-300" />
              Informații Contact
            </h3>

            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-300 text-sm mb-2"
              >
                Nume Complet *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={guestDetails.fullName}
                onChange={(e) => handleInputChange(e, "fullName")}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-white focus:ring-1 focus:ring-white"
                placeholder="Prenume Nume"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={guestDetails.email}
                onChange={(e) => handleInputChange(e, "email")}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-white focus:ring-1 focus:ring-white"
                placeholder="nume@exemplu.ro"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-300 text-sm mb-2"
              >
                Telefon *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={guestDetails.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-white focus:ring-1 focus:ring-white"
                placeholder="+40 7xx xxx xxx"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <button
              type="submit"
              className="w-full bg-black text-white font-extrabold text-xl py-4 rounded-full cursor-pointer
                           hover:bg-gray-200 hover:text-black transition-colors duration-300 flex items-center justify-center gap-3"
            >
              Finalizează Rezervarea
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

interface ConfirmationProps {
  booking: BookingData;
  setIsConfirmed: (value: boolean) => void;
}

const ConfirmationTicket: React.FC<ConfirmationProps> = ({
  booking,
  setIsConfirmed,
}) => {
  return (
    <div className="max-w-md w-full bg-[#1a1a1a] p-8 rounded-xl shadow-2xl border border-gray-700 text-center">
      <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-6" />
      <h2 className="text-3xl font-extrabold mb-2 text-white">
        Vă Mulțumim, {booking.details.fullName.split(" ")[0]}!
      </h2>
      <p className="text-lg text-gray-400 mb-8">
        Rezervarea dumneavoastră a fost plasată cu succes.
      </p>

      <div className="bg-[#2a2a2a] p-6 rounded-lg text-left border border-gray-700 space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-gray-600">
          <span className="text-md text-gray-300 font-semibold">
            ID Rezervare
          </span>
          <span className="text-2xl font-extrabold text-gray-200">
            {booking.id}
          </span>
        </div>

        <p className="flex justify-between">
          <span className="font-semibold text-gray-300 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Dată:
          </span>
          <span className="text-white">
            {booking.date.toLocaleDateString("ro-RO", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="font-semibold text-gray-300 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Oră:
          </span>
          <span className="text-white">{booking.time}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-semibold text-gray-300 flex items-center gap-2">
            <Users className="w-4 h-4" /> Persoane:
          </span>
          <span className="text-white">{booking.partySize}</span>
        </p>
      </div>

      <button
        onClick={() => setIsConfirmed(false)}
        className="cursor-pointer mt-8 w-full bg-black text-white font-semibold py-3 rounded-full hover:bg-white hover:text-black transition-colors"
      >
        Închide
      </button>
    </div>
  );
};
