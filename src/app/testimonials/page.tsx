"use client";

import { Play, User } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface TestimonialRecord {
  _id: string;
  name: string;
  role: string;
  type: "written" | "video" | "success_story";
  quote?: string;
  achievement?: string;
  imageUrl: string | null;
  videoUrl: string | null;
}

interface DefaultItem {
  _id: string;
  name: string;
  role?: string;
  quote?: string;
  achievement?: string;
  imageUrl: string | null;
  videoUrl: string | null;
}

const Testimonials = () => {
  const testimonials = useQuery(api.testimonials.getTestimonials) as TestimonialRecord[] | undefined;

  // Fallbacks representing the original hardcoded layout
  const defaultWritten: DefaultItem[] = [
    { _id: "dw1", name: "Amara Osei", role: "Tech Entrepreneur", quote: "WIA gave me the confidence to launch my startup. The mentorship was life-changing. I went from having an idea to running a profitable company in under a year.", imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80", videoUrl: null },
    { _id: "dw2", name: "Sofia Martinez", role: "Marketing Director", quote: "The leadership program transformed how I approach challenges. I've grown more in 6 months than in 5 years. The network is worth its weight in gold.", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80", videoUrl: null },
    { _id: "dw3", name: "Priya Sharma", role: "Social Enterprise Founder", quote: "The community at WIA is unmatched. I found my co-founder, my mentor, and lifelong friends. This academy doesn't just teach you — it transforms you.", imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80", videoUrl: null },
  ];

  const defaultVideos: DefaultItem[] = [
    { _id: "dv1", name: "Amara's Journey", imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", videoUrl: null },
    { _id: "dv2", name: "Sofia's Story", imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", videoUrl: null },
    { _id: "dv3", name: "Priya's Transformation", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80", videoUrl: null },
  ];

  const hasData = testimonials && testimonials.length > 0;
  
  const written: DefaultItem[] = hasData 
    ? testimonials.filter(t => t.type === "written" || t.type === "success_story") 
    : defaultWritten;
    
  const videoTestimonials: DefaultItem[] = hasData 
    ? testimonials.filter(t => t.type === "video") 
    : defaultVideos;

  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Testimonials
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Stories of <br/>
            <span className="italic text-plum">Transformation.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Hear directly from the women whose lives and careers have been elevated by the Women of Influence Academy.
          </p>
        </AnimatedSection>
      </section>

      {/* Written */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {written.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="flex flex-col h-full border-t border-border/40 pt-8">
                <p className="text-foreground font-display text-xl leading-relaxed mb-8 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {"achievement" in t && t.achievement && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-soft-gold mb-4">
                    🏆 Key Milestone: {t.achievement}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  {t.imageUrl ? (
                    <Image 
                      src={t.imageUrl} 
                      alt={t.name} 
                      width={48} 
                      height={48} 
                      className="w-12 h-12 rounded-full object-cover grayscale" 
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-plum/5 flex items-center justify-center text-plum shrink-0">
                      <User size={20} />
                    </div>
                  )}
                  <div>
                    <div className="font-body font-medium text-sm text-foreground uppercase tracking-widest">{t.name}</div>
                    <div className="text-muted-foreground font-light text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto pb-24">
        <AnimatedSection>
          <h2 className="font-display font-medium text-3xl mb-12 italic text-plum">Watch & Listen</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((v, i) => (
            <AnimatedSection key={v._id} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-4/5 overflow-hidden mb-6 border border-border/40 bg-zinc-950">
                  {v.videoUrl ? (
                    <video 
                      src={v.videoUrl} 
                      preload="metadata"
                      controls
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : v.imageUrl ? (
                    <>
                      <Image 
                        src={v.imageUrl} 
                        alt={v.name} 
                        width={600} 
                        height={750} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-plum/10 flex items-center justify-center transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center">
                          <Play size={24} className="text-plum ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-plum/5 flex items-center justify-center">
                      <Play size={32} className="text-plum opacity-50" />
                    </div>
                  )}
                </div>
                <h3 className="font-display font-medium text-xl text-foreground">
                  {v.name}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
