import { BookOpen, Video, FileText, Download, Users, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  { title: "Educational Videos", icon: Video, items: ["Leadership Masterclass Series", "Building Your Brand Workshop", "Financial Literacy for Women"] },
  { title: "Articles & Guides", icon: BookOpen, items: ["10 Steps to Launch Your Business", "How to Build a Personal Brand", "Negotiation Strategies for Women"] },
  { title: "Leadership Resources", icon: Lightbulb, items: ["Leadership Style Assessment", "Goal Setting Framework", "Decision Making Toolkit"] },
  { title: "Free Downloads", icon: Download, items: ["Business Plan Template", "Personal Branding Worksheet", "Networking Tracker Spreadsheet"] },
  { title: "Outreach Activities", icon: Users, items: ["Community Leadership Workshops", "School Mentorship Programs", "Rural Women Empowerment Drives"] },
  { title: "Research & Reports", icon: FileText, items: ["State of Women in Business 2026", "Gender Gap in Leadership Report", "Women Entrepreneurship Index"] },
];

const Resources = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Community & Tools
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Fuel Your <br/>
            <span className="italic text-plum">Growth.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Access curated resources designed to support your leadership and business journey at every stage.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <div className="border-t border-plum pt-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display font-medium text-2xl text-foreground italic">{cat.title}</h3>
                  <cat.icon size={20} className="text-plum opacity-50" />
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-plum/30 mt-2 shrink-0 group-hover:bg-plum transition-colors" />
                      <a href="#" className="text-muted-foreground font-light text-[15px] leading-relaxed group-hover:text-plum transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
