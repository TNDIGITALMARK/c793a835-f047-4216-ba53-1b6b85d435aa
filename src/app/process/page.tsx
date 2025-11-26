import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const dynamic = 'force-dynamic';

const processPhases = [
  {
    phase: 'Phase 1',
    title: 'Consultation & Planning',
    duration: '2 weeks',
    image: '/generated/hero-modern-white-kitchen.png',
    steps: [
      'Initial consultation to understand your vision and requirements',
      'Comprehensive space measurement and assessment',
      'Discussion of style preferences, materials, and budget',
      'Review of timeline expectations and project scope',
      'Preliminary design concepts and inspiration boards'
    ],
    deliverable: 'Project proposal with estimated timeline and budget'
  },
  {
    phase: 'Phase 2',
    title: 'Design Development',
    duration: '3 weeks',
    image: '/generated/hero-traditional-cherry.png',
    steps: [
      'Detailed 3D CAD renderings of your custom design',
      'Material selection: wood types, finishes, hardware',
      'Cabinet configuration and storage optimization',
      'Color palette and style refinement',
      'Technical drawings and specifications',
      'Final design approval and contract signing'
    ],
    deliverable: 'Complete design package with 3D renderings and material samples'
  },
  {
    phase: 'Phase 3',
    title: 'In-House Manufacturing',
    duration: '4 weeks',
    image: '/generated/process-manufacturing.png',
    steps: [
      'Precision cutting of premium hardwoods and materials',
      'Expert joinery using traditional and modern techniques',
      'Custom finishing: staining, painting, or natural sealants',
      'Installation of soft-close hardware and mechanisms',
      'Quality control inspection at every stage',
      'Careful packaging and transport preparation'
    ],
    deliverable: 'Completed custom cabinetry ready for installation'
  },
  {
    phase: 'Phase 4',
    title: 'Professional Installation',
    duration: '1 week',
    image: '/generated/process-installation.png',
    steps: [
      'Site preparation and protection of existing surfaces',
      'Precise cabinet placement and leveling',
      'Secure mounting to walls and structural elements',
      'Hardware installation and door/drawer alignment',
      'Countertop installation coordination (if applicable)',
      'Final adjustments and quality inspection',
      'Complete cleanup and walkthrough'
    ],
    deliverable: 'Fully installed, functional custom cabinetry with warranty'
  }
];

const qualityCommitments = [
  {
    title: 'Premium Materials',
    description: 'We source only the finest hardwoods, plywood, and finishing materials. Every component is selected for durability, beauty, and sustainability.'
  },
  {
    title: 'Master Craftsmanship',
    description: 'Our team of experienced craftsmen combines traditional woodworking techniques with modern precision tools for impeccable results.'
  },
  {
    title: 'Quality Hardware',
    description: 'Soft-close hinges, full-extension drawer slides, and premium handles ensure smooth operation for years to come.'
  },
  {
    title: 'Finishing Excellence',
    description: 'Multi-step finishing processes create beautiful, durable surfaces that resist wear and maintain their appearance over time.'
  }
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/process-manufacturing.png"
            alt="Craftsman at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our Design & Build Process
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A transparent, collaborative journey from consultation to installation.
            Every step handled with meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Process: 10 Weeks</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From initial consultation to final installation, we guide you through every phase with clear communication and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {processPhases.map((phase, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-2">{phase.phase}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <div className="text-2xl font-bold text-primary">{phase.duration}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Phases */}
      {processPhases.map((phase, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? 'py-20 bg-muted/30' : 'py-20 bg-background'}
        >
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {phase.phase} • {phase.duration}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{phase.title}</h2>

                <ul className="space-y-4 mb-8">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                  <div className="text-sm font-semibold text-primary mb-1">Phase Deliverable</div>
                  <div className="text-muted-foreground">{phase.deliverable}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Quality Commitments */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Commitment to Quality
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Every project reflects our dedication to excellence, from material selection to final installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityCommitments.map((commitment, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{commitment.title}</h3>
                  <p className="text-white/80 leading-relaxed">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See the Transformation
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our process creates stunning results. View our complete portfolio of before-and-after projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/generated/project-before-1.png"
                  alt="Kitchen before renovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-semibold">
                  Before
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/generated/hero-modern-white-kitchen.png"
                  alt="Kitchen after renovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                  After
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                View Complete Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              Let's discuss your vision and create a custom plan tailored to your space, style, and budget.
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+19052269121">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6">
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
