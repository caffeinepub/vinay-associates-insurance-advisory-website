import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Shield, Users, Heart, Award, Target } from 'lucide-react';

export default function AboutUsPage() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We believe in transparent communication and honest advice, always putting our clients\' interests first.',
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Every client is unique. We take time to understand your needs and provide personalized solutions.',
    },
    {
      icon: Heart,
      title: 'Long-term Relationships',
      description: 'We\'re not just here for the sale. We build lasting relationships and support you throughout your insurance journey.',
    },
    {
      icon: Award,
      title: 'Expertise & Experience',
      description: 'Our team of certified advisors brings years of industry knowledge and expertise to serve you better.',
    },
  ];

  const achievements = [
    { number: '10+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '20+', label: 'Insurance Partners' },
    { number: '98%', label: 'Claim Success Rate' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            About Vinay Associates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insurance Made Simple & Reliable
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="text-2xl font-semibold text-primary">
                5000+ lives covered.
              </p>
              <p>
                Founded over a decade ago, Vinay Associates began with a simple mission: to make insurance accessible, understandable, and reliable for everyone. We saw too many people struggling with complex insurance jargon, hidden clauses, and inadequate coverage.
              </p>
              <p>
                What started as a small advisory firm has grown into a trusted name in the insurance industry, serving thousands of satisfied clients across India. Our success is built on a foundation of honest advice, personalized service, and unwavering commitment to our clients' financial security.
              </p>
              <p>
                Today, we partner with over 20 leading insurance providers, offering comprehensive solutions for life, health, motor, travel, home, and business insurance. But our core values remain unchanged – integrity, transparency, and client-first approach.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-to-br from-primary/5 to-success/5 border-2">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                "To provide honest, transparent insurance advice and build long-term relationships with our clients by protecting what matters most to them."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Message */}
        <Card className="mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img
                  src="/assets/generated/founder-photo.dim_300x400.jpg"
                  alt="Founder"
                  className="rounded-lg shadow-lg w-full max-w-xs mx-auto"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold">Vinay Erigala</h3>
                  <p className="text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-3xl font-bold">A Personal Message</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    "When I started Vinay Associates, I had witnessed firsthand how insurance could either be a lifesaver or a source of frustration. I saw families struggle with claim rejections, people buying wrong policies, and individuals paying for coverage they didn't need."
                  </p>
                  <p>
                    "I founded this company with a promise – to always put the client first. To explain policies in simple language, to recommend only what's truly needed, and to stand by our clients when they need us most, especially during claims."
                  </p>
                  <p>
                    "Over the years, we've helped thousands of families secure their future, supported businesses in protecting their assets, and assisted countless individuals in navigating the complex world of insurance. Every satisfied client reinforces our commitment to honest advice and long-term relationships."
                  </p>
                  <p>
                    "Thank you for considering Vinay Associates. We look forward to being your trusted insurance partner."
                  </p>
                </div>
                <div className="pt-4">
                  <p className="font-semibold">Vinay Erigala</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO, Vinay Associates</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <img
            src="/assets/generated/happy-family-insurance.dim_600x400.jpg"
            alt="Happy Family"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <img
            src="/assets/generated/advisor-client-handshake.dim_600x400.jpg"
            alt="Advisor Client Handshake"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Vinay Associates Difference?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied clients who trust us with their insurance needs. Let's build a long-term relationship based on trust and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate({ to: '/contact' })}>
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate({ to: '/services' })}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
