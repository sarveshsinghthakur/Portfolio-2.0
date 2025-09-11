import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import heroImage from '@/assets/sarvesh-hero.jpg';
import Resume from '@/assets/sarveshsingh_web.pdf';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="glass-card rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 animate-slide-up">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold">
                    HEY, I'm <span className="text-blue-500">Sarvesh Singh</span>

                  </h1>
                  <div className="flex items-center gap-2 min-h-[2.5rem]">
                    <span className="text-xl md:text-2xl text-muted-foreground">I'm a</span>
                    <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary text-primary-foreground min-w-[200px] text-center">
                      <ReactTyped
                        strings={[
                          'Software Developer',
                          'Machine Learning Enthusiast', 
                          'Python Developer'
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        className="text-primary-foreground"
                      />
                    </Badge>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Passionate developer with expertise in web development, machine learning, and software engineering. 
                  I love creating innovative solutions to complex problems.
                </p>

                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm font-medium italic">
                    "Tracking the ( bugs❌ Life✅ )"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover-lift"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover-lift"
                    asChild
                  >
                    <a href="https://github.com/sarveshsinghthakur" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover-lift"
                    asChild
                  >
                    <a href="https://www.instagram.com/s.sarvesh_singh/?igsh=a2FlcmtldWRramZ5#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <a href={Resume} download className="inline-block">
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift animate-glow"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Button>
</a>
              </div>

              <div className="flex justify-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-float">
                    <img 
                      src={heroImage} 
                      alt="Sarvesh Singh - Full Stack Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;