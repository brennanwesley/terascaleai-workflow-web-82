import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tech-dark text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/0abe889c-77c7-40ff-b16b-38a7fdbafa76.png" 
                alt="TeraScaleAI Logo" 
                className="h-14 mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Transforming workflows with AI intelligence. From field workers to customers, 
                we streamline every process.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-tech-cyan">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-tech-cyan">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-tech-cyan">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Workflow Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Industry Chatbots</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Process Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Custom Integrations</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Industries</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">Field Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors">etc.</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-tech-cyan" />
                <a href="mailto:drew@terascaleai.com" className="text-gray-300 hover:text-tech-cyan transition-colors">
                  drew@terascaleai.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-tech-cyan" />
                <a href="tel:432-238-1564" className="text-gray-300 hover:text-tech-cyan transition-colors">
                  432-238-1564
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 TeraScaleAI. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}