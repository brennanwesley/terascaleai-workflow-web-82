import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      value: "40%",
      description: "Significant improvement in workflow processing time"
    },
    {
      icon: Clock,
      title: "Save Time",
      value: "25hrs",
      description: "Reduced weekly administrative work per employee"
    },
    {
      icon: Shield,
      title: "Reduce Errors",
      value: "85%",
      description: "Decrease in process-related mistakes and oversights"
    },
    {
      icon: Zap,
      title: "Faster Response",
      value: "60%",
      description: "Quicker customer and internal query resolution"
    }
  ];

  return (
    <section className="py-20 bg-tech-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-tech-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our clients see measurable improvements in their operations from day one. 
            Here's what AI-powered workflows can do for your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center group hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-tech-cyan transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-tech-cyan group-hover:text-white" />
                </div>
                
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}