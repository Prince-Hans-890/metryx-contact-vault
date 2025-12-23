import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Shoe Store",
      description: "A high-performance digital storefront optimized for the footwear industry, focusing on conversion-driven UX.",
      images: [
        "/s4.png", 
        "/s2.jpeg",
        "/s3.jpeg",
        "/s1.jpeg"
      ],
      tags: ["E-commerce", "React", "Node.js"],
      bulletPoints: [
        "Advanced filtering by size and color",
        "Sub-second page loads via edge caching",
        "Secure one-click checkout integration",
        "Real-time inventory synchronization"
      ],
    },
    {
      title: "Real Estate Website",
      description: "A luxury property ecosystem featuring real-time MLS integration and immersive visual tours.",
      images: [
        "/rs1.jpg", 
        "/rs2.jpg",
        "/rs7.jpeg",
        "/rs6.jpeg"
      ],
      tags: ["Real Estate", "TypeScript", "Maps API"],
      bulletPoints: [
        "Interactive 4K virtual property tours",
        "Live MLS data synchronization",
        "Advanced mortgage calculators",
        "Secure client document portal"
      ],
    },
    {
      title: "Restaurant Website",
      description: "A full-stack culinary platform managing seasonal digital menus and automated kitchen lead times.",
      images: [
        "/rest.png",
        "/rest2.png",
        "/rest 3.png",
        "/rest4.png"
      ],
      tags: ["Restaurant", "React", "Firebase"],
      bulletPoints: [
        "Live table reservation with POS sync",
        "Custom CMS for menu updates",
        "Integrated delivery logistics",
        "Automated SMS notifications"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      <section className="relative pt-40 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-foreground">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Functional and high-performance digital solutions.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
              >
                {/* Carousel Part (50%) */}
                <div className="lg:w-1/2 w-full relative group">
                  <Carousel
                    opts={{ loop: true }}
                    plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {project.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <Card className="overflow-hidden border-none shadow-xl rounded-2xl bg-black/5 dark:bg-white/5">
                            {/* Container set to aspect-video (16:9). 
                               Flexbox ensures the image stays centered if it doesn't fill the width.
                            */}
                            <div className="aspect-video relative w-full flex items-center justify-center overflow-hidden">
                              <img 
                                src={img} 
                                alt={project.title} 
                                /* object-contain: Shows the WHOLE image without cropping.
                                   max-w-full & max-h-full: Prevents the image from overflowing the box.
                                */
                                className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 hover:scale-105" 
                              />
                            </div>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {/* Navigation Arrows */}
                    <CarouselPrevious className="-left-14 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CarouselNext className="-right-14 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Carousel>
                </div>

                {/* Content Part (50%) */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-[9px] uppercase tracking-widest px-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground leading-tight">{project.title}</h2>
                    <p className="text-md text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {project.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="text-primary w-4 h-4 mr-3 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="projects-page" />
    </div>
  );
};

export default Projects;