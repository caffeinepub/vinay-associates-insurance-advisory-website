import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import GetQuoteDialog from '@/components/GetQuoteDialog';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/compare-educate', label: 'Compare & Educate' },
    { to: '/claim-assistance', label: 'Claim Assistance' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/assets/generated/vinay-associates-new-logo-transparent.dim_200x200.png" 
            alt="Vinay Associates Logo" 
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">Vinay Associates</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Insurance Made Simple & Reliable</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={() => window.open('tel:+918341924348', '_self')}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
          <GetQuoteDialog trigger={
            <Button size="sm" className="hidden md:flex">
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Quote
            </Button>
          } />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    window.open('tel:+918341924348', '_self');
                    setIsOpen(false);
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <GetQuoteDialog trigger={
                  <Button className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                } onClose={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
