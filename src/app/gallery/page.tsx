"use client";

import { Play, Award, Camera } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "../../../convex/_generated/api";

interface GalleryRecord {
  _id: string;
  type: "image" | "video" | "award";
  url: string | null;
  caption: string;
  category: string;
}

const Gallery = () => {
  const gallery = useQuery(api.gallery.getGallery) as GalleryRecord[] | undefined;

  const isGalleryLoading = gallery === undefined;
  const items = gallery || [];

  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Visual Story
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Moments of <br/>
            <span className="italic text-plum">Inspiration.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            A curated look into the lives, events, and milestones of the Women of Influence Academy community.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        {isGalleryLoading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group break-inside-avoid flex flex-col space-y-4 animate-pulse">
                <Skeleton className="w-full h-64 border border-border/40" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground font-light text-lg">No gallery items available at the moment.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-12">
            {items.map((item, i) => (
              <AnimatedSection key={item._id} delay={i * 0.1}>
                <div className="group break-inside-avoid flex flex-col">
                  <div className="relative overflow-hidden mb-6 border border-border/40 bg-zinc-950">
                    {item.type === "video" && item.url ? (
                      <video 
                        src={item.url} 
                        preload="metadata"
                        controls
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    ) : item.url ? (
                      <Image 
                        src={item.url} 
                        alt={item.caption} 
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-48 bg-plum/5 flex items-center justify-center text-plum">
                        <Camera size={32} />
                      </div>
                    )}
                    
                    {item.type === "video" && !item.url && (
                      <div className="absolute inset-0 bg-plum/10 flex items-center justify-center transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center">
                          <Play size={24} className="text-plum ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-display font-medium text-xl text-foreground leading-tight mb-2">
                        {item.caption}
                      </h3>
                      <span className="text-plum text-xs font-semibold uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                    {item.type === "award" && <Award size={20} className="text-soft-gold shrink-0" />}
                    {item.type === "image" && <Camera size={20} className="text-muted-foreground/30 shrink-0" />}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
