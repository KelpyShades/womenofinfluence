"use client";

import { Shield, ArrowLeft, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "../../../convex/_generated/api";

interface LicenseRecord {
  _id: string;
  country: string;
  body: string;
  licenseName: string;
  licenseNumber: string;
  flagCode?: string;
  imageUrl?: string | null;
}

// Convert 2-letter ISO country code to flag emoji
const getFlagEmoji = (countryCode?: string) => {
  if (!countryCode) return null;
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (e) {
    return null;
  }
};

const LicensesPage = () => {
  const dbLicenses = useQuery(api.licenses.getLicenses) as LicenseRecord[] | undefined;
  const isLicensesLoading = dbLicenses === undefined;
  const licenses = dbLicenses || [];

  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-24">
      {/* Header Section */}
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-20">
        <AnimatedSection className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-plum hover:text-plum/80 text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-6 block font-semibold">
            Compliance & Registrations
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Licensing <span className="italic text-plum">Information.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Women of Influence Academy and its operations operate under registrations and licenses across various jurisdictions.
          </p>
        </AnimatedSection>
      </section>

      {/* Licenses Grid */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLicensesLoading ? (
              // Skeletons
              Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="bg-white border border-border/40 p-8 rounded-2xl shadow-sm space-y-6 animate-pulse">
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-12 h-8 rounded bg-foreground/10" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-1/3 bg-foreground/10" />
                      <Skeleton className="h-4 w-1/2 bg-foreground/10" />
                    </div>
                  </div>
                  <Skeleton className="h-16 w-full rounded-xl bg-foreground/5" />
                </div>
              ))
            ) : licenses.length === 0 ? (
              // Empty State
              <div className="col-span-full bg-white border border-border/40 p-16 text-center rounded-2xl shadow-xs">
                <Shield size={48} className="text-plum/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-light text-lg">
                  No licensing records found in the database.
                </p>
              </div>
            ) : (
              // Licenses List
              licenses.map((license) => {
                const flagEmoji = getFlagEmoji(license.flagCode);

                return (
                  <div
                    key={license._id}
                    className="bg-[#f2f6f9] border border-border/20 p-8 rounded-3xl shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      {/* Flag / Icon & Country */}
                      <div className="flex items-center gap-4">
                        {license.imageUrl ? (
                          <div className="relative w-12 h-8 overflow-hidden rounded shadow-xs">
                            <Image
                              src={license.imageUrl}
                              alt={license.country}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : flagEmoji ? (
                          <span className="text-4xl leading-none select-none">{flagEmoji}</span>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-plum/5 flex items-center justify-center text-plum">
                            <Globe size={20} />
                          </div>
                        )}
                        <div>
                          <h3 className="font-display font-medium text-2xl text-foreground">
                            {license.country}
                          </h3>
                          <p className="text-muted-foreground text-sm font-light">
                            {license.body}
                          </p>
                        </div>
                      </div>

                      {/* License details inside a pill container */}
                      <div className="bg-white/80 backdrop-blur-xs border border-white/40 px-6 py-4 rounded-2xl">
                        <span className="block text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-1">
                          {license.licenseName}
                        </span>
                        <span className="font-display font-medium text-xl text-foreground select-all">
                          {license.licenseNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-32 pb-12 min-h-screen text-center">Loading...</div>}>
      <LicensesPage />
    </Suspense>
  );
}
