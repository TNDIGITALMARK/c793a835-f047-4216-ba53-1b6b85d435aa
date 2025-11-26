import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const dynamic = 'force-dynamic';

const featuredProjects = [
  {
    title: 'Modern White Shaker Kitchen',
    image: '/generated/hero-modern-white-kitchen.png',
    description: 'Luxury waterfall island with quartz countertops and gold accents',
    category: 'Kitchen'
  },
  {
    title: 'Traditional Cherry Cabinetry',
    image: '/generated/hero-traditional-cherry.png',
    description: 'Elegant classic design with marble countertops and ornate details',
    category: 'Kitchen'
  },
  {
    title: 'Contemporary Living Room Unit',
    image: '/generated/hero-living-room-unit.png',
    description: 'Built-in entertainment center with custom storage solutions',
    category: 'Living Room'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    duration: '2 weeks',
    description: 'Initial meeting to understand your vision, measure space, and discuss design preferences'
  },
  {
    number: '02',
    title: 'Design Development',
    duration: '3 weeks',
    description: 'Custom 3D designs, material selection, and detailed project planning'
  },
  {
    number: '03',
    title: 'Manufacturing',
    duration: '4 weeks',
    description: 'In-house craftsmanship using premium materials and precision joinery'
  },
  {
    number: '04',
    title: 'Installation',
    duration: '1 week',
    description: 'Professional installation by skilled craftsmen with attention to every detail'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[140vh] flex items-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-modern-white-kitchen.png"
            alt="Luxury kitchen transformation"
            fill
            className="object-cover scale-105 animate-in fade-in duration-1000"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-white pt-32 md:pt-40 lg:pt-48">
          <div className="max-w-4xl animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white text-shadow-lg leading-tight">
              Crafting Your Vision Into Reality
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/95 leading-relaxed text-shadow-md max-w-3xl">
              Premium custom cabinetry for kitchens, living rooms, and personalized home storage solutions.
              <span className="block mt-2 font-semibold text-primary">Exceptional quality. Meticulous attention to detail.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-4 duration-700 delay-300 pb-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 font-semibold text-lg px-10 py-7 backdrop-blur-sm">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Purebrook Kitchens</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine traditional craftsmanship with modern design to create spaces that reflect your unique style and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Custom Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every project is tailored to your specific vision, space, and functional requirements. No cookie-cutter solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Premium Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-quality hardwoods, soft-close hardware, and durable finishes ensure your cabinetry lasts for generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Complete Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From consultation to installation, we handle every step in-house with meticulous attention to detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our latest custom cabinetry transformations showcasing elegant design and exceptional craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-all group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pb-4">
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="font-semibold">
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A transparent, collaborative journey from initial consultation to final installation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border -z-10" />
                )}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-4 border-background shadow-lg">
                    <span className="text-4xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-primary font-medium mb-3">{step.duration}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pb-4">
            <Link href="/process">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Schedule a free consultation to discuss your vision. Our team will guide you through every step
              of creating your dream kitchen, living room, or custom storage solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pb-8">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+19052269121">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 font-semibold text-lg px-10 py-7 backdrop-blur-sm">
                  Call: (905) 226-9121
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
