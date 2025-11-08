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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-gradient-overlay rounded-2xl p-12 shadow-lg border-2 border-primary/20">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to take your business to the next level? Get in touch for a free consultation.
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
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="services-page" />
    </div>
  );
};

export default Services;
