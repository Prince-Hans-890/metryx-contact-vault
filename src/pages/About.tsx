import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "250+", label: "Projects Completed" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Target className="w-8 h-8" />, number: "5+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "Excellence is not an option—it's our standard. Every project undergoes rigorous testing and quality assurance.",
    },
    {
      title: "Collaboration",
      description: "Your success is our success. We work closely with clients as partners, not just vendors.",
    },
    {
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide everything we do, building trust with every interaction.",
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
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">👥 Our Story</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-foreground mb-8">About Metryx</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              We're a team of passionate developers, designers, and strategists dedicated to transforming 
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group text-center p-10 bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                <CardContent className="pt-6 relative">
                  <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-5xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-3">{stat.number}</div>
                  <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-overlay relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">📖 Our Journey</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">Our Story</h2>
            </div>
            <div className="space-y-8 text-lg text-muted-foreground bg-gradient-card backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-border/50">
              <p className="leading-relaxed text-xl">
                Founded in 2019, Metryx Technologies emerged from a simple belief: every business deserves 
                a powerful digital presence that drives real results. What started as a small team of three 
                passionate developers has grown into a full-service web development agency serving clients 
                across the globe.
              </p>
              <p className="leading-relaxed text-xl">
                Our journey has been fueled by curiosity, innovation, and an unwavering commitment to our 
                clients' success. We've worked with startups finding their footing, established businesses 
                undergoing digital transformation, and everything in between.
              </p>
              <p className="leading-relaxed text-xl">
                Today, we're proud to be a trusted partner for businesses seeking to leverage technology 
                for growth. From e-commerce platforms that convert to stunning portfolios that impress, 
                we bring expertise, creativity, and dedication to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary">💎 What Drives Us</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These core principles guide our work and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden p-10 bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-3xl font-extrabold text-foreground mb-5 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="about-page" />
    </div>
  );
};

export default About;
