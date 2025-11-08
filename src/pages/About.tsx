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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">About Metryx</h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate developers, designers, and strategists dedicated to transforming 
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2019, Metryx Technologies emerged from a simple belief: every business deserves 
                a powerful digital presence that drives real results. What started as a small team of three 
                passionate developers has grown into a full-service web development agency serving clients 
                across the globe.
              </p>
              <p>
                Our journey has been fueled by curiosity, innovation, and an unwavering commitment to our 
                clients' success. We've worked with startups finding their footing, established businesses 
                undergoing digital transformation, and everything in between.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses seeking to leverage technology 
                for growth. From e-commerce platforms that convert to stunning portfolios that impress, 
                we bring expertise, creativity, and dedication to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our work and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
