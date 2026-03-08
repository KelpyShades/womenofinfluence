import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const businesses = [
  { name: "AfriTech Solutions", founder: "Amara Osei", description: "An ed-tech platform providing accessible digital learning across West Africa, serving over 50,000 students.", website: "#" },
  { name: "Bloom Skincare", founder: "Lily Chen", description: "A clean beauty brand by women, for women. Now available in 8 countries with sustainable, eco-friendly products.", website: "#" },
  { name: "EmpowerHer Finance", founder: "Fatou Diallo", description: "A financial literacy platform helping women in Africa build wealth through smart investing and budgeting tools.", website: "#" },
  { name: "Verde Social Impact", founder: "Maria Gonzalez", description: "A social enterprise consultancy helping nonprofits and NGOs maximize their community impact through data-driven strategies.", website: "#" },
  { name: "MamaPreneurs", founder: "Priya Sharma", description: "A community marketplace connecting mom entrepreneurs with customers who value handmade, sustainable products.", website: "#" },
  { name: "LeadHer Consulting", founder: "Hannah Kim", description: "Executive coaching and leadership development firm focused on helping women break through the glass ceiling.", website: "#" },
];

const Businesses = () => {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Alumni Businesses</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Businesses Built by <span className="text-gradient-gold">Our Women</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Discover the incredible businesses launched by WIA alumni from around the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((b, i) => (
              <AnimatedSection key={b.name} delay={i * 0.08}>
                <div className="glass-card p-8 hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full gradient-royal flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-primary-foreground text-lg">{b.name[0]}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-1 text-foreground">{b.name}</h3>
                  <p className="text-accent font-body text-sm font-medium mb-3">Founded by {b.founder}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1">{b.description}</p>
                  <a href={b.website} className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:underline">
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;
