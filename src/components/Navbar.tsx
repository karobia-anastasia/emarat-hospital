import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Doctors", href: "#doctors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Opening Hours: Mon - Fri : 8.00 am - 8.00 pm, Sat - Sun : 10.00 am - 6.00 pm</span>
                <span className="sm:hidden">Mon - Sun : 8.00 am - 8.00 pm</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@emarat-hospital.co.ke" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">info@emarat-hospital.co.ke</span>
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+254 700 000 000</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-md" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-2.5 rounded-lg group-hover:scale-105 transition-transform">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">
                Emarat<span className="text-primary">Hospital</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
                Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
