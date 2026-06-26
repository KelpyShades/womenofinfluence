import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const businesses = [
  { name: "AfriTech Solutions", founder: "Amara Osei", description: "An ed-tech platform providing accessible digital learning across West Africa, serving over 50,000 students.", website: "#", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
  { name: "Bloom Skincare", founder: "Lily Chen", description: "A clean beauty brand by women, for women. Now available in 8 countries with sustainable, eco-friendly products.", website: "#", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80" },
  { name: "EmpowerHer Finance", founder: "Fatou Diallo", description: "A financial literacy platform helping women in Africa build wealth through smart investing and budgeting tools.", website: "#", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
  { name: "Verde Social Impact", founder: "Maria Gonzalez", description: "A social enterprise consultancy helping nonprofits and NGOs maximize their community impact.", website: "#", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" },
];

const Businesses = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Alumni Businesses
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Empires Built <br/>
            <span className="italic text-plum">By Women.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Discover the incredible businesses, nonprofits, and movements launched by WIA alumni from around the world.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {businesses.map((b, i) => (
            <AnimatedSection key={b.name} delay={i * 0.1}>
              <div className="group flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative overflow-hidden shrink-0 border border-border/40">
                  <div className="aspect-4/5 w-full">
                    <Image 
                      src={b.image} 
                      alt={b.name} 
                      width={400}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <span className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase mb-4 block">
                    Founded by {b.founder}
                  </span>
                  <h3 className="font-display font-medium text-3xl text-foreground mb-6 italic">{b.name}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {b.description}
                  </p>
                  <a href={b.website} className="inline-flex items-center gap-4 text-xs tracking-widest uppercase border-b border-plum pb-1 hover:text-plum transition-colors w-max">
                    Visit Website <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Businesses;
