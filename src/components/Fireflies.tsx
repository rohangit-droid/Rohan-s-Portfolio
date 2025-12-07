import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Fireflies = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const flies: Firefly[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10,
    }));
    setFireflies(flies);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="absolute rounded-full"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            background: `radial-gradient(circle, hsl(28 100% 58% / 0.9), hsl(40 70% 70% / 0.4), transparent)`,
            boxShadow: `0 0 ${fly.size * 3}px hsl(28 100% 58% / 0.6), 0 0 ${fly.size * 6}px hsl(40 70% 70% / 0.3)`,
            animation: `firefly ${fly.duration}s ease-in-out infinite`,
            animationDelay: `${fly.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
