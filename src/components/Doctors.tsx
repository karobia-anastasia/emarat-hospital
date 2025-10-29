import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram } from "lucide-react";
import profile from "@/assets/user (3).png"
const doctors = [
  {
    name: "Dr. Sarah Wanjiru",
    specialty: "Cardiologist",
    image: profile,
  },
  {
    name: "Dr. James Omondi",
    specialty: "Pediatrician",
    image: profile,
  },
  {
    name: "Dr. Grace Njeri",
    specialty: "Gynecologist",
    image: profile,
  },
  {
    name: "Dr. David Mwangi",
    specialty: "Orthopedic Surgeon",
    image: profile,
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold text-lg uppercase tracking-wider mb-3">
            Our Doctors
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Meet Our Specialist Doctors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to providing you with the best medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={`${doctor.name} - ${doctor.specialty} at Emarat Hospital`}
                  className="w-45 h-45 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ transitionDelay: "0.1s" }}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ transitionDelay: "0.15s" }}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ transitionDelay: "0.2s" }}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {doctor.name}
                </h3>
                <p className="text-green-500 font-medium">
                  {doctor.specialty}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
