import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, Users } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/0abe889c-77c7-40ff-b16b-38a7fdbafa76.png" 
              alt="TeraScaleAI Logo" 
              className="h-28 md:h-40 mx-auto mb-6"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Workflows
            <span className="block text-tech-cyan">with AI Intelligence</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From field workers to office teams to customers—streamline every process 
            with our specialized AI chatbots and workflow optimization solutions.
          </p>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white">
            <div className="flex items-center gap-2">
              <Workflow className="h-6 w-6 text-tech-cyan" />
              <span className="text-lg">Workflow Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-tech-cyan" />
              <span className="text-lg">Industry Chatbots</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-tech-cyan" />
              <span className="text-lg">End-to-End Solutions</span>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}