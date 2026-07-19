"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredDate: string;
  alternateDate: string;
  location: string;
  guestCount: string;
  budget: string;
  message: string;
  howFound: string;
  agreeTerms: boolean;
};

const sessionTypes = [
  "Wedding Photography",
  "Portrait Session",
  "Commercial Photography",
  "Event Photography",
  "Newborn & Family",
  "Mini Session",
  "Other",
];

const budgets = [
  "Under R1,500",
  "R1,500 – R3,500",
  "R3,500 – R6,000",
  "R6,000 – R10,000",
  "R10,000+",
  "Let's discuss",
];

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-12 flex flex-col items-center justify-center min-h-[500px] text-center">
        <CheckCircle className="w-16 h-16 text-gold-400 mb-6" />
        <h2 className="text-2xl font-light tracking-wide text-white mb-4">Booking Request Received!</h2>
        <p className="text-zinc-400 leading-relaxed max-w-md mb-8">
          Thank you for reaching out. We&apos;ll review your request and get back to you within 24 hours to confirm availability and next steps.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-900 border border-zinc-800 p-8 space-y-6">
      <h2 className="text-xl font-light tracking-wide text-white mb-2">Session Details</h2>
      <div className="w-8 h-px bg-gold-400 mb-6" />

      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">First Name *</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="input-field"
            placeholder="Jane"
          />
          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="label">Last Name *</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            className="input-field"
            placeholder="Smith"
          />
          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Contact Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Email Address *</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
            })}
            type="email"
            className="input-field"
            placeholder="jane@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="label">Phone Number *</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            className="input-field"
            placeholder="+27 72 000 0000"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Session Type */}
      <div>
        <label className="label">Session Type *</label>
        <select
          {...register("sessionType", { required: "Please select a session type" })}
          className="input-field"
        >
          <option value="">— Select a session —</option>
          {sessionTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.sessionType && <p className="text-red-400 text-xs mt-1">{errors.sessionType.message}</p>}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Preferred Date *</label>
          <input
            {...register("preferredDate", { required: "Please select a preferred date" })}
            type="date"
            className="input-field"
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.preferredDate && <p className="text-red-400 text-xs mt-1">{errors.preferredDate.message}</p>}
        </div>
        <div>
          <label className="label">Alternate Date</label>
          <input
            {...register("alternateDate")}
            type="date"
            className="input-field"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>

      {/* Location & Guest Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Location / Venue</label>
          <input
            {...register("location")}
            className="input-field"
            placeholder="Johannesburg, Sandton..."
          />
        </div>
        <div>
          <label className="label">Number of People</label>
          <input
            {...register("guestCount")}
            type="number"
            min="1"
            className="input-field"
            placeholder="2"
          />
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="label">Estimated Budget</label>
        <select {...register("budget")} className="input-field">
          <option value="">— Select budget range —</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* How Found */}
      <div>
        <label className="label">How did you find us?</label>
        <select {...register("howFound")} className="input-field">
          <option value="">— Select one —</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google Search</option>
          <option value="Referral">Friend / Referral</option>
          <option value="Wedding Fair">Wedding Fair</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="label">Tell Us About Your Vision</label>
        <textarea
          {...register("message")}
          rows={5}
          className="input-field resize-none"
          placeholder="Describe your ideal session, any specific requirements, special requests, or questions you have..."
        />
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3">
        <input
          {...register("agreeTerms", { required: "You must accept the terms" })}
          type="checkbox"
          id="terms"
          className="mt-1 accent-gold-400"
        />
        <label htmlFor="terms" className="text-zinc-400 text-sm leading-relaxed cursor-pointer">
          I agree to the{" "}
          <a href="#" className="text-gold-400 hover:underline">
            Terms & Conditions
          </a>{" "}
          and understand that a deposit may be required to secure the date.
        </label>
      </div>
      {errors.agreeTerms && <p className="text-red-400 text-xs">{errors.agreeTerms.message}</p>}

      {/* Error message */}
      {status === "error" && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Booking Request"
        )}
      </button>
    </form>
  );
}
