import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">
                Sarvesh Singh
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions 
                and turning ideas into reality through code.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-lift bg-transparent border-secondary-foreground/20 hover:bg-primary hover:border-primary"
                >
                  <a href="https://github.com/sarveshsinghthakur" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-lift bg-transparent border-secondary-foreground/20 hover:bg-blue-600 hover:border-blue-600"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-lift bg-transparent border-secondary-foreground/20 hover:bg-pink-600 hover:border-pink-600"
                >
                  <a href="https://www.instagram.com/s.sarvesh_singh/?igsh=a2FlcmtldWRramZ5#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['Home', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <p>
  <a href="mailto:Sarvesh2589477@gmail.com">📧 Sarvesh2589477@gmail.com</a>
</p>

                <p>📍 Gurgaon, India</p>
                <p>🎯 Available for opportunities</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-secondary-foreground/20">
            <div className="flex items-center gap-2 text-secondary-foreground/80 mb-4 md:mb-0">
  <span>Made by Sarvesh Singh</span>

             <div className="flex space-x-2">
</div>
<div className="text-secondary-foreground/80 text-center">
    <span>All rights are reserved @ {currentYear}</span>
  </div>

            </div>
            


            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover-lift bg-transparent border-secondary-foreground/20 hover:bg-primary hover:border-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;