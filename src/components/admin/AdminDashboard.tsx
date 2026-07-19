"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Mail, Phone, User, Camera, CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react";

type Booking = {
  id: string;
  submittedAt: string;
  status: "pending" | "confirmed" | "cancelled";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredDate: string;
  alternateDate?: string;
  location?: string;
  guestCount?: string;
  budget?: string;
  message?: string;
  howFound?: string;
};

const statusConfig = {
  pending: { icon: AlertCircle, label: "Pending", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  confirmed: { icon: CheckCircle, label: "Confirmed", color: "text-green-400 bg-green-400/10 border-green-400/20" },
  cancelled: { icon: XCircle, label: "Cancelled", color: "text-red-400 bg-red-400/10 border-red-400/20" },
};

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "cancelled">("all");

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/booking");
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch {
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBookings(); }, []);

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);
  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="section-subtitle mb-2">Admin Panel</p>
            <h1 className="text-3xl font-light tracking-wide text-white">Booking Dashboard</h1>
          </div>
          <button
            onClick={fetchBookings}
            className="flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white text-sm transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Bookings", value: stats.total, color: "text-white" },
            { label: "Pending", value: stats.pending, color: "text-yellow-400" },
            { label: "Confirmed", value: stats.confirmed, color: "text-green-400" },
            { label: "Cancelled", value: stats.cancelled, color: "text-red-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900 border border-zinc-800 p-6">
              <div className={`text-3xl font-light mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(["all", "pending", "confirmed", "cancelled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-200 ${
                filter === f
                  ? "bg-gold-400 text-black font-semibold"
                  : "border border-zinc-700 text-zinc-400 hover:border-white hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bookings List */}
          <div className="lg:col-span-2 space-y-3">
            {loading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 h-24 shimmer" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="bg-zinc-900 border border-zinc-800 p-12 text-center">
                <Camera className="w-10 h-10 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-500">No bookings found.</p>
              </div>
            ) : (
              filtered
                .slice()
                .reverse()
                .map((booking) => {
                  const cfg = statusConfig[booking.status] || statusConfig.pending;
                  const StatusIcon = cfg.icon;
                  return (
                    <div
                      key={booking.id}
                      onClick={() => setSelected(booking)}
                      className={`bg-zinc-900 border p-5 cursor-pointer transition-all duration-200 hover:border-gold-400 ${
                        selected?.id === booking.id ? "border-gold-400" : "border-zinc-800"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1.5">
                            <span className="text-white font-medium">
                              {booking.firstName} {booking.lastName}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 border rounded-full text-xs ${cfg.color}`}>
                              <StatusIcon className="w-3 h-3" />
                              {cfg.label}
                            </span>
                          </div>
                          <p className="text-gold-400 text-sm">{booking.sessionType}</p>
                          <div className="flex items-center gap-4 mt-2 text-zinc-500 text-xs">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {booking.preferredDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {new Date(booking.submittedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="text-zinc-600 text-xs font-mono">{booking.id}</div>
                      </div>
                    </div>
                  );
                })
            )}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            {selected ? (
              <div className="bg-zinc-900 border border-zinc-800 p-6 sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium text-white tracking-wide">Booking Details</h3>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-zinc-600 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <DetailRow icon={User} label="Client" value={`${selected.firstName} ${selected.lastName}`} />
                  <DetailRow icon={Mail} label="Email" value={selected.email} />
                  <DetailRow icon={Phone} label="Phone" value={selected.phone} />
                  <DetailRow icon={Camera} label="Session" value={selected.sessionType} />
                  <DetailRow icon={Calendar} label="Preferred Date" value={selected.preferredDate} />
                  {selected.alternateDate && (
                    <DetailRow icon={Calendar} label="Alternate Date" value={selected.alternateDate} />
                  )}
                  {selected.location && (
                    <DetailRow icon={Camera} label="Location" value={selected.location} />
                  )}
                  {selected.budget && (
                    <DetailRow icon={Camera} label="Budget" value={selected.budget} />
                  )}
                  {selected.guestCount && (
                    <DetailRow icon={User} label="Guests" value={selected.guestCount} />
                  )}
                  {selected.howFound && (
                    <DetailRow icon={Camera} label="How Found" value={selected.howFound} />
                  )}
                </div>

                {selected.message && (
                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <p className="text-xs tracking-widest uppercase text-zinc-500 mb-2">Message</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{selected.message}</p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-xs tracking-widest uppercase text-zinc-500 mb-3">Actions</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${selected.email}?subject=Re: Your Photography Booking (${selected.id})&cc=bessingmaramba1@gmail.com`}
                      className="btn-gold text-center text-xs py-2"
                    >
                      Reply via Email
                    </a>
                    <a
                      href={`tel:${selected.phone}`}
                      className="btn-outline text-center text-xs py-2"
                    >
                      Call Client
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-zinc-900 border border-zinc-800 p-8 text-center">
                <Camera className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
                <p className="text-zinc-600 text-sm">Select a booking to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-zinc-600 text-xs uppercase tracking-wider">{label}</p>
        <p className="text-zinc-200 text-sm break-words">{value}</p>
      </div>
    </div>
  );
}
