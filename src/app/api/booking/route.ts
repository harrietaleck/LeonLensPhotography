import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, sessionType, preferredDate } = body;

    if (!firstName || !lastName || !email || !phone || !sessionType || !preferredDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const booking = {
      id: `BK-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: "pending",
      ...body,
    };

    // Persist to a JSON file (acts as lightweight database)
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "bookings.json");
    let bookings: unknown[] = [];

    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      try { bookings = JSON.parse(raw); } catch { bookings = []; }
    }

    bookings.push(booking);
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2));

    console.log(`[Booking] New request from ${firstName} ${lastName} (${email}) — ${sessionType} on ${preferredDate}`);

    return NextResponse.json(
      { message: "Booking request received", id: booking.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Booking API Error]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "bookings.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ bookings: [], total: 0 });
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    const bookings = JSON.parse(raw);
    return NextResponse.json({ bookings, total: bookings.length });
  } catch {
    return NextResponse.json({ error: "Could not fetch bookings" }, { status: 500 });
  }
}
