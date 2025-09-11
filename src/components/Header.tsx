import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/sarvesh-hero.jpg';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-elegant border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-gradient white">
  <img 
    src={heroImage} 
    alt="Sarvesh Singh - Full Stack Developer" 
    className="object-cover w-8 h-8 rounded-full"
  />
</div>


          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;