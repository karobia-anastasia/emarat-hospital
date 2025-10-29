import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-heading font-bold">Emarat Hospital</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Providing quality healthcare services to the community with compassion and excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#doctors" className="text-secondary-foreground/80 hover:text-primary transition-colors">Our Doctors</a></li>
              <li><a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80">Emergency Care</li>
              <li className="text-secondary-foreground/80">Cardiology</li>
              <li className="text-secondary-foreground/80">Maternity</li>
              <li className="text-secondary-foreground/80">Laboratory</li>
              <li className="text-secondary-foreground/80">Vaccination</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>Nairobi Road, Emarat Plaza<br />Nairobi, Kenya</li>
              <li>info@emarat-hospital.co.ke</li>
              <li className="text-primary font-semibold">24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Emarat Hospital. All rights reserved. | Designed with care for your health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
