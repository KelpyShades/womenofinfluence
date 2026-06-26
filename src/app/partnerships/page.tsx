"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const Partnerships = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24 text-center">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Partnerships
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Let&apos;s Build <br />
            <span className="italic text-plum">Together.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Partner with WIA to invest in the future of women&apos;s leadership
            and entrepreneurship.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-6xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="border-t border-plum pt-8">
              <h2 className="font-display font-medium text-3xl mb-6 text-foreground italic">
                Become A Partner
              </h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed mb-8">
                We collaborate with organizations, corporations, and
                institutions that share our vision of empowering women.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Co-creating training programs",
                  "Sponsoring cohorts and events",
                  "Providing mentorship and expertise",
                  "Corporate social responsibility initiatives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-plum font-body text-sm mt-1">/</span>
                    <span className="text-foreground font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#partner-form"
                className="text-sm tracking-widest uppercase border-b border-plum pb-1 hover:text-plum transition-colors inline-flex items-center gap-4 group"
              >
                Partner with Us{" "}
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="border-t border-plum pt-8 bg-white p-8 lg:p-12 shadow-sm">
              <h2 className="font-display font-medium text-3xl mb-6 text-plum italic">
                Sponsor a Woman
              </h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed mb-6">
                Many talented women cannot afford the cost of education and
                mentorship. By sponsoring a woman, you directly invest in her
                future and her community.
              </p>
              <p className="text-muted-foreground font-light text-lg leading-relaxed mb-10">
                Your sponsorship covers tuition, learning materials, and access
                to our global network. Every sponsor receives updates on their
                scholar&apos;s progress.
              </p>
              <Link
                href="/sponsor"
                className="text-sm tracking-widest uppercase border-b border-plum pb-1 hover:text-plum transition-colors inline-flex items-center gap-4 group"
              >
                Become a Sponsor{" "}
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section id="partner-form" className="px-6 lg:px-12 max-w-4xl mx-auto pb-32">
        <AnimatedSection>
          <div className="border border-border/40 p-8 lg:p-16 bg-white">
            <h2 className="font-display font-medium text-4xl mb-2 text-center">
              Reach Out to Us
            </h2>
            <p className="text-muted-foreground font-light text-center mb-12">
              Fill out the form below and our partnerships team will get back to
              you.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Name *"
                    className="w-full pb-4 border-b border-border/40 bg-transparent text-foreground font-light text-lg focus:outline-none focus:border-plum placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Organization"
                    className="w-full pb-4 border-b border-border/40 bg-transparent text-foreground font-light text-lg focus:outline-none focus:border-plum placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  className="w-full pb-4 border-b border-border/40 bg-transparent text-foreground font-light text-lg focus:outline-none focus:border-plum placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  required
                  rows={4}
                  placeholder="How would you like to partner? *"
                  className="w-full pb-4 border-b border-border/40 bg-transparent text-foreground font-light text-lg focus:outline-none focus:border-plum placeholder:text-muted-foreground/50 transition-colors resize-none"
                />
              </div>
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="text-sm tracking-widest uppercase border-b border-plum pb-1 hover:text-plum transition-colors inline-flex items-center gap-4 group"
                >
                  Send Message{" "}
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Partnerships;
