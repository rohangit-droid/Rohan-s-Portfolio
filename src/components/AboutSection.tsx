import { useEffect, useRef, useState } from "react";
import { Sparkles, Code, Palette, Heart } from "lucide-react";

const skills = [
  { icon: Code, label: "Development", description: "Building magical digital experiences" },
  { icon: Palette, label: "Design", description: "Crafting beautiful visual stories" },
  { icon: Sparkles, label: "Creativity", description: "Bringing imagination to life" },
  { icon: Heart, label: "Passion", description: "Dedicated to excellence" },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(270 50% 8%) 0%, hsl(320 65% 12%) 50%, hsl(270 50% 8%) 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-glow-gold/10 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div
              className="relative p-8 rounded-2xl glass-card"
              style={{
                boxShadow: "inset 0 1px 0 hsl(28 100% 58% / 0.2), 0 20px 60px hsl(270 60% 6% / 0.5)",
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 -z-10 blur-sm animate-pulse" />

              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Welcome to my enchanted corner of the digital realm. I'm a passionate creator 
                who blends art and technology to craft immersive experiences that captivate and inspire.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With a keen eye for detail and a heart full of creativity, I transform ideas into 
                stunning digital realities. Every project is a new adventure, every line of code a 
                spell waiting to be cast.
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="group p-6 rounded-xl glass-card hover:scale-105 transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_8px_hsl(28_100%_58%/0.8)]" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {skill.label}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
