import { ArrowRight, Heart, Handshake } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Partnerships = () => {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Partnerships</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Let's Build <span className="text-gradient-gold">Together</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Partner with WIA to invest in the future of women's leadership and entrepreneurship.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="glass-card p-10 h-full">
              <div className="w-14 h-14 rounded-2xl gradient-royal flex items-center justify-center mb-6">
                <Handshake size={28} className="text-primary-foreground" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4 text-foreground">Partner With Us</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                We collaborate with organizations, corporations, and institutions that share our vision of empowering women. Partnership opportunities include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Co-creating training programs",
                  "Sponsoring cohorts and events",
                  "Providing mentorship and expertise",
                  "Corporate social responsibility initiatives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-muted-foreground font-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card p-10 h-full">
              <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-6">
                <Heart size={28} className="text-foreground" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4 text-foreground">Sponsor a Woman</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Many talented women cannot afford the cost of education and mentorship. By sponsoring a woman, you directly invest in her future and her community.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Your sponsorship covers tuition, learning materials, and access to our global network. Every sponsor receives updates on their scholar's progress.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-warm">
        <div className="max-w-3xl mx-auto">
          <SectionHeading label="Get Involved" title="Reach Out to Us" description="Fill out the form below and our partnerships team will get back to you." />
          <AnimatedSection>
            <form onSubmit={(e) => e.preventDefault()} className="glass-card p-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Organization</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Email *</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">How would you like to partner? *</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              <button type="submit" className="btn-primary text-sm">
                Send Message <ArrowRight size={16} className="ml-2 inline" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
