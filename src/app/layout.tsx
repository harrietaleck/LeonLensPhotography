import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

export const metadata: Metadata = {
  title: "Leon Lens Photography | Capturing Moments, Creating Memories",
  description:
    "Professional photography services – weddings, portraits, events & commercial. Based in South Africa. Book your session today.",
  keywords: "photography, wedding photographer, portrait photographer, Leon Lens, South Africa, leonlensphotos",
  openGraph: {
    title: "Leon Lens Photography",
    description: "Capturing Moments, Creating Memories",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <SocialSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
