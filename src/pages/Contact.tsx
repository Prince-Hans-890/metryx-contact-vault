import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      details: "Mohali, Punjab, India",
      description: "Come visit our office"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Number",
      details: "+91-6239686446",
      description: "Mon-Fri from 9am to 7pm"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Address",
      details: "metryxtechnologies@gmail.com",
      description: "We usually reply within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header onGetInTouch={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5 dark:opacity-[0.02]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12 px-4 bg-secondary/30 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm dark:bg-slate-950"
              >
                {/* Lightning/Shine Effect */}
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12 pointer-events-none" />
                
                <CardContent className="flex flex-col items-center text-center p-8 relative z-10">
                  <div className="mb-4 p-4 rounded-full bg-primary/10 dark:bg-slate-900 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary font-semibold mb-1">{item.details}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-background rounded-2xl shadow-xl p-8 border border-border/50 dark:bg-slate-900 dark:border-slate-800 h-full">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your name" 
                      required 
                      className="bg-secondary/50 dark:bg-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="your@email.com" 
                      required 
                      className="bg-secondary/50 dark:bg-slate-900"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="How can we help?" 
                    required 
                    className="bg-secondary/50 dark:bg-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project..." 
                    required 
                    className="min-h-[150px] bg-secondary/50 dark:bg-slate-900"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            </div>

            {/* Map Section - Expanded to match form height */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50 relative dark:border-slate-800 h-[500px] lg:h-full min-h-[500px]">
              {/* Embed Code for Mohali, Punjab */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709340508!2d76.6934882164986!3d30.73225442201366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        source="contact-page"
      />
    </div>
  );
};

export default Contact;