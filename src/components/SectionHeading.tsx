import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, light }: SectionHeadingProps) => (
  <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
    {label && (
      <span className={`inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3 ${light ? "text-gold" : "text-accent"}`}>
        {label}
      </span>
    )}
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-base sm:text-lg font-body leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
