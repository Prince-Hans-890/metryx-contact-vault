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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Transform Your Vision Into
            </h1>
            <div className="h-20 flex items-center justify-center mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We craft stunning, high-performance websites that drive results. From concept to launch, 
              we're your partner in digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-2"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Metryx?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with creative excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-overlay">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-12 shadow-lg border-2 border-primary/20">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and turn your ideas into reality. Get a free consultation today.
            </p>
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
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
