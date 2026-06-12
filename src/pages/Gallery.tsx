import { Play, Award, Camera } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const galleryItems = [
  { id: 1, type: "image", url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80", caption: "Cohort 4 Graduation", category: "Events" },
  { id: 2, type: "video", url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80", caption: "Leading with Empathy", category: "Workshops" },
  { id: 3, type: "award", url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80", caption: "WIA 2025 Awards", category: "Awards" },
  { id: 4, type: "image", url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80", caption: "Networking Mixer", category: "Community" },
  { id: 5, type: "image", url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80", caption: "Business Pitch Day", category: "Events" },
  { id: 6, type: "video", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80", caption: "Alumni Spotlight", category: "Interviews" },
  { id: 7, type: "award", url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80", caption: "Outstanding Leadership", category: "Awards" },
  { id: 8, type: "image", url: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80", caption: "Mentorship Session", category: "Mentorship" },
];

const Gallery = () => {
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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-12">
          {galleryItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <div className="group break-inside-avoid flex flex-col">
                <div className="relative overflow-hidden mb-6 border border-border/40">
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {item.type === "video" && (
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
                  {item.type === "award" && <Award size={20} className="text-gold shrink-0" />}
                  {item.type === "image" && <Camera size={20} className="text-muted-foreground/30 shrink-0" />}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
