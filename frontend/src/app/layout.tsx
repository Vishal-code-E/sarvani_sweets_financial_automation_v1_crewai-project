import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Sarvani Sweets Automation Suite",
  description: "Financial automation dashboard for Sarvani Sweets multi-branch operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-72 transition-all duration-300">
            <div className="p-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

