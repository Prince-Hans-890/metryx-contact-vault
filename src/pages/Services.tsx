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
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-blue-400">⚡ How We Work</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 -translate-y-1/2 blur-sm pointer-events-none" />

            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UPDATED CTA SECTION (Single Broad Button) --- */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Glass Card Container */}
            <div className="relative group rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-2xl shadow-2xl">
              
              {/* Hover Glow Effect Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-[3rem] transition-colors duration-700 pointer-events-none" />
              
              {/* Content Wrapper */}
              <div className="relative p-12 md:p-24 text-center">
                
                {/* Decorative Top Light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl pointer-events-none" />

                <h2 className="relative z-10 text-5xl sm:text-7xl font-extrabold mb-8 leading-tight text-white tracking-tight">
                  Ready to start your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                    Digital Transformation?
                  </span>
                </h2>
                
                <p className="relative z-10 text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Don't let your ideas stay ideas. Schedule a free consultation with our architects and let's build the future.
                </p>
                
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <Button
                    size="lg"
                    className="group/btn relative overflow-hidden bg-white text-slate-950 hover:bg-slate-200 w-full sm:w-auto px-16 py-9 text-xl rounded-full shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_-20px_rgba(255,255,255,0.5)]"
                    onClick={() => setContactModalOpen(true)}
                  >
                    <span className="relative z-10 flex items-center justify-center font-bold tracking-wide">
                      Book Free Consultation
                      <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                    {/* Internal Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-slate-300/30 to-transparent transition-transform duration-700 ease-in-out" />
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