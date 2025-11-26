import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Contact Us - Purebrook Kitchens',
  description: 'Get in touch with Purebrook Kitchens for your custom cabinetry project. Schedule a free consultation today.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Let's Bring Your Vision to Life
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Schedule a free consultation to discuss your custom cabinetry project.
              Our team is ready to transform your space with exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+19052269121" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (905) 226-9121
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@purebrookkitchens.ca" className="text-muted-foreground hover:text-primary transition-colors">
                  info@purebrookkitchens.ca
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Greater Toronto Area
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 9AM - 6PM<br />
                  Sat: 10AM - 4PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Initial Consultation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We'll visit your space to take measurements, understand your vision, and discuss your functional requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Design Proposal</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Within one week, we'll present custom 3D designs with material samples and a detailed quote.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Project Timeline</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Once approved, manufacturing takes 4 weeks followed by professional installation in about 1 week.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Do you offer free consultations?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes! Our initial consultation is completely free with no obligation. We'll discuss your project and provide expert guidance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We proudly serve the entire Greater Toronto Area, including surrounding regions. Contact us to confirm service in your area.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From consultation to installation, most projects are completed within 8-10 weeks, including design, manufacturing, and installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
