import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Truck, Heart, Factory, ShoppingCart, Wrench, Landmark, Fuel, MapPin, Wheat, Music, Recycle } from "lucide-react";
export function Industries() {
  const industries = [{
    icon: Fuel,
    title: "Oil & Gas",
    description: "Optimize drilling operations, safety protocols, and equipment maintenance across upstream and downstream processes."
  }, {
    icon: Building2,
    title: "Construction",
    description: "Streamline project management, safety protocols, and team coordination across job sites."
  }, {
    icon: Truck,
    title: "Logistics",
    description: "Optimize routes, track shipments, and enhance communication between drivers and dispatchers."
  }, {
    icon: Heart,
    title: "Healthcare",
    description: "Improve patient care workflows, staff scheduling, and medical record management."
  }, {
    icon: Factory,
    title: "Manufacturing",
    description: "Enhance production line efficiency, quality control, and maintenance scheduling."
  }, {
    icon: ShoppingCart,
    title: "Retail",
    description: "Optimize inventory management, customer service, and sales team coordination."
  }, {
    icon: Wrench,
    title: "Field Services",
    description: "Improve technician scheduling, equipment maintenance, and customer communication."
  }, {
    icon: Landmark,
    title: "Financial Services",
    description: "Streamline client onboarding, compliance processes, and internal workflows."
  }, {
    icon: MapPin,
    title: "Municipalities",
    description: "Enhance public service delivery, citizen engagement, and municipal operations management."
  }, {
    icon: Wheat,
    title: "Agriculture",
    description: "Optimize crop management, livestock monitoring, and farm equipment maintenance scheduling."
  }, {
    icon: Music,
    title: "Entertainment",
    description: "Streamline event management, talent coordination, and venue operations for optimal experiences."
  }, {
    icon: Recycle,
    title: "Environmental Services",
    description: "Improve waste management workflows, environmental monitoring, and sustainability reporting."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Our AI solutions are designed to understand and adapt to the unique challenges of different industries, providing specialized support where you need it most. 
(Here is a sampling of the industries we serve, solutions are applicable to many different businesses) </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                  <industry.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-tech-dark group-hover:text-primary transition-colors">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 font-bold">
            Don't see your industry? We create custom solutions for businesses of all types.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold hover:text-tech-cyan transition-colors cursor-pointer">
            <span>Contact us to discuss your specific needs</span>
            <div className="h-1 w-8 bg-current"></div>
          </div>
        </div>
      </div>
    </section>;
}