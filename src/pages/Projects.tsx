import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Shoe Store",
      description: "A modern, high-performance online shoe store with advanced filtering, secure checkout, and real-time inventory management. Features include wishlist, size guides, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop",
      tags: ["E-commerce", "React", "Node.js", "Stripe"],
      features: [
        "Product catalog with 1000+ items",
        "Advanced search and filtering",
        "Secure payment processing",
        "Real-time inventory sync",
        "Mobile-responsive design",
      ],
      metrics: {
        conversion: "+45%",
        performance: "98/100",
        users: "10K+",
      },
    },
    {
      title: "Real Estate Website",
      description: "Comprehensive real estate platform with property listings, virtual tours, and agent management. Integrated with MLS data for up-to-date property information and advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tags: ["Real Estate", "TypeScript", "Maps API", "CMS"],
      features: [
        "Interactive map search",
        "Virtual property tours",
        "Mortgage calculator",
        "Agent portal",
        "Lead management system",
      ],
      metrics: {
        conversion: "+60%",
        performance: "95/100",
        users: "25K+",
      },
    },
    {
      title: "Restaurant Website",
      description: "Elegant restaurant website with online ordering, table reservations, and menu management. Features include nutrition information, allergen filters, and integration with delivery services.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      tags: ["Restaurant", "Online Ordering", "React", "Firebase"],
      features: [
        "Online ordering system",
        "Table reservation",
        "Digital menu with photos",
        "Delivery integration",
        "Customer loyalty program",
      ],
      metrics: {
        conversion: "+70%",
        performance: "96/100",
        users: "5K+",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects that have helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Results</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.metrics.conversion}
                        </div>
                        <div className="text-xs text-muted-foreground">Conversion</div>
                      </Card>
                      <Card className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.metrics.performance}
                        </div>
                        <div className="text-xs text-muted-foreground">Performance</div>
                      </Card>
                      <Card className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.metrics.users}
                        </div>
                        <div className="text-xs text-muted-foreground">Active Users</div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-overlay">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-12 shadow-lg border-2 border-primary/20">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together. Get in touch to discuss your vision.
            </p>
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="projects-page" />
    </div>
  );
};

export default Projects;
