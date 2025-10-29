import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-500 font-semibold text-lg uppercase tracking-wider mb-3">
              About <span className="text-black">Emarat</span> <span className="text-red-500">Hospital</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Leading Healthcare Provider in Kenya
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Emarat Hospital has been serving the Kenyan community for over 15 years, 
              providing world-class medical care with compassion and dedication. Our 
              state-of-the-art facility is equipped with the latest medical technology 
              and staffed by highly qualified healthcare professionals.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe in patient-centered care that focuses on your individual needs, 
              ensuring comfort, dignity, and the highest standards of medical excellence.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Board-certified specialist doctors",
                "24/7 emergency medical services",
                "Modern diagnostic equipment",
                "Affordable healthcare packages",
                "Patient-friendly environment"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-400 text-green-500-foreground font-semibold px-8 rounded-lg"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" 
                alt="Medical professionals at Emarat Hospital" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-foreground">50K+</div>
                  <div className="text-muted-foreground">Happy Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
