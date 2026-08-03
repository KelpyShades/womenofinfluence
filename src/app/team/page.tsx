"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "../../../convex/_generated/api";

const Team = () => {
  const dbExecutives = useQuery(api.executives.getExecutives);

  const isExecutivesLoading = dbExecutives === undefined;
  const executives = dbExecutives || [];

  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24 text-center">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Our Executives
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            The Women <br/>
            <span className="italic text-plum">Behind The Vision.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Meet the dedicated leadership team driving the mission and expanding the impact of Women of Influence Academy.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-350 mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {isExecutivesLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-6 w-full animate-pulse">
                <Skeleton className="aspect-4/5 w-full border border-border/40" />
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="space-y-2 mt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            ))
          ) : executives.length === 0 ? (
            <div className="col-span-full py-16 text-center">
              <p className="text-muted-foreground font-light text-lg">No executives featured at the moment.</p>
            </div>
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            executives.map((exec: any, i: number) => (
              <AnimatedSection key={exec._id} delay={i * 0.1}>
                <div className="group flex flex-col gap-6">
                  <div className="relative overflow-hidden border border-border/40">
                    <div className="aspect-4/5 w-full bg-plum/5">
                      {exec.imageUrl ? (
                        <Image
                          src={exec.imageUrl}
                          alt={exec.name}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-plum/30">
                          No Image
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display font-medium text-3xl text-foreground mb-2 italic">{exec.name}</h3>
                    <span className="text-plum font-body text-xs tracking-[0.2em] uppercase mb-4 block font-semibold">
                      {exec.role}
                    </span>
                    {exec.bio && (
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {exec.bio}
                      </p>
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

export default Team;
