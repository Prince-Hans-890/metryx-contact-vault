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
      icon: <Code className="w-8 h-8 text-primary dark:text-indigo-500" />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to match your unique business needs and goals.",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary dark:text-purple-500" />,
      title: "Modern Design",
      description: "Beautiful, responsive interfaces that engage users and elevate your brand.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary dark:text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized performance ensuring quick load times and seamless user experiences.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary dark:text-emerald-500" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures protecting your data and users.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary dark:text-orange-500" />,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business from startup to enterprise.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary dark:text-blue-500" />,
      title: "SEO Optimized",
      description: "Built-in best practices to help your website rank higher in search results.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      {/* CHANGED: Reduced pt-40 to pt-28 for mobile to pull content up */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* --- DARK MODE ONLY GLOW EFFECTS (Hidden by default) --- */}
        <div className="hidden dark:block absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="hidden dark:block absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="absolute inset-0 bg-gradient-overlay opacity-50 dark:hidden" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg dark:bg-slate-900/50 dark:border-slate-800">
              <span className="text-xs md:text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent dark:text-slate-300 dark:bg-none">
                🚀 Leading Web Development Agency
              </span>
            </div>

            {/* Main Title */}
            {/* CHANGED: text-4xl for mobile prevents huge words from breaking layout */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-foreground mb-6 md:mb-8 leading-tight dark:text-white">
              Transform Your Vision Into
            </h1>

            {/* Typing Text */}
            {/* CHANGED: min-h to prevent layout shift on mobile lines */}
            <div className="min-h-[4rem] md:h-24 flex items-center justify-center mb-8 md:mb-10">
              {/* CHANGED: text-3xl for mobile to fit on screen */}
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg dark:bg-gradient-to-r dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400">
                {typedText}
                <span className="animate-pulse text-foreground dark:text-white">|</span>
              </h2>
            </div>

            {/* Subtext */}
            {/* CHANGED: Smaller text-lg on mobile */}
            <p className="text-lg sm:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed dark:text-slate-400 px-2">
              We craft stunning, high-performance websites that drive results. From concept to launch, 
              we're your partner in digital excellence.
            </p>

            {/* Buttons */}
            {/* CHANGED: flex-col makes buttons stack on mobile (full width) */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 md:px-0">
              <Button
                size="lg"
                variant="gradient"
                className="w-full sm:w-auto dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700 dark:shadow-purple-500/25 dark:border-0"
                onClick={() => setContactModalOpen(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="glass"
                asChild
                className="w-full sm:w-auto dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 dark:bg-transparent"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Light Mode Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl dark:hidden" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl dark:hidden" />
      </section>

      {/* Features Section */}
      {/* CHANGED: Reduced py-28 to py-16 for mobile */}
      <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-background relative dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 dark:bg-slate-800 dark:border-slate-700">
              <span className="text-sm font-semibold text-primary dark:text-purple-400">✨ Why Choose Us</span>
            </div>
            {/* CHANGED: Smaller heading for mobile */}
            <h2 className="text-4xl sm:text-6xl font-extrabold text-foreground mb-4 md:mb-6 dark:text-white">Why Choose Metryx?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-slate-400">
              We combine cutting-edge technology with creative excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in dark:bg-slate-950 dark:border-slate-800 dark:hover:shadow-purple-900/20 dark:hover:border-purple-500/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 dark:bg-gradient-to-br dark:from-purple-600/10 dark:to-blue-600/10 dark:group-hover:opacity-100" />
                <CardHeader className="relative">
                  <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 dark:bg-slate-900 dark:group-hover:bg-slate-800">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 font-bold group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-purple-400">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed dark:text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-overlay overflow-hidden dark:bg-slate-950 dark:bg-none">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 dark:hidden" />
        <div className="container mx-auto relative z-10">
          {/* CHANGED: Reduced padding from p-16 to p-8 for mobile so text doesn't squish */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-card backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl border border-border/50 dark:bg-slate-900 dark:border-slate-800">
            {/* CHANGED: Smaller heading for mobile */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight dark:text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg md:text-xl sm:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed dark:text-slate-400">
              Let's discuss your project and turn your ideas into reality. Get a free consultation today.
            </p>
            <Button
              size="lg"
              variant="gradient"
              className="w-full sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:border-0"
              onClick={() => setContactModalOpen(true)}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl dark:hidden" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl dark:hidden" />
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