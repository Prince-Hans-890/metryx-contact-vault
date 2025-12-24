import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "5+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "7+", label: "Projects Completed" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Target className="w-8 h-8" />, number: "1+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Innovation projects ",
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      {/* Hero Section - Adjusted padding and font sizes for mobile */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg">
              <span className="text-xs md:text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">👥 Our Story</span>
            </div>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 md:mb-8 leading-tight">
              About Metryx Technologies
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed px-2">
              We're a team of passionate developers, designers, and strategists dedicated to transforming 
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 md:w-72 md:h-72 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Stats Section - Fixed into a 2x2 Matrix */}
<section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    {/* grid-cols-2 ensures it stays 2x2 on all screens */}
    <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="group text-center p-4 md:p-10 bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
          <CardContent className="pt-4 md:pt-6 relative p-2 md:p-6">
            <div className="flex justify-center mb-2 md:mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
              {/* Scaled icon for mobile within the matrix */}
              <div className="w-6 h-6 md:w-8 md:h-8">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl md:text-5xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-1 md:mb-3">
              {stat.number}
            </div>
            <div className="text-[10px] md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Story Section - Adjusted text sizes and padding */}
      <section className="py-12 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-overlay relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">📖 Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-extrabold text-foreground mb-6">Our Story</h2>
            </div>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground bg-gradient-card backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl border border-border/50">
              <p className="leading-relaxed md:text-xl">
                Founded in 2024, Metryx Technologies emerged from a simple belief: every business deserves 
                a powerful digital presence that drives real results. What started as a small team of three 
                passionate developers has grown into a full-service web development agency serving clients 
                across the globe.
              </p>
              <p className="leading-relaxed md:text-xl">
                From day one, our focus has been simple - clarity over clutter, performance over promises, and results over buzzwords. 
                We’ve worked with early-stage startups trying to get their first customers, and growing businesses that needed systems 
                that scale instead of breaking under pressure.
              </p>
              <p className="leading-relaxed md:text-xl">
                That mindset shaped everything that followed. From early-stage startups to growing brands, we focus on building 
                fast, clear, and conversion-driven digital experiences. As we like to say, 
                <em> “A website isn’t art—it’s a tool. If it doesn’t work, it doesn’t matter how good it looks.”</em>
                That’s the standard we bring to every project at Metryx.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Spacing and card padding refined */}
      <section className="py-12 md:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary">💎 What Drives Us</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-extrabold text-foreground mb-4 md:mb-6">Our Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These core principles guide our work and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden p-6 md:p-10 bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl md:text-3xl font-extrabold text-foreground mb-3 md:mb-5 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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