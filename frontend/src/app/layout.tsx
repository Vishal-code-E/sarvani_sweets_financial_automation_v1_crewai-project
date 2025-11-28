import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Sarvani Sweets Financial Suite",
  description: "Enterprise-grade financial automation dashboard for Sarvani Sweets multi-branch operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gray-50" suppressHydrationWarning>
        <Navbar />
        <main className="pt-16 min-h-screen">
          <div className="max-w-[1440px] mx-auto p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

