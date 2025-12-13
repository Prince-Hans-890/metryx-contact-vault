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
  Cloud,
  BarChart,
  Search,
  Database,
  Lock,
  Zap,
  ArrowRight,
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
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for businesses of all sizes.",
      features: ["AWS & Azure", "DevOps Setup", "CI/CD Pipelines", "Cloud Migration"],
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and reach your target audience.",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"],
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Database Design",
      description: "Efficient, secure database architectures optimized for performance and scalability.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup Solutions"],
    },
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Security Services",
      description: "Comprehensive security audits and implementation of best practices to protect your assets.",
      features: ["Security Audits", "SSL Certificates", "Data Encryption", "Compliance"],
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs that power your applications and enable seamless integrations.",
      features: ["REST & GraphQL", "Documentation", "Rate Limiting", "Versioning"],
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
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">🚀 What We Offer</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-foreground mb-8">Our Services</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
              we've got you covered.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="mb-6 p-3 rounded-2xl bg-primary/10 w-fit group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
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

      {/* Process Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary">⚡ How We Work</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating beautiful, functional designs" },
              { step: "03", title: "Development", desc: "Building your solution with precision" },
              { step: "04", title: "Launch", desc: "Deploying and monitoring your project" },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300">{item.step}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center bg-gradient-card backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-border/50">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Get in touch for a free consultation.
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
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="services-page" />
    </div>
  );
};

export default Services;
