import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const courses = [
  {
    title: "Influence Bootcamp",
    description: "6-week intensive for emerging women leaders to overcome imposter syndrome and lead with conviction.",
    price: "GH₵ 500",
  },
  {
    title: "Business Accelerator",
    description: "Build and scale your business with expert mentors, data-driven strategies, and global networking.",
    price: "GH₵ 800",
  },
];

const Courses = () => {
  return (
    <div className="bg-ivory min-h-screen font-body text-foreground overflow-hidden selection:bg-plum selection:text-white pt-32 pb-12">
      <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24 text-center">
        <AnimatedSection>
          <span className="text-plum font-body text-xs tracking-[0.3em] uppercase mb-8 block">
            Our Programs
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-8">
            Learn. Grow. <br/>
            <span className="italic text-plum">Lead.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Expert-led programs designed to accelerate your personal and professional growth.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 lg:px-12 max-w-4xl mx-auto pb-32">
        <div className="flex flex-col gap-12">
          {courses.map((course, i) => (
            <AnimatedSection key={course.title} delay={i * 0.1}>
              <div className="bg-white p-8 lg:p-12 border border-border/40 hover:border-plum transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="font-display font-medium text-3xl mb-4 text-plum italic">{course.title}</h3>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-lg">{course.description}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
                    <div className="font-display text-3xl text-foreground">
                      {course.price}
                    </div>
                    <Link to={`/apply?course=${encodeURIComponent(course.title)}`} className="group flex items-center gap-4 text-sm tracking-[0.1em] uppercase border-b border-plum pb-1 hover:text-plum transition-colors">
                      Enroll Now <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
