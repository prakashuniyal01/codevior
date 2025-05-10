
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Twitter, Linkedin, Github, Facebook, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/40 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">CodeVior</h3>
            <p className="mb-4 text-muted-foreground">Innovating Tomorrow, Building Today</p>
            <div className="flex items-center space-x-4 mb-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>8979049772</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:support@codevior.com" className="hover:text-primary transition-colors">
                support@codevior.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/tech-stack" className="hover:text-primary transition-colors">Tech Stack</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Machine Learning Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Web & Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Bot Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="text-sm text-muted-foreground text-center">
          <p>&copy; {new Date().getFullYear()} CodeVior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
