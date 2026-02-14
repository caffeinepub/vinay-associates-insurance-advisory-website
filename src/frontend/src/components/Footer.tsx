import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { officeLocations } from '@/content/officeLocations';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/generated/vinay-associates-new-logo-transparent.dim_200x200.png" 
                alt="Vinay Associates Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-primary">Vinay Associates</h3>
                <p className="text-xs text-muted-foreground">Insurance Made Simple</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete insurance solutions for individuals, families & businesses. Honest advice, long-term relationships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/compare-educate" className="text-muted-foreground hover:text-primary transition-colors">
                  Compare & Educate
                </Link>
              </li>
              <li>
                <Link to="/claim-assistance" className="text-muted-foreground hover:text-primary transition-colors">
                  Claim Assistance
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                <a href="tel:+918341924348" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 8341924348
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                <a href="mailto:vinayassociates2024@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  vinayassociates2024@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                <div className="text-muted-foreground space-y-2">
                  {officeLocations.map((location) => (
                    <div key={location.name}>
                      <p className="font-medium text-foreground">{location.name}:</p>
                      <p className="text-xs">{location.address}</p>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Office Hours & Social */}
          <div>
            <h4 className="mb-4 font-semibold">Office Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <h4 className="mb-3 font-semibold">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()}. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
