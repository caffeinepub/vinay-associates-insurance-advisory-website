import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useNavigate } from '@tanstack/react-router';
import { Shield, FileText, Phone, CheckCircle2, Clock, Headphones, Mail, MessageCircle } from 'lucide-react';

export default function ClaimAssistancePage() {
  const navigate = useNavigate();

  const claimSteps = [
    {
      step: 1,
      title: 'Notify Us Immediately',
      description: 'Contact us as soon as an incident occurs. Early notification helps expedite the claim process.',
      icon: Phone,
    },
    {
      step: 2,
      title: 'Document Everything',
      description: 'Collect all relevant documents - medical bills, police reports, photos, receipts, and policy details.',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Submit Claim Form',
      description: 'Fill out the claim form accurately with our guidance. We help ensure all information is complete.',
      icon: CheckCircle2,
    },
    {
      step: 4,
      title: 'Follow Up & Track',
      description: 'We track your claim status with the insurer and keep you updated throughout the process.',
      icon: Clock,
    },
  ];

  const howWeHelp = [
    {
      title: 'Immediate Assistance',
      description: '24/7 helpline for claim emergencies. We guide you through the first steps right away.',
      icon: Headphones,
    },
    {
      title: 'Documentation Support',
      description: 'Help with collecting, organizing, and submitting all required documents correctly.',
      icon: FileText,
    },
    {
      title: 'Liaison with Insurers',
      description: 'We communicate with insurance companies on your behalf to expedite claim processing.',
      icon: MessageCircle,
    },
    {
      title: 'Claim Settlement',
      description: 'Follow up until claim is settled. We ensure you receive what you\'re entitled to.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            We Stand With You During Claims
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Filing an insurance claim can be stressful. Our dedicated team ensures a smooth, hassle-free claim settlement process.
          </p>
        </div>

        {/* Emergency Contact Alert */}
        <Alert className="mb-12 border-destructive bg-destructive/5">
          <Phone className="h-4 w-4 text-destructive" />
          <AlertTitle className="text-destructive">24/7 Claim Emergency Helpline</AlertTitle>
          <AlertDescription>
            <div className="mt-2 space-y-2">
              <p>For immediate claim assistance, contact us anytime:</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <Button variant="destructive" size="sm" onClick={() => window.open('tel:+918341924348', '_self')}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call: +91 8341924348
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('https://wa.me/918341924348', '_blank')}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        {/* Claim Process Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step Claim Process</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {claimSteps.map((step) => (
              <Card key={step.step} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5">
                  {step.step}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Step {step.step}</div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Help */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How Vinay Associates Helps You</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {howWeHelp.map((item, index) => (
              <Card key={index} className="border-2 hover:border-success/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                      <item.icon className="h-6 w-6 text-success" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Our Claim Support */}
        <Card className="mb-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">Why Our Claim Support Makes a Difference</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Guidance</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team knows exactly what insurers need and how to present your claim effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Faster Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete documentation and proper follow-up significantly reduce claim settlement time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Higher Success Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    Properly filed claims with complete documentation have much higher approval rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Peace of Mind</h4>
                  <p className="text-sm text-muted-foreground">
                    Focus on recovery while we handle the paperwork and follow-ups with insurers.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Need Help With a Claim?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Don't navigate the claim process alone. Our dedicated support team is here to assist you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => window.open('tel:+918341924348', '_self')}>
              <Phone className="mr-2 h-5 w-5" />
              Call Claim Helpline
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate({ to: '/contact' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
