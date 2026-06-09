import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/resume";

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
        <footer className="bg-navy-800 text-white text-center py-8 text-sm">
          <p className="font-semibold text-base mb-1">Kazi Hassan, Ph.D.</p>
          <p className="text-gray-400 mb-3">Technology Development Manager · Environmental Engineer</p>
          <div className="flex justify-center flex-wrap gap-4 text-gray-300 mb-4">
            <a href={`mailto:${profile.email}`} className="hover:text-gold-400 transition-colors">
              {profile.email}
            </a>
            <span className="text-gray-600">·</span>
            <span>{profile.phone}</span>
            <span className="text-gray-600">·</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              LinkedIn
            </a>
            <span className="text-gray-600">·</span>
            <a href={profile.siteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              {profile.siteUrl.replace("https://", "")}
            </a>
          </div>
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Kazi Hassan, Ph.D. · All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
