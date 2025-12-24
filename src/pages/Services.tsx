import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart,
  Zap,
  ArrowRight,
  Handshake,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const services = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and TypeScript.",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatible", "Scalable Architecture"],
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payment processing, inventory management, and analytics.",
      features: ["Payment Integration", "Product Management", "Order Tracking", "Customer Accounts"],
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Progressive Web Apps", "Offline Functionality", "Push Notifications"],
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and reach your target audience.",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"],
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs that power your applications and enable seamless integrations.",
      features: ["REST & GraphQL", "Documentation", "Rate Limiting", "Versioning"],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Initial meeting to discuss your vision, challenges, and business goals.",
      icon: <Handshake className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "Discovery",
      description: "In-depth research, requirements gathering, and strategic roadmap planning.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Design",
      description: "Creating intuitive user experiences and stunning visual prototypes.",
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      number: "04",
      title: "Development",
      description: "Building the solution with clean, scalable, and efficient code.",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      number: "05",
      title: "Launch",
      description: "Thorough testing, final deployment, and celebrating your go-live moment.",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      number: "06",
      title: "Optimization",
      description: "Continuous monitoring, data-driven improvements, and scaling strategies.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section - Reduced padding from pb-28 to pb-12 */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-4 md:mb-6 px-6 py-2 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg">
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">🚀 What We Offer</span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-extrabold text-foreground mb-4 md:mb-6">Our Services</h1>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Reduced padding from py-28 to py-12 */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card border border-border/50 hover:border-primary/30 animate-fade-in"
              >
                <CardHeader className="relative">
                  <div className="mb-4 md:mb-6 p-3 rounded-2xl bg-primary/10 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2 md:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs md:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Reduced padding to py-12 md:py-16 */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block mb-3 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary">⚡ How We Work</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight text-foreground">
              Our <span className="text-transparent bg-clip-text bg-gradient-primary">Process</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-card backdrop-blur-xl border border-border/50 rounded-3xl p-5 md:p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="p-2 md:p-3 rounded-2xl bg-primary/10 text-primary transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-3xl md:text-5xl font-extrabold text-foreground/5">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reduced padding to py-8 md:py-16 and p-6 md:p-16 */}
      <section className="relative py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border bg-secondary/30 backdrop-blur-2xl shadow-2xl">
              <div className="relative p-6 md:p-16 text-center">
                <h2 className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight text-foreground tracking-tight">
                  Ready to start your <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-primary">
                    Digital Transformation?
                  </span>
                </h2>
                <p className="relative z-10 text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Don't let your ideas stay ideas. Schedule a free consultation with our architects and let's build the future.
                </p>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <Button
                    size="lg"
                    className="group/btn relative overflow-hidden bg-primary text-primary-foreground hover:opacity-90 w-full sm:w-auto px-6 md:px-12 py-5 md:py-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setContactModalOpen(true)}
                  >
                    <span className="relative z-10 flex items-center justify-center font-bold text-sm md:text-lg tracking-tight">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="services-page" />
    </div>
  );
};

export default Services;