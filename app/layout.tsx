import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Import your global styles
import Navbar from "./components/navbar"; // Import Navbar
import Footer from "./components/footer"; // Import Footer

// Font setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Thaonguyen's Portfolio",
  description: "Showcasing my projects, skills, and experience.",
  icons: {
    icon: "https://tinypng.com/static/images/george-account-page.webp", 
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Add the Navbar component */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow ">{children}</main>

        {/* Add the Footer component */}
        <Footer />
      </body>
    </html>
  );
}
