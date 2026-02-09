import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Overland Transport" 
              className="h-32 w-auto object-contain mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Your premier goods transport solution serving all across Europe and the UK. 
              Founded in 2022, we deliver efficiency, reliability, and precision. 
              We don't just move goods – we move businesses forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/pallet-optimizer" className="text-primary-foreground/80 hover:text-primary transition-colors">
                3D Pallet Optimizer
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:freight.overland@gmail.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>freight.overland@gmail.com</span>
              </a>
              <a 
                href="tel:+40755123456" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+40 755 123 456</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>Oradea, Romania</span>
              </div>
              <p className="text-primary-foreground/60 text-sm mt-2 ml-8">
                Serving all across Europe + UK
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Overland Transport. All rights reserved. Service on time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
