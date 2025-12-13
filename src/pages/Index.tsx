import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Rocket, Shield, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Innovative Web Solutions";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to match your unique business needs and goals.",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Modern Design",
      description: "Beautiful, responsive interfaces that engage users and elevate your brand.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized performance ensuring quick load times and seamless user experiences.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures protecting your data and users.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business from startup to enterprise.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "SEO Optimized",
      description: "Built-in best practices to help your website rank higher in search results.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg">
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">🚀 Leading Web Development Agency</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 leading-tight">
              Transform Your Vision Into
            </h1>
            <div className="h-24 flex items-center justify-center mb-10">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We craft stunning, high-performance websites that drive results. From concept to launch, 
              we're your partner in digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                size="lg"
                variant="gradient"
                onClick={() => setContactModalOpen(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="glass"
                asChild
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary">✨ Why Choose Us</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">Why Choose Metryx?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with creative excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and turn your ideas into reality. Get a free consultation today.
            </p>
            <Button
              size="lg"
              variant="gradient"
              onClick={() => setContactModalOpen(true)}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <Footer />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source="homepage-hero"
      />
    </div>
  );
};

export default Index;
