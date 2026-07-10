"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "../../../convex/_generated/api";

const Businesses = () => {
  const dbBusinesses = useQuery(api.businesses.getBusinesses);

  const isBusinessesLoading = dbBusinesses === undefined;
  const businesses = dbBusinesses || [];

  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Alumni Businesses
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Empires Built <br/>
            <span className="italic text-plum">By Women.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Discover the incredible businesses, nonprofits, and movements launched by WIA alumni from around the world.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {isBusinessesLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-8 w-full animate-pulse">
                <div className="md:w-1/2 shrink-0">
                  <Skeleton className="aspect-4/5 w-full border border-border/40" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-8 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <Skeleton className="h-4 w-1/3 mt-4" />
                </div>
              </div>
            ))
          ) : businesses.length === 0 ? (
            <div className="col-span-full py-16 text-center">
              <p className="text-muted-foreground font-light text-lg">No alumni businesses featured at the moment.</p>
            </div>
          ) : (
            businesses.map((b, i) => (
              <AnimatedSection key={b.name} delay={i * 0.1}>
                <div className="group flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 relative overflow-hidden shrink-0 border border-border/40">
                    <div className="aspect-4/5 w-full">
                      {b.imageUrl ? (
                        <Image
                          src={b.imageUrl}
                          alt={b.name}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full bg-plum/5 flex items-center justify-center text-plum/30">
                          No Image
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <span className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase mb-4 block font-medium">
                      Founded by {b.founder}
                    </span>
                    <h3 className="font-display font-medium text-3xl text-foreground mb-6 italic">{b.name}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-8">
                      {b.description}
                    </p>
                    {b.website && b.website !== "#" && (
                      <a href={b.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs tracking-widest uppercase border-b border-plum pb-1 hover:text-plum transition-colors w-max font-semibold">
                        Visit Website <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Businesses;
