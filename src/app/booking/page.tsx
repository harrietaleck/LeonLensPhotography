import BookingForm from "@/components/booking/BookingForm";
import BookingInfo from "@/components/booking/BookingInfo";

export const metadata = {
  title: "Book a Session | Leon Lens Photography",
  description: "Reserve your photography session with Leon Lens. Weddings, portraits, events & more.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="section-subtitle mb-4">Reserve Your Date</p>
        <h1 className="section-title mb-6">Book a Session</h1>
        <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Fill out the form below and we&apos;ll be in touch within 24 hours to confirm your booking and discuss the details.
        </p>
      </div>

      {/* Form + Info */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          <div>
            <BookingInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
