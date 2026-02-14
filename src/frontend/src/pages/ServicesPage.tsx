import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from '@tanstack/react-router';
import { Heart, Activity, Car, Plane, Home, Briefcase, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Heart,
      title: 'Life Insurance',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      whoItsFor: 'Individuals looking to secure their family\'s financial future, breadwinners, and those planning for long-term wealth creation.',
      benefits: [
        'Financial security for your loved ones',
        'Tax benefits under Section 80C',
        'Wealth creation through investment plans',
        'Loan protection coverage',
        'Retirement planning options',
      ],
      whyChooseUs: [
        'Access to 15+ leading life insurance providers',
        'Personalized policy comparison and recommendations',
        'Assistance with policy renewals and modifications',
        'Expert guidance on term vs endowment plans',
      ],
    },
    {
      icon: Activity,
      title: 'Health Insurance',
      color: 'text-success',
      bgColor: 'bg-success/10',
      whoItsFor: 'Individuals, families, senior citizens, and corporate groups seeking protection against rising medical costs.',
      benefits: [
        'Coverage for hospitalization expenses',
        'Cashless treatment at network hospitals',
        'Pre and post-hospitalization coverage',
        'Tax benefits under Section 80D',
        'Coverage for critical illnesses',
      ],
      whyChooseUs: [
        'Comprehensive policy comparison across insurers',
        'Assistance in claim documentation and processing',
        'Family floater and individual plan options',
        'Regular policy health checks and updates',
      ],
    },
    {
      icon: Car,
      title: 'Motor Insurance',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      whoItsFor: 'Car and two-wheeler owners, commercial vehicle operators, and fleet managers.',
      benefits: [
        'Third-party liability coverage (mandatory)',
        'Own damage protection',
        'Personal accident cover',
        'Zero depreciation add-ons',
        'Roadside assistance',
      ],
      whyChooseUs: [
        'Quick policy issuance and renewal',
        'Competitive premium rates',
        'Hassle-free claim settlement support',
        'Add-on coverage recommendations',
      ],
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
      whoItsFor: 'Domestic and international travelers, frequent flyers, students studying abroad, and business travelers.',
      benefits: [
        'Medical emergency coverage abroad',
        'Trip cancellation and delay protection',
        'Lost baggage compensation',
        'Passport loss assistance',
        'Emergency evacuation coverage',
      ],
      whyChooseUs: [
        'Single trip and annual multi-trip options',
        'Instant policy issuance',
        '24/7 travel assistance helpline',
        'Coverage for adventure sports (optional)',
      ],
    },
    {
      icon: Home,
      title: 'Home Insurance',
      color: 'text-chart-4',
      bgColor: 'bg-chart-4/10',
      whoItsFor: 'Homeowners, tenants, and property investors looking to protect their property and belongings.',
      benefits: [
        'Coverage for fire, theft, and natural disasters',
        'Protection for home contents and valuables',
        'Temporary accommodation expenses',
        'Public liability coverage',
        'Electrical and electronic equipment protection',
      ],
      whyChooseUs: [
        'Customized coverage based on property value',
        'Quick claim assessment and settlement',
        'Add-on coverage for specific risks',
        'Regular policy reviews and updates',
      ],
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      color: 'text-chart-5',
      bgColor: 'bg-chart-5/10',
      whoItsFor: 'Small businesses, startups, corporate entities, and entrepreneurs seeking comprehensive business protection.',
      benefits: [
        'Property and asset protection',
        'Business interruption coverage',
        'Public and product liability insurance',
        'Employee group health and life coverage',
        'Professional indemnity insurance',
      ],
      whyChooseUs: [
        'Tailored solutions for different industries',
        'Risk assessment and mitigation strategies',
        'Group insurance plans for employees',
        'Dedicated business insurance advisors',
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Our Insurance Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive insurance solutions tailored to protect what matters most to you
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`${service.bgColor} pb-8`}>
                <div className="flex items-center gap-4">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-lg bg-background shadow-sm`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Comprehensive protection for your needs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                {/* Who It's For */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Who It's For</h3>
                  <p className="text-muted-foreground">{service.whoItsFor}</p>
                </div>

                <Separator />

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`h-5 w-5 mt-0.5 ${service.color} flex-shrink-0`} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Why Choose Us */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Choose Vinay Associates</h3>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {service.whyChooseUs.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
                    Talk to an Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Insurance You Need?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert advisors are here to help you understand your options and find the perfect insurance solution for your unique needs.
          </p>
          <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
            Get Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
