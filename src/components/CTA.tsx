import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";
export function CTA() {
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Main CTA Card */}
        <Card className="bg-gradient-primary text-white border-0 shadow-xl overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-tech-cyan rounded-full blur-2xl"></div>
          </div>
          
          <CardContent className="p-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Workflows?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">Join the list of companies already using TeraScaleAI to streamline operations, reduce costs, and improve customer satisfaction.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="hero-outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-tech-dark">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
                <Button variant="secondary" size="xl" className="bg-white text-tech-dark hover:bg-white/90">
                  Discounted Trials Available
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="text-center text-white/80">
                <p className="mb-4">Questions? Our team is here to help.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a href="mailto:drew@terascaleai.com" className="flex items-center gap-2 hover:text-tech-cyan transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    drew@terascaleai.com
                  </a>
                  <a href="tel:432-238-1564" className="flex items-center gap-2 hover:text-tech-cyan transition-colors">
                    <Phone className="h-5 w-5" />
                    432-238-1564
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-tech-dark mb-2">Discounted Trials Available</h3>
            <p className="text-muted-foreground">Experience the full power of our platform with no commitment</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-tech-dark mb-2">Expert Support</h3>
            <p className="text-muted-foreground">Dedicated implementation team to ensure your success</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-tech-dark mb-2">Custom Integration</h3>
            <p className="text-muted-foreground">Seamlessly integrate with your existing tools and systems</p>
          </div>
        </div>
      </div>
    </section>;
}