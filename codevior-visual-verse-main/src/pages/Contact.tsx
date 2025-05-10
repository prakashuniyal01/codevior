
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

// Animation helper
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideUp');
        entry.target.classList.remove('opacity-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    animateOnScroll();
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally be an API call to your backend
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Have a project in mind? Let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <Card className="p-6 flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">Call us for inquiries</p>
                    <a href="tel:8979049772" className="text-lg font-medium text-primary hover:underline">
                      8979049772
                    </a>
                  </div>
                </Card>
                
                <Card className="p-6 flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">Send us an email</p>
                    <a href="mailto:support@codevior.com" className="text-lg font-medium text-primary hover:underline">
                      support@codevior.com
                    </a>
                  </div>
                </Card>
                
                <Card className="p-6 flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground mb-1">Visit our headquarters</p>
                    <p className="text-lg">
                      Tech Hub, Innovation Street,<br />
                      Digital City, 123456
                    </p>
                  </div>
                </Card>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p className="mb-2"><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project..." 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (placeholder) */}
      <section className="py-8 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0">
            <div className="rounded-lg overflow-hidden shadow-sm h-96 bg-gray-300 flex items-center justify-center">
              <p className="text-xl font-medium">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
