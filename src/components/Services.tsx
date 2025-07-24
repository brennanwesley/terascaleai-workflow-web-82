import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Zap, Users, ArrowRight, Cog, BarChart3 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Streamline processes from field operations to office management, reducing bottlenecks and increasing efficiency across your entire organization.",
      features: ["Process Automation", "Real-time Monitoring", "Performance Analytics", "Custom Integrations"]
    },
    {
      icon: Bot,
      title: "Industry-Specific Chatbots",
      description: "Specialized AI assistants tailored for your industry, providing expert knowledge and support to workers at every level.",
      features: ["24/7 Support", "Industry Expertise", "Custom Training", "Multi-platform Integration"]
    },
    {
      icon: Zap,
      title: "End-to-End Automation",
      description: "Complete workflow automation solutions that connect field workers, office teams, and customers in one seamless experience.",
      features: ["Customer Integration", "Team Collaboration", "Automated Reporting", "Adaptability with Accounting Software and CRM's", "Scalable Solutions"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how TeraScaleAI transforms your workflows with cutting-edge artificial intelligence,
            creating seamless connections between every part of your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-glow">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-tech-dark mb-2">{service.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-tech-cyan"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="tech" className="w-full mt-6 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                <Cog className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-tech-dark">Customizable</h3>
              <p className="text-muted-foreground">Tailored solutions that adapt to your specific industry needs and workflows.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto p-3 bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-tech-dark">Scalable</h3>
              <p className="text-muted-foreground">Grow your AI capabilities as your business expands, from startups to enterprises.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto p-3 bg-tech-cyan/10 rounded-full w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-tech-dark">Collaborative</h3>
              <p className="text-muted-foreground">Connect teams across departments with intelligent workflow coordination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}