import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import fs from "fs";
import path from "path";

type Booking = Record<string, unknown> & {
  id: string;
  submittedAt: string;
  status: string;
};

const MEMORY_KEY = "__leon_lens_bookings__";

function getMemoryStore(): Booking[] {
  const g = globalThis as typeof globalThis & { [MEMORY_KEY]?: Booking[] };
  if (!g[MEMORY_KEY]) g[MEMORY_KEY] = [];
  return g[MEMORY_KEY];
}

async function getKv() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((env as any).BOOKINGS as { get: (k: string) => Promise<string | null>; put: (k: string, v: string) => Promise<void> } | undefined) ?? null;
  } catch {
    return null;
  }
}

async function readBookings(): Promise<Booking[]> {
  const kv = await getKv();
  if (kv) {
    const raw = await kv.get("bookings");
    if (!raw) return [];
    try {
      return JSON.parse(raw) as Booking[];
    } catch {
      return [];
    }
  }

  // Local Next.js / Node fallback
  try {
    const filePath = path.join(process.cwd(), "data", "bookings.json");
    if (!fs.existsSync(filePath)) return getMemoryStore();
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as Booking[];
  } catch {
    return getMemoryStore();
  }
}

async function writeBookings(bookings: Booking[]): Promise<void> {
  const kv = await getKv();
  if (kv) {
    await kv.put("bookings", JSON.stringify(bookings));
    return;
  }

  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(
      path.join(dataDir, "bookings.json"),
      JSON.stringify(bookings, null, 2)
    );
  } catch {
    const store = getMemoryStore();
    store.length = 0;
    store.push(...bookings);
  }
}

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

    const booking: Booking = {
      id: `BK-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: "pending",
      ...body,
    };

    const bookings = await readBookings();
    bookings.push(booking);
    await writeBookings(bookings);

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
    const bookings = await readBookings();
    return NextResponse.json({ bookings, total: bookings.length });
  } catch {
    return NextResponse.json({ error: "Could not fetch bookings" }, { status: 500 });
  }
}
