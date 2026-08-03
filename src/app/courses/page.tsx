"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const Courses = () => {

  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      
      {/* Hero & Overview Section */}
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-6 block font-semibold text-center">
            The Program
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-medium text-foreground leading-[1.05] tracking-tight mb-16 text-center">
            Six Months. <br/>
            <span className="italic text-soft-gold">Transformed</span> Forever.
          </h1>
        </AnimatedSection>

        {/* Overview Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 border-t border-border/40 pt-16">
          <div className="lg:col-span-5">
            <span className="text-soft-gold font-body text-xs tracking-[0.2em] uppercase mb-4 block font-bold">
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-foreground leading-tight italic">
              What You&apos;re <br className="hidden lg:block"/>Stepping Into
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
            <p>
              The WIA Training Program is a 6-month intensive structured in batches — what we call <strong className="font-medium text-foreground">cohorts</strong>. Each cohort is a sisterhood of women on the same journey of growth, accountability, and transformation.
            </p>
            <p>
              Through intensive learning, mentorship, and spiritual growth, each woman will be challenged to refine her skills, deepen her faith, and embrace her unique calling.
            </p>
          </div>
        </div>

        {/* Stats strip - Ruled lines */}
        <AnimatedSection>
          <div className="border-y border-border/40 py-10 mt-16 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl lg:text-6xl font-display text-plum font-light">6</div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 font-medium">Months</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-display text-plum font-light">7</div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 font-medium">Pillars</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-display text-plum font-light">&infin;</div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 font-medium">Impact</div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Your Journey Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white border-y border-border/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-6 block font-semibold">
              Your Journey
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-medium leading-tight mb-4 text-foreground">
              Four Steps to <br/>
              <span className="italic text-soft-gold">Your Influence</span>
            </h2>
            <div className="w-20 h-0.5 bg-soft-gold mb-16"></div>
          </AnimatedSection>

          {/* Timeline list */}
          <div className="divide-y divide-border/40">
            {[
              {
                step: "01",
                title: "Identify Your Pillar",
                description: "Through guided sessions, mentorship, and self-reflection, you will recognize where God is positioning you in the seven spheres of influence."
              },
              {
                step: "02",
                title: "Prepare & Build Capacity",
                description: "Training, workshops, and practical tasks will sharpen your competence and deepen your understanding in your area of calling."
              },
              {
                step: "03",
                title: "Take Action & Lead",
                description: "You will be challenged to step out, take initiative, and make a tangible impact in your sphere — not one day, but now."
              },
              {
                step: "04",
                title: "Multiply & Raise Others",
                description: "True influence is about building legacy and empowering others to rise. You will leave this program equipped to mentor the next woman."
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2 flex items-center gap-4">
                    <span className="font-display italic text-4xl lg:text-5xl text-soft-gold font-light">{item.step}</span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display font-medium text-2xl mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Proverbs Quote Card */}
          <AnimatedSection className="mt-20">
            <div className="bg-ivory border-l-4 border-soft-gold p-8 lg:p-12">
              <p className="font-display italic text-xl lg:text-2xl text-plum leading-relaxed mb-6">
                &ldquo;By wisdom a house is built, and through understanding it is established; through knowledge its rooms are filled with rare and beautiful treasures.&rdquo;
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-soft-gold font-bold">
                — Proverbs 24:3-4
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who You'll Become Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-6 block font-semibold">
                The Outcome
              </span>
              <h2 className="text-4xl lg:text-6xl font-display font-medium leading-tight mb-8 text-foreground">
                Who You&apos;ll <br/>
                <span className="italic text-soft-gold">Become.</span>
              </h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-sm">
                WIA isn&apos;t just about what you learn &mdash; it&apos;s about who you become. Over the course of six months, you will transition from a woman with potential to a woman with undeniable influence.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {[
              {
                title: "Bold & Articulate",
                desc: "You will no longer second-guess your voice. You will know how to speak, when to speak, and how to command a room with grace and authority."
              },
              {
                title: "Spiritually Grounded",
                desc: "Your influence will not be built on trends or hustle, but on the solid foundation of God's Word. You will lead with deep spiritual intelligence."
              },
              {
                title: "Competent & Strategic",
                desc: "Passion is not enough. You will develop the high-level competence and strategy required to occupy the top spaces in your chosen pillar."
              },
              {
                title: "Part of a Sisterhood",
                desc: "You will leave with a lifelong circle of women who will pray for you, celebrate you, and hold you accountable as you climb."
              }
            ].map((outcome, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <h3 className="font-display font-medium text-2xl mb-4 text-plum italic">{outcome.title}</h3>
                <p className="text-muted-foreground font-light text-base leading-relaxed">{outcome.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16 lg:mb-24">
            <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-6 block font-semibold">
              Daily Activities
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-medium leading-tight text-foreground">
              Every Day Is <span className="italic text-soft-gold">Intentional.</span>
            </h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              This is not a passive program. Every single day is designed to stretch you, grow you, and position you for the influence you were born to carry.
            </p>
          </AnimatedSection>

          {/* Clean Editorial Grid (No Emojis) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Morning Talk",
                description: "Each day, one lady leads the group in a conversation — sharing her wisdom and creating space for others to contribute. This builds confidence, communication skills, and the ability to hold a room with grace."
              },
              {
                title: "Evening Bible Study",
                description: "Deep Word study moments where ladies grow in wisdom together. Not surface-level — we go deep, wrestle with truth, and come out sharper and more grounded in God's word."
              },
              {
                title: "Weekly Courses & Assignments",
                description: "Every week has one focused topic. Courses come with real assignments and challenges that push you to apply what you're learning — not just know it, but live it."
              },
              {
                title: "Bi-Weekly Q&A Sessions",
                description: "Every two weeks, open sessions where you can ask anything, get clarity, receive mentorship, and grow through each other's questions and experiences."
              },
              {
                title: "Game & Sisters Night",
                description: "Because influence is also built in laughter and sisterhood. These nights are where walls come down, friendships deepen, and the community becomes family."
              },
              {
                title: "Presentations & Articulation",
                description: "You will regularly present your thoughts, ideas, and discoveries to the group. Learning to articulate your vision with clarity and confidence is non-negotiable for a woman of influence."
              }
            ].map((activity, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <div className="bg-white p-8 lg:p-10 border border-border/30 hover:border-plum/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-medium text-xl mb-4 text-plum italic">{activity.title}</h3>
                    <p className="text-muted-foreground font-light text-base leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accra Trip Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white border-t border-border/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16 lg:mb-20">
            <span className="text-soft-gold font-body text-xs tracking-[0.3em] uppercase mb-6 block font-bold">
              The Accra Trip — Full Experience Only
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6">
              Four Days That Will <br/>
              <span className="italic text-plum">Change Everything.</span>
            </h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-2xl mx-auto">
              This is not a holiday. It is a sacred gathering of women who are serious about their calling. Over four days in Accra, your cohort will come together to do something rare — <strong className="font-medium text-foreground">become</strong> before you go and lead.
            </p>
          </AnimatedSection>

          {/* List of Trip Activities */}
          <div className="space-y-6 mb-20">
            {[
              {
                title: "Seeking God Together",
                description: "Corporate prayer, worship, and consecration as a sisterhood. You will leave spiritually charged and laser-focused on your assignment."
              },
              {
                title: "The Dinner Date",
                description: "An elegant dinner where you dress the part, sit as women of influence, and celebrate how far you have come together."
              },
              {
                title: "Several Outings & Experiences",
                description: "Curated outings across Accra designed to inspire, connect, and create memories that bond a sisterhood for life."
              },
              {
                title: "Intentional Networking",
                description: "Structured sessions where you rub minds, share vision, and build real connections — not small talk, but deep, purposeful relationships."
              },
              {
                title: "Leadership Strategy Sessions",
                description: "Together you will plan, strategize, and map out how to be effective leaders in your respective pillars. You leave with a roadmap, not just inspiration."
              }
            ].map((activity, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <div className="bg-ivory border border-border/30 px-6 py-6 lg:px-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-display font-medium text-lg text-foreground mb-1">{activity.title}</h4>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Dark Banner Quote */}
          <AnimatedSection className="mb-20">
            <div className="bg-plum text-ivory text-center py-12 px-8 shadow-xl relative overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-wine to-plum opacity-50"></div>
              <div className="relative z-10 space-y-4">
                <p className="text-lg lg:text-xl text-ivory/80 font-light tracking-wide">
                  Some doors only open in the room.
                </p>
                <h3 className="font-display italic text-2xl lg:text-3xl text-soft-gold">
                  This trip is the room.
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Final Call to Action */}
          <AnimatedSection className="text-center">
            <Link
              href="/apply"
              className="btn-gold inline-flex items-center gap-4 text-sm px-10 py-5 uppercase tracking-wider group"
            >
              Get the full experience<ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Courses;
