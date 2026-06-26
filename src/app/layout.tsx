import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ConvexClientProvider } from "@/components/ConvexClientProvider";

export const metadata: Metadata = {
  title: "Women of Influence Academy",
  description: "Empowering women through mentorship, education, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full overscroll-y-none antialiased selection:bg-plum selection:text-white">
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <ConvexClientProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
