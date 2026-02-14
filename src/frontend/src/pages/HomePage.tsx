import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { Phone, MessageCircle, Shield, Users, FileText, Headphones, Heart, Car, Home, Plane, Briefcase, Activity } from 'lucide-react';
import CallbackDialog from '@/components/CallbackDialog';
import GetQuoteDialog from '@/components/GetQuoteDialog';

export default function HomePage() {
  const navigate = useNavigate();

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Advisors',
      description: 'Our team of certified insurance experts brings years of industry knowledge to guide you.',
    },
    {
      icon: Shield,
      title: 'Multiple Insurance Partners',
      description: 'Access to 20+ leading insurance providers ensures you get the best coverage at competitive rates.',
    },
    {
      icon: FileText,
      title: 'Personalized Policy Guidance',
      description: 'We analyze your unique needs and recommend tailored insurance solutions that fit your budget.',
    },
    {
      icon: Headphones,
      title: 'Quick Claim Support',
      description: '24/7 dedicated claim assistance to ensure smooth and hassle-free claim settlements.',
    },
  ];

  const insuranceCategories = [
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with comprehensive life coverage plans.',
      color: 'text-destructive',
    },
    {
      icon: Activity,
      title: 'Health Insurance',
      description: 'Protect yourself and your loved ones from medical expenses.',
      color: 'text-success',
    },
    {
      icon: Car,
      title: 'Motor Insurance',
      description: 'Complete protection for your vehicles with comprehensive coverage.',
      color: 'text-primary',
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Travel worry-free with coverage for medical emergencies and trip cancellations.',
      color: 'text-chart-2',
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description: 'Safeguard your home and belongings against unforeseen events.',
      color: 'text-chart-4',
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      description: 'Comprehensive coverage solutions for your business operations.',
      color: 'text-chart-5',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-success/5 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Protecting What <span className="text-primary">Matters Most</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Complete insurance solutions for individuals, families & businesses
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <GetQuoteDialog trigger={
                  <Button size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Quote
                  </Button>
                } />
                <Button size="lg" variant="outline" onClick={() => window.open('tel:+918341924348', '_self')}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-success/10 hover:bg-success/20 border-success text-success"
                  onClick={() => window.open('https://wa.me/918341924348', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-image.dim_1200x600.jpg"
                alt="Insurance Protection"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Vinay Associates */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Vinay Associates?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing honest advice and building long-term relationships with our clients.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Insurance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage options tailored to your specific needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insuranceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate({ to: '/services' })}>
                <CardHeader>
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                    <category.icon className={`h-7 w-7 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" onClick={() => navigate({ to: '/services' })}>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let our experts help you find the perfect insurance solution. Get a free quote today or request a callback at your convenience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
            <GetQuoteDialog trigger={
              <Button size="lg" variant="secondary">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            } />
            <CallbackDialog trigger={<Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Request a Callback</Button>} />
          </div>
        </div>
      </section>
    </div>
  );
}
