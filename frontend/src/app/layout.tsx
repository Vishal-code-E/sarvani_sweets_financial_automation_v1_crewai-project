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
        <div className="min-h-screen relative">
          {/* Background particles effect */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <Sidebar />
          <main className="pl-80 transition-all duration-300 relative z-10 min-h-screen">
            <div className="p-8 max-w-[calc(100vw-320px)]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

