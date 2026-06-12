import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white">
      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-10"
          >
            <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
              The Premier Academy
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-medium text-foreground leading-[1.05] tracking-tight mb-8">
              Lead with <br/>
              <span className="italic text-plum">Grace</span> & <br/>
              Influence.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
              A transformative space where ambitious women cultivate the confidence, network, and expertise to command their industries.
            </p>
            <div className="flex items-center gap-8">
              <Link to="/courses" className="group flex items-center gap-4 text-sm tracking-[0.1em] uppercase border-b border-plum pb-1 hover:text-plum transition-colors">
                Apply Now 
                <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="Elegant portrait of a woman leader" 
              className="absolute inset-0 w-full h-full object-cover rounded-t-full shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-2xl max-w-xs">
              <p className="font-display italic text-plum text-lg mb-2">"The turning point in my career."</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">— Amara Osei, Alumni</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Mission */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-display font-medium leading-tight mb-8">
              We believe in the quiet power of <span className="italic text-champagne">unapologetic excellence.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-loose max-w-2xl mx-auto">
              Women of Influence Academy isn't just about learning; it's about shedding the imposter syndrome and stepping fully into the leader you were meant to be. Our curated programs are designed for women who demand more from their careers and themselves.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-24 px-6 lg:px-12 bg-ivory border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left divide-x divide-border/40">
            {[
              { value: "5k+", label: "Women Trained" },
              { value: "300+", label: "Businesses Built" },
              { value: "25", label: "Countries" },
              { value: "10k+", label: "Community" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="pl-0 lg:pl-12">
                  <div className="text-5xl lg:text-6xl font-display text-plum mb-2">{stat.value}</div>
                  <div className="text-sm tracking-[0.15em] uppercase text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
