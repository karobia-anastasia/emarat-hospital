import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or need to schedule an appointment? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us A Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full h-12"
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full h-12"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Message" 
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full h-12 rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  Nairobi Road, Emarat Plaza<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-lg flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-1">+254 700 000 000</p>
                <p className="text-muted-foreground">+254 701 000 000</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-lg flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-1">info@emarat-hospital.co.ke</p>
                <p className="text-muted-foreground">support@emarat-hospital.co.ke</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-lg flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Working Hours</h3>
                <p className="text-muted-foreground mb-1">Mon - Fri: 8:00 AM - 8:00 PM</p>
                <p className="text-muted-foreground">Sat - Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.83854514795!2d36.70730744453125!3d-1.302137399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emarat Hospital Location in Nairobi, Kenya"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
