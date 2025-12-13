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
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg">
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">💼 Our Work</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-foreground mb-8">Our Projects</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects that have helped businesses achieve their goals.
            </p>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Projects Grid */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-16 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <Card className="overflow-hidden group bg-gradient-card shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-5xl font-extrabold text-foreground mb-6 leading-tight">{project.title}</h2>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} className="px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                    <h3 className="text-2xl font-bold text-foreground mb-5 flex items-center">
                      <div className="w-1 h-8 bg-gradient-primary rounded-full mr-3" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                          <span className="text-muted-foreground text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-5 flex items-center">
                      <div className="w-1 h-8 bg-gradient-primary rounded-full mr-3" />
                      Results
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="p-6 text-center bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-2">
                          {project.metrics.conversion}
                        </div>
                        <div className="text-xs font-semibold text-muted-foreground">Conversion</div>
                      </Card>
                      <Card className="p-6 text-center bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-2">
                          {project.metrics.performance}
                        </div>
                        <div className="text-xs font-semibold text-muted-foreground">Performance</div>
                      </Card>
                      <Card className="p-6 text-center bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-2">
                          {project.metrics.users}
                        </div>
                        <div className="text-xs font-semibold text-muted-foreground">Active Users</div>
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
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-gradient-card backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-border/50">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's create something amazing together. Get in touch to discuss your vision.
            </p>
            <Button
              size="lg"
              variant="gradient"
              onClick={() => setContactModalOpen(true)}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="projects-page" />
    </div>
  );
};

export default Projects;
