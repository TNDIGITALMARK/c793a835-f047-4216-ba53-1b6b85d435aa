import Image from 'next/image';
import { Phone, Mail, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';

export const dynamic = 'force-dynamic';

const projects = [
  {
    title: 'Modern White Shaker Kitchen',
    category: 'Kitchen',
    image: '/generated/hero-modern-white-kitchen.png',
    description: 'Complete kitchen transformation featuring waterfall island, quartz countertops, and premium gold hardware',
    details: 'Soft-close cabinets, custom lighting, subway tile backsplash',
    testimonial: 'Exceeded our expectations! The attention to detail is outstanding.',
    client: 'Sarah M., Toronto'
  },
  {
    title: 'Traditional Cherry Cabinetry',
    category: 'Kitchen',
    image: '/generated/hero-traditional-cherry.png',
    description: 'Elegant classic kitchen with rich cherry wood cabinets and marble countertops',
    details: 'Crown molding, under-cabinet lighting, custom pantry organization',
    testimonial: 'The craftsmanship is exceptional. Our kitchen is now the heart of our home.',
    client: 'Michael & Jennifer K., Oakville'
  },
  {
    title: 'Contemporary Living Room Unit',
    category: 'Living Room',
    image: '/generated/hero-living-room-unit.png',
    description: 'Built-in entertainment center with floating shelves and integrated LED lighting',
    details: 'Custom storage, cable management, ambient lighting',
    testimonial: 'Beautiful design and perfect execution. It fits our space like it was meant to be there.',
    client: 'David L., Mississauga'
  }
];

const categories = ['All Projects', 'Kitchen', 'Living Room', 'Storage Solutions'];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-modern-white-kitchen.png"
            alt="Project gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Project Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of custom cabinetry transformations across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className="cursor-pointer px-6 py-2 text-base"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-auto">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-sm uppercase text-primary mb-2">Project Details</h3>
                      <p className="text-muted-foreground">{project.details}</p>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground italic mb-2">"{project.testimonial}"</p>
                      <p className="text-sm text-muted-foreground">— {project.client}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Transformation
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how we transform outdated spaces into beautiful, functional areas that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-2 border-border">
              <div className="relative h-96">
                <Image
                  src="/generated/project-before-1.png"
                  alt="Before renovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-6 py-3 rounded-full font-bold text-lg">
                  Before
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Outdated Kitchen</h3>
                <p className="text-muted-foreground">
                  Dated cabinets, limited storage, poor lighting, and inefficient layout.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative h-96">
                <Image
                  src="/generated/hero-modern-white-kitchen.png"
                  alt="After renovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg">
                  After
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Luxury Kitchen</h3>
                <p className="text-muted-foreground">
                  Custom white shaker cabinets, waterfall island, quartz countertops, and premium finishes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your custom cabinetry project? Contact us for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a
                        href="tel:+19052269121"
                        className="text-lg text-primary hover:underline"
                      >
                        +1 (905) 226-9121
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday: 8am - 6pm<br />
                        Saturday: 10am - 4pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:info@purebrookkitchens.com"
                        className="text-lg text-primary hover:underline"
                      >
                        info@purebrookkitchens.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Service Area</div>
                      <p className="text-muted-foreground">
                        Greater Toronto Area<br />
                        Mississauga, Oakville, Burlington,<br />
                        Toronto, and surrounding regions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Why Choose Purebrook?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Free in-home consultation and measurements
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Custom 3D design renderings included
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      In-house manufacturing and installation
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Premium materials and lifetime craftsmanship warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
