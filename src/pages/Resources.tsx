import { BookOpen, Video, FileText, Download, Users, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  {
    title: "Educational Videos",
    icon: Video,
    items: [
      "Leadership Masterclass Series",
      "Building Your Brand Workshop",
      "Financial Literacy for Women",
      "Public Speaking Bootcamp",
    ],
  },
  {
    title: "Articles & Guides",
    icon: BookOpen,
    items: [
      "10 Steps to Launch Your Business",
      "How to Build a Personal Brand",
      "Negotiation Strategies for Women",
      "Remote Work Productivity Guide",
    ],
  },
  {
    title: "Leadership Resources",
    icon: Lightbulb,
    items: [
      "Leadership Style Assessment",
      "Goal Setting Framework",
      "Decision Making Toolkit",
      "Conflict Resolution Guide",
    ],
  },
  {
    title: "Free Downloads",
    icon: Download,
    items: [
      "Business Plan Template",
      "Personal Branding Worksheet",
      "Mentor Meeting Prep Guide",
      "Networking Tracker Spreadsheet",
    ],
  },
  {
    title: "Outreach Activities",
    icon: Users,
    items: [
      "Community Leadership Workshops",
      "School Mentorship Programs",
      "Rural Women Empowerment Drives",
      "Annual Women's Conference",
    ],
  },
  {
    title: "Research & Reports",
    icon: FileText,
    items: [
      "State of Women in Business 2026",
      "Gender Gap in Leadership Report",
      "Women Entrepreneurship Index",
      "Impact Assessment Report",
    ],
  },
];

const Resources = () => {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Resources</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Tools to <span className="text-gradient-gold">Fuel Your Growth</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Access curated resources to support your leadership and business journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.08}>
                <div className="glass-card p-8 hover-lift h-full">
                  <div className="w-12 h-12 rounded-2xl gradient-royal flex items-center justify-center mb-5">
                    <cat.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4 text-foreground">{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <a href="#" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
