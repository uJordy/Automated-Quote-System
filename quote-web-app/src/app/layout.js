import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Automatated Quote System",
  description: "Website which generates quotes for web or app development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <nav className="sticky top-0 z-20 bg-slate/30 dark:bg-black/30 backdrop-filter backdrop-blur-lg border-b border-gray-100/50 dark:border-gray-800">
          <Link className="text-lg block p-4 text-blue-500 dark:text-blue-300" href="/">
            Home
          </Link>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
