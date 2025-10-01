import { NextRequest, NextResponse } from "next/server";

interface LocalBooking {
  id: string;
  partySize: number;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
}

const rezervari: LocalBooking[] = [];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("ID-ul primit în POST:", data.id);

    if (!data.id || !data.guestDetails.fullName || data.id === "") {
      return NextResponse.json(
        { error: "ID-ul rezervării lipsește sau este invalid." },
        { status: 400 }
      );
    }

    const newBooking: LocalBooking = {
      id: data.id,
      partySize: data.partySize,
      date: data.date,
      time: data.time,
      fullName: data.guestDetails.fullName,
      email: data.guestDetails.email,
      phone: data.guestDetails.phone,
    };

    rezervari.push(newBooking);

    console.log(
      "Nouă Rezervare Adăugată (Total: " + rezervari.length + "):",
      newBooking
    );

    return NextResponse.json(
      {
        message: "Rezervare salvată în memorie (local)",
        booking: newBooking,
        total: rezervari.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Eroare la salvarea rezervării:", error);
    return NextResponse.json(
      { error: "Eroare de procesare a datelor." },
      { status: 500 }
    );
  }
}


export async function GET() {
  return NextResponse.json(rezervari, { status: 200 });
}


export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idToDelete = searchParams.get("id");

  if (!idToDelete || idToDelete === "") {
    return NextResponse.json(
      { error: "ID-ul rezervării este necesar pentru ștergere." },
      { status: 400 }
    );
  }

  const indexToDelete = rezervari.findIndex((r) => r.id === idToDelete);

  if (indexToDelete === -1) {
    return NextResponse.json(
      { error: `Rezervarea cu ID-ul ${idToDelete} nu a fost găsită.` },
      { status: 404 }
    );
  }

  rezervari.splice(indexToDelete, 1);

  console.log(
    `Rezervarea ${idToDelete} a fost ștearsă (Total rămas: ${rezervari.length}).`
  );

  return NextResponse.json(
    {
      message: `Rezervarea ${idToDelete} a fost ștearsă cu succes.`,
      total: rezervari.length,
    },
    { status: 200 }
  );
}
