import { Link } from "react-router-dom";
import Logo from "@/components/layout/Logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Providing innovative solutions and exceptional service since 2024.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors text-muted-foreground hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="transition-colors text-muted-foreground hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="transition-colors text-muted-foreground hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="transition-colors text-muted-foreground hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors text-muted-foreground hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors text-muted-foreground hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors text-muted-foreground hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="transition-colors text-muted-foreground hover:text-white">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partners" className="transition-colors text-muted-foreground hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/career" className="transition-colors text-muted-foreground hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/tech" className="transition-colors text-muted-foreground hover:text-white">
                  Tech
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors text-muted-foreground hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Noida</p>
              <p>City, State 12345</p>
              <p className="mt-2">support@codevior.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="pt-6 mt-12 text-sm text-center border-t border-white/10 text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;