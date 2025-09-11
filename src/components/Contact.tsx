import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '61eec48d-90b9-489b-a580-04d0e323ddab');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "Sarvesh2589477@gmail.com",
      href: "mailto:Sarvesh2589477@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "8882589477",
      href: "tel:+918882589477"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Gurgaon, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/sarveshsinghthakur",
      color: "hover:bg-secondary"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/s.sarvesh_singh/?igsh=a2FlcmtldWRramZ5#",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">CONTACT</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. Get in touch for opportunities and discussions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-secondary">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.label}
                    className="glass-card hover-lift border-0 shadow-elegant"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium text-secondary hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-secondary">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      asChild
                      className={`hover-lift ${social.color} hover:text-white transition-all`}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  Available for opportunities
                </Badge>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card border-0 shadow-elegant animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">
                  Send a Message
                </CardTitle>  
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-secondary mb-2 block">
                      Full Name
                    </label>
                    <Input 
                      name="name"
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-secondary mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-secondary mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift animate-glow disabled:opacity-50"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I'll get back to you within 48 hours. Promise! Believe me, I'm quick at reply.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;