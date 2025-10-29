import { Heart, Stethoscope, Baby, Activity, Eye, Syringe, Ambulance, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with state-of-the-art cardiac diagnostics and treatment options."
  },
  {
    icon: Baby,
    title: "Maternity Care",
    description: "Complete prenatal, delivery, and postnatal care in our modern maternity ward."
  },
  {
    icon: Activity,
    title: "Emergency Services",
    description: "24/7 emergency care with rapid response team and fully equipped trauma center."
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Expert diagnosis and treatment for a wide range of medical conditions."
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Advanced eye care services including surgery and vision correction treatments."
  },
  {
    icon: Syringe,
    title: "Vaccination",
    description: "Complete immunization services for children and adults with WHO-approved vaccines."
  },
  {
    icon: Ambulance,
    title: "Ambulance Service",
    description: "Rapid medical transport with fully equipped ambulances and trained paramedics."
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    description: "Modern diagnostic lab with accurate testing and quick result turnaround times."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a wide range of medical services delivered by experienced specialists using modern equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border bg-card cursor-pointer overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 mx-auto">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
