import AnimatedSection from "@/components/AnimatedSection";
import StorySection from "@/components/StorySection";

const values = [
  { title: "Leadership", description: "We cultivate bold, decisive leaders who inspire change." },
  { title: "Excellence", description: "We pursue the highest standards in everything we do." },
  { title: "Integrity", description: "We operate with transparency, honesty, and accountability." },
  { title: "Community", description: "We believe in the power of women lifting women." },
  { title: "Innovation", description: "We embrace new ideas and creative solutions." },
];

const About = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-32">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Empowering <br/>
            <span className="italic text-plum">Every Woman.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            We believe every woman has the potential to lead, create, and influence. WIA exists to unlock that potential.
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-white py-24 px-6 lg:px-12 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-display font-medium text-3xl mb-6 text-plum italic">Our Mission</h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                At the heart of the Women of Influence Training Program is a divine
                assignment&mdash;to equip, empower, and elevate women to first become an
                influence and then occupy influential positions where they can create a
                lasting impact. This program is designed to build women who are
                spiritually grounded, intellectually sharp, and boldly confident in fulfilling
                their God-given purpose.
              </p>
              <p>
                We are called not just to exist but to occupy&mdash;to take intentional steps in
                filling strategic positions across every pillar of influence and extending
                God&apos;s kingdom in all areas of society. We recognize that influence is not
                accidental; it requires purposeful growth, discipline, and a commitment
                to excellence.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display font-medium text-3xl mb-6 text-plum italic">Our Vision</h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              To equip, empower, and elevate women into positions of influence by fostering
              excellence, discipline, and leadership. Through spiritual and intellectual growth,
              we build a generation of women who lead with wisdom, integrity, and impact,
              creating a ripple effect that transforms societies and generations. We are
              committed to fulfilling God&apos;s purpose for our lives and answering His call
              whenever He leads.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <StorySection />

      {/* Values */}
      <section className="bg-ivory border-t border-border/40 py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display font-medium text-4xl mb-16 text-center">What We Stand For</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border-b border-border/40 pb-6 h-full">
                  <h3 className="font-display font-medium text-2xl mb-4 italic text-plum">{v.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
