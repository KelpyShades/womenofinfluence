import { Clock, User, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const courses = [
  {
    title: "Leadership Foundations",
    description: "Master the fundamentals of effective leadership, decision-making, and team management. This course empowers you to lead with vision and purpose.",
    duration: "8 Weeks",
    instructor: "Dr. Amina Keita",
  },
  {
    title: "Personal Branding",
    description: "Learn how to build a powerful personal brand that communicates your value, attracts opportunities, and positions you as a thought leader.",
    duration: "6 Weeks",
    instructor: "Rachel Okonkwo",
  },
  {
    title: "Business Development",
    description: "From idea validation to scaling, learn the strategies and frameworks to build a profitable and sustainable business.",
    duration: "10 Weeks",
    instructor: "Maria Santos",
  },
  {
    title: "Digital Skills for Women",
    description: "Gain essential digital skills including social media marketing, data analytics, and digital tools that drive modern business growth.",
    duration: "6 Weeks",
    instructor: "Fatima Al-Hassan",
  },
];

const Courses = () => {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-hero text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-gold font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Our Courses</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Learn. Grow. <span className="text-gradient-gold">Lead.</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Expert-led courses designed to accelerate your personal and professional growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <AnimatedSection key={course.title} delay={i * 0.1}>
                <div className="glass-card p-8 hover-lift h-full flex flex-col">
                  <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{course.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1">{course.description}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm font-body text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> {course.instructor}</span>
                  </div>
                  <button className="btn-primary text-sm self-start">
                    Enroll Now <ArrowRight size={16} className="ml-2 inline" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
