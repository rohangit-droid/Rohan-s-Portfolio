import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 bg-twilight-dark border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">
              Crafted with magic © {new Date().getFullYear()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
