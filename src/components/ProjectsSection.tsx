import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enchanted Gallery",
    description: "An interactive art showcase with magical transitions and ambient audio",
    tags: ["React", "Three.js", "GSAP"],
    color: "from-primary/30 to-glow-red/30",
  },
  {
    title: "Mystic Dashboard",
    description: "A data visualization platform with enchanting charts and real-time updates",
    tags: ["Vue", "D3.js", "WebSocket"],
    color: "from-accent/30 to-primary/30",
  },
  {
    title: "Spirit Messenger",
    description: "A communication app with ethereal UI and end-to-end encryption",
    tags: ["Next.js", "Socket.io", "Prisma"],
    color: "from-glow-gold/30 to-accent/30",
  },
  {
    title: "Twilight Commerce",
    description: "An e-commerce experience that feels like browsing a magical marketplace",
    tags: ["React", "Stripe", "Tailwind"],
    color: "from-glow-red/30 to-glow-gold/30",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-twilight-plum to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(28_100%_58%/0.05)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            My Creations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each project is a journey into the realm of possibility
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-xl border border-primary/20 bg-card/60 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button variant="glass" size="sm" className="group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      View Live
                    </Button>
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Source
                    </Button>
                  </div>
                </div>

                {/* Corner glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
