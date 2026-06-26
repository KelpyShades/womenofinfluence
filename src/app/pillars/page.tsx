"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const pillarsList = [
  {
    num: "01",
    title: "Spiritual Leadership & Ministry",
    description: "Teaching, preaching, mentorship, and raising godly disciples in faith communities. You are called to be a voice that leads others into the presence of God, raising a generation anchored in truth and holiness."
  },
  {
    num: "02",
    title: "Family & Relationships",
    description: "Strengthening the foundation of homes, marriages, and family values while nurturing future generations. A woman who influences the home influences history — because nations are first shaped at the dining table."
  },
  {
    num: "03",
    title: "Education & Academia",
    description: "Shaping minds and transforming lives through teaching, research, and knowledge-sharing. Every classroom, lecture hall, and learning space is a sphere of influence waiting for you to occupy it."
  },
  {
    num: "04",
    title: "Business & Finance",
    description: "Establishing wealth, ethical business practices, and financial empowerment to sustain communities. God-honoring businesses create jobs, solve problems, and fund kingdom assignments."
  },
  {
    num: "05",
    title: "Government & Politics",
    description: "Occupying decision-making positions to bring righteousness, justice, and effective leadership to governance. When righteous women lead, communities flourish and the vulnerable are protected."
  },
  {
    num: "06",
    title: "Media & Communication",
    description: "Influencing narratives through journalism, content creation, public speaking, and digital platforms. The woman who controls the narrative shapes what a generation believes about itself."
  },
  {
    num: "07",
    title: "Arts, Entertainment & Innovation",
    description: "Using creativity, storytelling, and technological advancements to inspire and shape culture. Art is the language of the soul — and the woman who wields it with purpose changes hearts no sermon could reach."
  }
];

const PillarsOfInfluence = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white">
      
      {/* Plum Editorial Hero */}
      <section className="relative pt-36 pb-20 px-6 lg:px-12 bg-plum text-ivory">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-champagne font-body text-xs tracking-[0.3em] uppercase mb-6 block font-semibold">
              Pillars of Influence
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight mb-4">
              Seven Spheres. <br/>
              <span className="italic text-champagne">One Calling.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Overview Intro */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-soft-gold font-body text-xs tracking-[0.2em] uppercase mb-4 block font-bold">
              The Seven Pillars
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-medium leading-tight mb-8 text-foreground">
              Where Is God <br className="lg:hidden" /><span className="italic text-plum">Positioning You?</span>
            </h2>
            <div className="w-16 h-[2px] bg-soft-gold mb-10"></div>
            <p className="text-muted-foreground text-lg lg:text-xl font-light leading-relaxed">
              In every generation, God raises women to occupy strategic positions and extend His influence across the spheres of society. As women of influence, we are not just called to exist — but to thrive, lead, and create transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars List Section */}
      <section className="pb-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="divide-y divide-border/40">
            {pillarsList.map((pillar, idx) => (
              <AnimatedSection key={pillar.num} delay={idx * 0.05}>
                <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className="font-display italic text-4xl lg:text-5xl text-soft-gold font-light block">
                      {pillar.num}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display font-medium text-2xl lg:text-3xl text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Esther 4:14 Quote Block */}
          <AnimatedSection className="pt-8">
            <div className="bg-ivory border-l-4 border-soft-gold p-8 lg:p-12 rounded-r-lg">
              <p className="font-display italic text-xl lg:text-2xl text-plum leading-relaxed mb-6">
                &ldquo;For if you remain silent at this time, relief and deliverance will arise from another place... And who knows but that you have come to your royal position for such a time as this?&rdquo;
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-soft-gold font-bold">
                — Esther 4:14
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Button */}
          <AnimatedSection className="text-center pt-8">
            <Link
              href="/apply"
              className="btn-gold inline-flex items-center gap-4 text-sm px-10 py-5 uppercase tracking-wider group"
            >
              Step Into Your Pillar <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default PillarsOfInfluence;
