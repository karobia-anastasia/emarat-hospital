import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Emarat Hospital - Modern Healthcare Facility in Kenya" 
          className="w-full h-full object-cover"
        />
                <div className="absolute inset-0 bg-green-950/80"></div>

        {/* <div className="absolute inset-0 bg-secondary/90"></div> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white font-semibold text-lg uppercase tracking-wider mb-4 animate-fade-in">
            Keep Your Health in<span className="text-white"> Good Condition </span>
          </p>
          
          <h1 className="text-green-500 text-5xl md:text-7xl font-heading font-bold  mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Take The Best Quality Healthcare Treatment
          </h1>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-green-900 hover:bg-green-800 text-primary-foreground font-semibold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-green-950 hover:bg-green-900 text-accent-foreground font-semibold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
