import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ConvexQueryCacheProvider } from "convex-helpers/react/cache/provider";
import { CachePreloader } from "@/components/CachePreloader";

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
          <ConvexQueryCacheProvider expiration={300000}>
            <CachePreloader />
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ConvexQueryCacheProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
