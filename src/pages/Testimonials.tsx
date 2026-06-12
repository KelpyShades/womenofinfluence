import { Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const written = [
  { name: "Amara Osei", role: "Tech Entrepreneur", quote: "WIA gave me the confidence to launch my startup. The mentorship was life-changing. I went from having an idea to running a profitable company in under a year.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80" },
  { name: "Sofia Martinez", role: "Marketing Director", quote: "The leadership program transformed how I approach challenges. I've grown more in 6 months than in 5 years. The network is worth its weight in gold.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
  { name: "Priya Sharma", role: "Social Enterprise Founder", quote: "The community at WIA is unmatched. I found my co-founder, my mentor, and lifelong friends. This academy doesn't just teach you — it transforms you.", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80" },
];

const videoTestimonials = [
  { title: "Amara's Journey", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
  { title: "Sofia's Story", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" },
  { title: "Priya's Transformation", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80" },
];

const Testimonials = () => {
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
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
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
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-border/40">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-plum/10 flex items-center justify-center transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center">
                      <Play size={24} className="text-plum ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-medium text-xl text-foreground">{v.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
