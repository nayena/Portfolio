import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1724906019868-93ad2c79414f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Heidy Nayeli Naranjo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Computer Science and Business Student at Brandeis University 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://drive.google.com/file/d/1-elDb8FBzcOPsKBRbkhBO7c5lpITbYiY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll to next section">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
