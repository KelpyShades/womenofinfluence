import { Star, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const written = [
  { name: "Amara Osei", role: "Tech Entrepreneur, Ghana", quote: "WIA gave me the confidence and skills to launch my tech startup. The mentorship was life-changing. I went from having an idea to running a profitable company in under a year." },
  { name: "Sofia Martinez", role: "Marketing Director, Colombia", quote: "The leadership program transformed how I approach challenges. I've grown more in 6 months than in 5 years. The network alone is worth its weight in gold." },
  { name: "Priya Sharma", role: "Social Enterprise Founder, India", quote: "The community at WIA is unmatched. I found my co-founder, my mentor, and lifelong friends. This academy doesn't just teach you — it transforms you." },
  { name: "Fatou Diallo", role: "Finance Professional, Senegal", quote: "I was stuck in my career for years. WIA gave me the clarity and confidence to ask for the promotion I deserved — and I got it within 3 months of completing the program." },
  { name: "Lily Chen", role: "E-commerce Founder, Singapore", quote: "The business development course was incredibly practical. I launched my online store while still in the program and hit my first $10K month within 60 days." },
  { name: "Maria Gonzalez", role: "Nonprofit Leader, Mexico", quote: "WIA helped me realize that leadership isn't about titles — it's about impact. I now lead a team of 30 and we serve over 5,000 families annually." },
];

const successStories = [
  { name: "Blessing Adeyemi", achievement: "Scaled her ed-tech startup to 3 countries", story: "After joining WIA's entrepreneurship track, Blessing secured $200K in funding and expanded her educational platform across West Africa." },
  { name: "Hannah Kim", achievement: "Became the youngest VP at her company", story: "The leadership foundations course gave Hannah the confidence and skills to accelerate her corporate career, earning a VP title at just 29." },
  { name: "Zara Mohammed", achievement: "Launched a women's health initiative", story: "Inspired by WIA's community, Zara founded a health initiative that has served over 15,000 women in rural communities." },
];

const Testimonials = () => {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Stories of <span className="text-gradient-gold">Transformation</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Hear directly from the women whose lives have been transformed by WIA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="What They Say" title="Written Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {written.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="glass-card p-8 hover-lift h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-foreground font-body text-sm leading-relaxed mb-6 flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="font-display font-semibold text-foreground">{t.name}</div>
                    <div className="text-muted-foreground font-body text-xs">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-warm">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Watch & Listen" title="Video Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Amara's Journey", "Sofia's Story", "Priya's Transformation"].map((title, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass-card overflow-hidden hover-lift">
                  <div className="aspect-video bg-royal-light flex items-center justify-center relative group cursor-pointer">
                    <div className="w-16 h-16 rounded-full gradient-royal flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground">{title}</h3>
                    <p className="text-muted-foreground font-body text-xs mt-1">Watch how WIA changed her life</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Impact" title="Success Stories" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.1}>
                <div className="glass-card p-8 hover-lift h-full">
                  <span className="inline-block text-xs font-body font-semibold px-3 py-1 rounded-full bg-gold/20 text-gold-dark mb-4">
                    {s.achievement}
                  </span>
                  <h3 className="font-display font-bold text-xl mb-3 text-foreground">{s.name}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.story}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
