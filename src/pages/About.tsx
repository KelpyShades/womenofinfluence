import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Eye, Lightbulb, Shield, Users, Sparkles, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { title: "Leadership", description: "We cultivate bold, decisive leaders who inspire change.", icon: Target },
  { title: "Excellence", description: "We pursue the highest standards in everything we do.", icon: Sparkles },
  { title: "Integrity", description: "We operate with transparency, honesty, and accountability.", icon: Shield },
  { title: "Community", description: "We believe in the power of women lifting women.", icon: Users },
  { title: "Innovation", description: "We embrace new ideas and creative solutions.", icon: Lightbulb },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Our Mission Is to Empower <span className="text-gradient-gold">Every Woman</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg leading-relaxed">
              We believe every woman has the potential to lead, create, and influence. WIA exists to unlock that potential.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="glass-card p-10 h-full">
              <div className="w-14 h-14 rounded-2xl gradient-royal flex items-center justify-center mb-6">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                To provide women with access to world-class mentorship, education, leadership training, and business development resources — regardless of their background, location, or circumstances.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card p-10 h-full">
              <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-6">
                <Eye size={24} className="text-foreground" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                A world where every woman has the confidence, knowledge, and network to build impactful careers, businesses, and communities that transform societies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-warm">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Our Story" title="How It All Began" />
          <AnimatedSection>
            <div className="glass-card p-10">
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Women of Influence Academy was born from a simple but powerful belief: when women are equipped with the right tools, they can change the world. Founded by a group of women leaders who saw the gap between potential and opportunity, WIA started as a small mentorship circle and has grown into a global movement.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Today, we've trained over 5,000 women across 25+ countries, launched hundreds of businesses, and built a community of over 10,000 ambitious women who support, challenge, and inspire each other daily.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our journey is just beginning, and we invite you to be part of it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Our Values" title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="glass-card p-8 hover-lift h-full">
                  <v.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-display font-semibold text-xl mb-2 text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-warm">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Get In Touch" title="Contact Us" description="Have questions? We'd love to hear from you." />
          <AnimatedSection>
            <div className="glass-card p-10">
              <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center">
                <a href="mailto:hello@wia.academy" className="flex items-center gap-2 text-primary font-body font-medium">
                  <Mail size={18} /> hello@wia.academy
                </a>
                <div className="flex gap-3 justify-center">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-royal-light flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                <button type="submit" className="btn-primary text-sm">Send Message</button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
