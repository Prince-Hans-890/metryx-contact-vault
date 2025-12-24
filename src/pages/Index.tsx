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
    <div className="min-h-screen bg-gradient-hero dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="hidden dark:block absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="hidden dark:block absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-overlay opacity-50 dark:hidden" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-4 py-2 md:px-6 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg dark:bg-slate-900/50 dark:border-slate-800">
              <span className="text-xs md:text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent dark:text-slate-300 dark:bg-none">
                🚀 Leading Web Development Agency
              </span>
            </div>

            <h1 className="text-3xl sm:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 md:mb-8 leading-tight dark:text-white">
              Transform Your Vision Into
            </h1>

            <div className="h-12 md:h-24 flex items-center justify-center mb-10">
              <h2 className="text-2xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
                {typedText}
                <span className="animate-pulse text-foreground dark:text-white">|</span>
              </h2>
            </div>

            <p className="text-lg sm:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed dark:text-slate-400">
              We craft stunning, high-performance websites that drive results. From concept to launch, 
              we're your partner in digital excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
              <Button
                size="lg"
                variant="gradient"
                className="w-full sm:w-auto dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700 dark:shadow-purple-500/25"
                onClick={() => setContactModalOpen(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="glass"
                asChild
                className="w-full sm:w-auto dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background relative dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 dark:bg-slate-800 dark:border-slate-700">
              <span className="text-xs md:text-sm font-semibold text-primary dark:text-purple-400">✨ Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-extrabold text-foreground mb-6 dark:text-white">Why Choose Metryx?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-slate-400">
              We combine cutting-edge technology with creative excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 dark:bg-slate-950 dark:border-slate-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 dark:bg-gradient-to-br dark:from-purple-600/10 dark:to-blue-600/10 dark:group-hover:opacity-100" />
                <CardHeader className="relative p-6 md:p-8">
                  <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit group-hover:scale-110 transition-all duration-300 dark:bg-slate-900">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-3 font-bold dark:text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed dark:text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-overlay overflow-hidden dark:bg-slate-950 dark:bg-none">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-gradient-card backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl border border-border/50 dark:bg-slate-900 dark:border-slate-800">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight dark:text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed dark:text-slate-400">
              Let's discuss your project and turn your ideas into reality. Get a free consultation today.
            </p>
            <Button
              size="lg"
              variant="gradient"
              className="w-full sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              onClick={() => setContactModalOpen(true)}
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