import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { BookOpen, AlertCircle, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

export default function CompareEducatePage() {
  const navigate = useNavigate();

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Compare & Educate
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions with our comprehensive insurance guides and comparisons
          </p>
        </div>

        <div className="space-y-8">
          {/* Term vs Endowment */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-2xl">Term vs Endowment – Which is Right for You?</CardTitle>
              </div>
              <CardDescription>
                Understanding the key differences between term and endowment life insurance plans
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Term Insurance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Term Insurance</h3>
                  <p className="text-muted-foreground">
                    Pure protection plan that provides high coverage at affordable premiums. No maturity benefit if you survive the policy term.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">High coverage at low premiums</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Best for pure protection needs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ideal for young families and breadwinners</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-sm">No maturity or survival benefit</span>
                    </div>
                  </div>
                </div>

                {/* Endowment Insurance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-chart-2">Endowment Insurance</h3>
                  <p className="text-muted-foreground">
                    Combines insurance protection with savings. Provides maturity benefit if you survive the policy term.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Protection plus savings component</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Maturity benefit on survival</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Good for disciplined savings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Higher premiums for same coverage</span>
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Expert Recommendation</AlertTitle>
                <AlertDescription>
                  For maximum protection at minimal cost, term insurance is ideal. If you want both protection and savings, consider endowment plans. Our advisors can help you choose based on your financial goals.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Why Health Insurance is Essential */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <AlertCircle className="h-5 w-5 text-success" />
                </div>
                <CardTitle className="text-2xl">Why Health Insurance is Essential in India</CardTitle>
              </div>
              <CardDescription>
                Understanding the critical importance of health insurance in today's healthcare landscape
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Healthcare costs in India have been rising at an alarming rate of 10-15% annually. A single hospitalization can wipe out years of savings. Here's why health insurance is no longer optional:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Rising Medical Costs</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Average ICU cost: ₹15,000-₹50,000 per day</li>
                    <li>• Cardiac surgery: ₹2-5 lakhs</li>
                    <li>• Cancer treatment: ₹5-20 lakhs</li>
                    <li>• Organ transplant: ₹10-30 lakhs</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cashless treatment at network hospitals</li>
                    <li>• Tax savings under Section 80D</li>
                    <li>• Coverage for pre and post hospitalization</li>
                    <li>• Protection against lifestyle diseases</li>
                  </ul>
                </div>
              </div>

              <Alert className="border-success">
                <AlertCircle className="h-4 w-4 text-success" />
                <AlertTitle>Did You Know?</AlertTitle>
                <AlertDescription>
                  60% of Indians don't have health insurance. Medical emergencies are the leading cause of debt in Indian households. Don't wait for a health crisis – get covered today.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Common Insurance Mistakes */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Common Insurance Mistakes People Make</CardTitle>
              </div>
              <CardDescription>
                Avoid these pitfalls to ensure you get the most out of your insurance coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    1. Buying Insurance Only for Tax Savings
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Many people buy insurance just to save taxes under Section 80C or 80D. While tax benefits are important, the primary purpose of insurance is protection. Choose coverage based on your actual needs, not just tax deductions. Inadequate coverage can leave you financially vulnerable during emergencies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    2. Not Disclosing Pre-existing Conditions
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Hiding medical conditions or lifestyle habits (smoking, drinking) can lead to claim rejection. Always provide accurate information during policy purchase. Most insurers cover pre-existing conditions after a waiting period. Non-disclosure is considered fraud and can void your entire policy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    3. Choosing the Cheapest Policy Without Comparing
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The cheapest policy isn't always the best. Compare coverage limits, exclusions, claim settlement ratios, and network hospitals. A slightly higher premium might offer significantly better coverage and service. Focus on value, not just price. Our advisors can help you compare policies effectively.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    4. Not Reading Policy Terms and Conditions
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Many people don't read the fine print and are surprised during claims. Understand waiting periods, exclusions, sub-limits, and claim procedures. Know what's covered and what's not. Ask questions before buying. Our team explains every policy detail in simple language.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    5. Delaying Insurance Purchase
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    "I'm young and healthy, I'll buy insurance later" is a common mistake. Premiums increase with age, and health issues can make you ineligible. Start early to lock in lower premiums and ensure coverage before health problems arise. The best time to buy insurance is when you don't need it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    6. Underinsuring or Overinsuring
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Buying too little coverage leaves you exposed to financial risk. Buying too much wastes money on unnecessary premiums. Calculate your actual coverage needs based on income, dependents, liabilities, and lifestyle. Our advisors help you find the right balance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    7. Not Reviewing Policies Regularly
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Life changes – marriage, children, new home, career growth. Your insurance needs change too. Review your policies annually to ensure adequate coverage. Update nominee details, increase coverage if needed, and remove redundant policies. We offer free annual policy reviews.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our insurance experts are here to help you understand your options and make the right choice for your needs.
            </p>
            <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
