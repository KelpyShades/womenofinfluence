import { BookOpen, Mic } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  {
    title: "Recommended Books",
    icon: BookOpen,
    items: [
      {
        title: "Dare to Lead",
        description: "Brené Brown&apos;s essential guide to brave leadership &mdash; building trust, connection, and the courage to show up fully in any room."
      },
      {
        title: "The Woman God Sees",
        description: "A powerful read on identity, divine purpose, and stepping into the fullness of who God has called you to be."
      },
      {
        title: "Rich Dad Poor Dad",
        description: "Foundational financial literacy that every woman in the Business & Finance pillar &mdash; and beyond &mdash; should have in her library."
      }
    ]
  },
  {
    title: "Recommended Podcasts",
    icon: Mic,
    items: [
      {
        title: "The Goal Digger Podcast",
        description: "Practical strategies for building a life and career you love &mdash; from mindset shifts to business growth, delivered with energy and faith."
      },
      {
        title: "Called & Caffeinated",
        description: "For the woman navigating purpose, faith, and leadership. Each episode is a cup of clarity for women who know they are called to more."
      }
    ]
  }
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

      <section className="px-6 lg:px-12 max-w-5xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <div className="border-t border-plum pt-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display font-medium text-2xl text-foreground italic">{cat.title}</h3>
                  <cat.icon size={20} className="text-plum opacity-50" />
                </div>
                <ul className="space-y-6">
                  {cat.items.map((item) => (
                    <li key={item.title} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-plum/30 mt-2 shrink-0 group-hover:bg-plum transition-colors" />
                      <div className="space-y-1">
                        <a href="#" className="font-display font-medium text-lg text-foreground group-hover:text-plum transition-colors block">
                          {item.title}
                        </a>
                        <p className="text-muted-foreground font-light text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
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
