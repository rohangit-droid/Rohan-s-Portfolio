import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Fireflies from "./Fireflies";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Fireflies */}
      <Fireflies />

      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-end px-6 md:px-16 lg:px-24">
        {/* Right side text */}
        <div className="text-right max-w-2xl">
          <h1
            className={`font-display text-5xl md:text-7xl lg:text-9xl font-bold mb-4 text-foreground leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="block">HI</span>
            <span className="block text-gradient">I AM ROHAN </span>
          </h1>

          <p
            className={`text-2xl md:text-3xl lg:text-4xl text-primary font-semibold tracking-wide transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            I'M A WEBSITE DEVELOPER & CONTENT CREATOR 
          </p>

          {/* CTA Button */}
          <div
            className={`mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Button
              variant="glow"
              size="xl"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discover My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
