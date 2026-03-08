import { useState } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Apply Now</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Your Journey <span className="text-gradient-gold">Starts Here</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Take the first step toward becoming a woman of influence. Apply for our next cohort.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Batch Timeline */}
      <section className="section-padding bg-warm">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Upcoming Cohorts" title="Batch Timeline" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { batch: "Cohort 12", date: "April 2026", status: "Applications Open" },
              { batch: "Cohort 13", date: "July 2026", status: "Coming Soon" },
              { batch: "Cohort 14", date: "October 2026", status: "Coming Soon" },
            ].map((b, i) => (
              <AnimatedSection key={b.batch} delay={i * 0.1}>
                <div className="glass-card p-6 text-center hover-lift">
                  <CalendarDays size={24} className="text-primary mx-auto mb-3" />
                  <h3 className="font-display font-bold text-lg text-foreground">{b.batch}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-2">{b.date}</p>
                  <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full ${
                    b.status === "Applications Open" ? "bg-gold/20 text-gold-dark" : "bg-muted text-muted-foreground"
                  }`}>
                    {b.status}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading label="Application Form" title="Tell Us About Yourself" />
          {submitted ? (
            <AnimatedSection>
              <div className="glass-card p-10 text-center">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={28} className="text-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-foreground">Application Received!</h3>
                <p className="text-muted-foreground font-body">Thank you for applying. We'll review your application and get back to you within 7 days.</p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="glass-card p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">Full Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">Email *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">Country *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Profession</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Why do you want to join WIA? *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="rounded border-border" />
                  <label htmlFor="newsletter" className="text-sm font-body text-muted-foreground">Subscribe to our newsletter</label>
                </div>
                <button type="submit" className="btn-primary text-sm w-full sm:w-auto">
                  Submit Application <ArrowRight size={16} className="ml-2 inline" />
                </button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apply;
