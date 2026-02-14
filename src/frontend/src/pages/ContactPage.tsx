import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSubmitContactForm } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2 } from 'lucide-react';
import CallbackDialog from '@/components/CallbackDialog';
import { officeLocations } from '@/content/officeLocations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const submitContactFormMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitContactFormMutation.mutateAsync(formData);
      toast.success('Thank you for contacting us! We will get back to you soon.');
      setFormData({ fullName: '', phone: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need a quote? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+918341924348" className="text-sm text-muted-foreground hover:text-primary">
                      +91 8341924348
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/918341924348" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-success"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:vinayassociates2024@gmail.com" className="text-sm text-muted-foreground hover:text-chart-2 break-all">
                      vinayassociates2024@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-chart-4" />
                  </div>
                  <div className="space-y-3">
                    {officeLocations.map((location) => (
                      <div key={location.name}>
                        <h4 className="font-semibold mb-1">{location.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {location.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-5/10 flex-shrink-0">
                    <Clock className="h-5 w-5 text-chart-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>Prefer a Callback?</CardTitle>
                <CardDescription>We'll call you at your preferred time</CardDescription>
              </CardHeader>
              <CardContent>
                <CallbackDialog trigger={<Button className="w-full">Request a Callback</Button>} />
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 8341924348"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your insurance needs or any questions you have..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={submitContactFormMutation.isPending}>
                    {submitContactFormMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <Card>
          <CardHeader>
            <CardTitle>Visit Our Offices</CardTitle>
            <CardDescription>Find us on the map - we have three convenient locations in Visakhapatnam</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="main-branch" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="main-branch">Main Branch</TabsTrigger>
                <TabsTrigger value="branch1">Branch 1</TabsTrigger>
                <TabsTrigger value="branch2">Branch 2</TabsTrigger>
              </TabsList>
              <TabsContent value="main-branch">
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      F-3, Block 2, Sai Surya Apartments, Back of Vijaya Ganapathi Temple, Sankarmatam Road, near SBI Bank, Visakhapatnam, 530016
                    </p>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.6!2d83.31!3d17.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzM2LjAiTiA4M8KwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567892"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vinay Associates Main Branch"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="branch1">
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Raj Urban Hub Office, Beside Chennapatnam Filter Coffee, Appughar Indian Oil Bunk, Visakhapatnam 530017
                    </p>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vinay Associates Branch 1 - Appughar"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="branch2">
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      First Floor, Opposite Road of Kakatiya Function Hall, Jayabheri Showroom, Maddilapalem, 530013
                    </p>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.5!2d83.32!3d17.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzEyLjAiTiA4M8KwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567891"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vinay Associates Branch 2 - Maddilapalem"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
