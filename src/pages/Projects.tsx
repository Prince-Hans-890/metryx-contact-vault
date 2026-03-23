import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Shoe Store",
      description: "A high-performance digital storefront optimized for the footwear industry, focusing on conversion-driven UX.",
      images: ["/shoes2.png", "/s1.jpeg", "/s2.jpeg","/shoe.jpeg","/s11.jpeg","/ss.png"],
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
      images: ["/rs1.jpg", "/rs2.jpg", "/rs3.jpg", "/rs5.jpeg","/rs10.jpeg"],
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
      images: ["/rest.png", "/rest2.png", "/rest%203.png", "/rest4.png","/rest5.png"],
      tags: ["Restaurant", "React", "Firebase"],
      bulletPoints: [
        "Live table reservation with POS sync",
        "Custom CMS for menu updates",
        "Integrated delivery logistics",
        "Automated SMS notifications"
      ],
    },
    {
      title: "RISA Bridal Store",
      description: " A luxury digital storefront crafted for RISA, a premier bridal brand — designed to evoke elegance and drive seamless discovery of bridal collections.",
      images: ["/r1.png", "/r2.png", "/r3.png", "/r4.png","/r5.png"],
      tags: ["E-Commerce", "Node.js", "React"],
      bulletPoints: [
        "Elegant bridal collection showcase with lookbook-style gallery",
    "Advanced filtering by style, size, and fabric",
    "Appointment booking system for in-store consultations",
    "Seamless mobile-first experience for on-the-go browsing",
      ],
    },
    {
  title: "Movable Stuff",
  description: "A modern e-commerce platform built for Movable Stuff, a contemporary furniture brand — designed to inspire home styling and simplify the journey from discovery to delivery.",
  images: ["/ms1.png", "/ms2.png", "/ms3.png", "/ms4.png", "/ms5.png"],
  tags: ["E-Commerce", "Node.js", "React"],
  bulletPoints: [
    "Curated furniture showcase with room-scene style photography",
    "Advanced filtering by category, material, and price range",
    "Interactive room visualizer for previewing furniture in your space",
    "Seamless cart and checkout with delivery scheduling built-in",
  ],
},
{
  title: "Malik Jewellers",
  description: "A sophisticated online presence built for Malik Jewellers, a heritage jewellery brand — designed to reflect craftsmanship, trust, and the timeless allure of fine jewellery.",
  images: ["/mj1.png", "/mj2.png", "/mj3.png", "/mj4.png", "/mj5.png"],
  tags: ["E-Commerce", "React", "Node.js"],
  bulletPoints: [
    "Elegant jewellery showcase with high-resolution zoom and detail views",
    "Collection filtering by metal type, gemstone, and occasion",
    "Custom engraving and personalization request system",
    "Secure checkout with certificate of authenticity for each piece",
  ],
},
{
  title: "Lasha Labels",
  description: "A refined online presence built for Lasha Labels, a contemporary women's fashion brand — designed to reflect elegance, style, and the modern woman's wardrobe.",
  images: ["/la1.png", "/ll2.png", "/ll3.png", "/ll4.png","/ll6.png","/ll7.png","/ll8.png","/ll9.png", "/ll5.png"],
  tags: ["E-Commerce", "React", "Node.js"],
  bulletPoints: [
    "Elegant women's fashion showcase with high-resolution zoom and detail views",
    "Collection filtering by category, size, color, and occasion",
    "Custom styling and personalization request system",
    "Secure checkout with authenticity guarantee for every order",
  ],
},
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 px-4 bg-background border-b border-border/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-foreground">
            Our Portfolio
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            Functional and high-performance digital solutions built for the modern web.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="space-y-16 md:space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                // Line 89 - REPLACE WITH THIS
className={cn(
  "flex flex-col gap-8 lg:gap-24 items-center",
  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
)}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group">
                  <Dialog>
                    {/* The Trigger opens the modal */}
                    <DialogTrigger asChild>
                      <div className="cursor-zoom-in relative">
                        <Carousel
                          opts={{ loop: true }}
                          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
                          className="w-full"
                        >
                          <CarouselContent>
                            {project.images.map((img, i) => (
                              <CarouselItem key={i}>
                                <Card className="overflow-hidden border-none shadow-lg rounded-xl md:rounded-2xl bg-muted/30 relative group/img">
                                  <div className="aspect-auto sm:aspect-video relative w-full min-h-[250px] md:min-h-[350px] flex items-center justify-center p-2">
                                    <img 
                                      src={img} 
                                      alt={project.title} 
                                      className="w-full h-full object-contain block"
                                    />
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                      <Maximize2 className="text-white w-8 h-8" />
                                    </div>
                                  </div>
                                </Card>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      </div>
                    </DialogTrigger>

                    {/* MODAL CONTENT: Now contains its own Carousel for navigation */}
                    <DialogContent className="max-w-[95vw] md:max-w-[80vw] p-0 border-none bg-black/90 shadow-none flex items-center justify-center">
                      <Carousel opts={{ loop: true }} className="w-full h-full">
                        <CarouselContent className="items-center">
                          {project.images.map((img, i) => (
                            <CarouselItem key={i} className="flex justify-center items-center">
                              <img 
                                src={img} 
                                alt="Full view" 
                                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {/* Functional Navigation Buttons inside the Modal */}
                        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 text-white border-none" />
                        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 text-white border-none" />
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
                  <div className="space-y-3">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-[10px] uppercase tracking-widest px-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-sm md:text-md text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className="space-y-2 md:space-y-3 pt-2 text-left inline-block lg:block">
                    {project.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-center text-xs md:text-sm text-muted-foreground">
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