import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

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
        {/* Sidebar and main layout */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          {/* Main content */}
          <main className="flex-1 min-h-screen pt-16 md:ml-80">
            <div className="max-w-[1440px] mx-auto p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

