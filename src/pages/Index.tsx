import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Palette, Rocket, Shield, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const features = [
    {
      icon: <Code className="w-5 h-5 text-primary" />,
      title: "Custom Development",
      description: "Tailored architectures built to perfectly match your specific operational needs and goals.",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      icon: <Palette className="w-5 h-5 text-foreground/80 dark:text-muted-foreground" />,
      title: "Precision Design",
      description: "Interfaces meticulously crafted for engagement and brand elevation.",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      icon: <Zap className="w-5 h-5 text-foreground/80 dark:text-muted-foreground" />,
      title: "Optimized Performance",
      description: "Engineered for speed, ensuring seamless user experiences and lower bounce rates.",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Enterprise Security",
      description: "Robust data protection measures and secure architectures out of the box.",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      icon: <Rocket className="w-5 h-5 text-foreground/80 dark:text-muted-foreground" />,
      title: "Scalable Infrastructure",
      description: "Built to gracefully handle growth from inception to enterprise scale.",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-foreground/80 dark:text-muted-foreground" />,
      title: "Search Optimized",
      description: "Foundational SEO practices integrated from the first line of code.",
      className: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden pt-10">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-10 md:pt-48 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Gradient Backgrounds */}
        <div className="absolute top-0 left-1/4 w-full md:w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -top-20 right-1/4 w-full md:w-[40rem] h-[40rem] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

        {/* Minimalist Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wide border border-border">
              Digital Excellence & Innovation
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 md:mb-8 leading-[1.1]">
              Crafting digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-primary">perfection.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              We engineer high-performance websites and digital products that 
              position your brand at the forefront of the industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-medium shadow-md hover:shadow-lg transition-all"
                onClick={() => setContactModalOpen(true)}
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-medium border-border/80 hover:bg-secondary/60 transition-all font-sans"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Elevate Standards Background Designs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="text-center md:text-left mb-12 max-w-2xl mx-auto md:mx-0">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Us?</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Elevate your standards.</h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We focus on architectural precision and aesthetic refinement, delivering platforms that endure over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={cn(
                  "group relative overflow-hidden bg-card box-border shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/60 hover:border-primary/30",
                  feature.className
                )}
              >
                <CardHeader className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary border border-border/50 group-hover:scale-105 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl mb-3 font-semibold text-foreground tracking-tight">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 border-t border-border/30">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto relative cursor-default">
          <div className="max-w-3xl mx-auto text-center rounded-[2rem] p-8 md:p-16 border border-border shadow-sm bg-gradient-to-b from-card/80 to-background/90 backdrop-blur-3xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Ready to redefine your digital presence?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 mx-auto leading-relaxed">
              Connect with us today and let's craft exceptional solutions together.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-10 h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all"
              onClick={() => setContactModalOpen(true)}
            >
              Get Started Now
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