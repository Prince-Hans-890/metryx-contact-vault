import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, StyleHub",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      text: "Metryx transformed our e-commerce vision into reality. The shoe store they built exceeded all expectations with its performance and design. Sales increased by 45% in just three months!",
    },
    {
      name: "Michael Chen",
      role: "Owner, Prime Properties",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "The real estate platform Metryx developed is a game-changer. The virtual tours and map integration are impressive. Our leads have increased by 60% since launch.",
    },
    {
      name: "Emily Rodriguez",
      role: "Manager, Bistro Delight",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Our restaurant website is stunning! The online ordering system is smooth and the reservation feature works flawlessly. Customer engagement is up 70%.",
    },
    {
      name: "David Park",
      role: "Founder, TechStart",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Professional, responsive, and creative. Metryx delivered our web app on time and within budget. Their attention to detail is unmatched.",
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director, GrowthCo",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      rating: 5,
      text: "Working with Metryx was a pleasure. They understood our brand and created a website that perfectly represents our values. Highly recommended!",
    },
    {
      name: "James Wilson",
      role: "CTO, InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      rating: 5,
      text: "The technical expertise and problem-solving skills at Metryx are exceptional. They built a scalable solution that grows with our business.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onGetInTouch={() => setContactModalOpen(true)} />

      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-glass backdrop-blur-md border border-primary/20 shadow-lg">
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">⭐ What Clients Say</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-foreground mb-8">Client Testimonials</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Don't just take our word for it—see what our clients have to say about working with us.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <CardContent className="pt-8 relative">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-16 w-16 mr-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-5 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} source="testimonials-page" />
    </div>
  );
};

export default Testimonials;
