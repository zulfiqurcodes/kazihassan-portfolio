import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kazi Hassan, Ph.D. | Environmental Engineer & Patent Holder",
  description:
    "Portfolio of Kazi Hassan, Ph.D. — Technology Development Manager with 20+ years in water quality, environmental engineering, and 7 patents in THM analyzer technology.",
  keywords: ["environmental engineer", "water quality", "THM analyzer", "patents", "Parker Hannifin"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-navy-800 text-white text-center py-6 text-sm">
          <p>© {new Date().getFullYear()} Kazi Hassan, Ph.D. — All rights reserved.</p>
          <p className="text-gray-400 mt-1">kazihassan2001@yahoo.com · 256-656-7550</p>
        </footer>
      </body>
    </html>
  );
}
