import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, Briefcase, Users, Globe, Star, ArrowRight, GraduationCap, Handshake } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-women.jpg";

const stats = [
  { value: "5,000+", label: "Women Trained", icon: GraduationCap },
  { value: "300+", label: "Businesses Launched", icon: Briefcase },
  { value: "25+", label: "Countries Reached", icon: Globe },
  { value: "10,000+", label: "Community Members", icon: Users },
];

const programs = [
  { title: "Leadership Training", description: "Develop the skills and mindset to lead with confidence in any industry.", icon: Crown },
  { title: "Business & Entrepreneurship", description: "Turn your ideas into thriving businesses with expert guidance and resources.", icon: Briefcase },
  { title: "Mentorship", description: "Connect with accomplished women leaders who guide your journey.", icon: Star },
  { title: "Community & Networking", description: "Join a global network of ambitious women who uplift each other.", icon: Handshake },
];

const testimonials = [
  { name: "Amara Osei", role: "Tech Entrepreneur, Ghana", quote: "WIA gave me the confidence and skills to launch my tech startup. The mentorship was life-changing." },
  { name: "Sofia Martinez", role: "Marketing Director, Colombia", quote: "The leadership program transformed how I approach challenges. I've grown more in 6 months than in 5 years." },
  { name: "Priya Sharma", role: "Social Enterprise Founder, India", quote: "The community at WIA is unmatched. I found my co-founder, my mentor, and lifelong friends here." },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center gradient-hero">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Empowered women leaders" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-6">
              Women of Influence Academy
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
              Empowering Women to{" "}
              <span className="text-gradient-gold">Lead, Build,</span>{" "}
              and Influence
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 font-body leading-relaxed mb-10 max-w-2xl">
              Join a transformative academy that equips women with the knowledge, confidence, and network to build impactful careers, businesses, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-gold text-base px-10 py-4">
                Apply Now <ArrowRight size={18} className="ml-2 inline" />
              </Link>
              <Link to="/about" className="btn-outline-light text-base px-10 py-4">
                Join the Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-warm">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Who We Are"
            title="Building the Next Generation of Women Leaders"
            description="Women of Influence Academy is a global leadership and empowerment platform dedicated to equipping women with the tools, skills, and community they need to thrive."
          />
          <AnimatedSection className="text-center" delay={0.2}>
            <Link to="/about" className="btn-primary text-sm">
              Learn Our Story <ArrowRight size={16} className="ml-2 inline" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Offer"
            title="Programs Designed for Impact"
            description="Our comprehensive programs are tailored to meet women at every stage of their journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title} delay={i * 0.1}>
                <div className="glass-card p-8 hover-lift group h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-royal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <program.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{program.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding gradient-hero">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Impact"
            title="Numbers That Speak for Themselves"
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.15}>
                <div className="text-center">
                  <stat.icon size={32} className="text-gold mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/60 font-body text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-warm">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="Hear From Our Women"
            description="Real stories from women whose lives have been transformed by WIA."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="text-gold fill-gold" />
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
          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <Link to="/testimonials" className="btn-primary text-sm">
              Read More Stories <ArrowRight size={16} className="ml-2 inline" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
              Ready to Transform Your Life?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Join the Next Cohort of Extraordinary Women
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-10 leading-relaxed">
              Applications are now open. Take the first step toward becoming a woman of influence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="btn-gold text-base px-10 py-4">
                Apply Now <ArrowRight size={18} className="ml-2 inline" />
              </Link>
              <Link to="/courses" className="btn-outline-light text-base px-10 py-4">
                Explore Courses
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
