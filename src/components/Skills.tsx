import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Laptop, FileCode2 } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "WEB DEVELOPER",
      description: "Full stack web developer with expertise in frontend development and multiple completed projects.",
      link: "https://github.com/sarveshsinghthakur?tab=repositories",
      linkText: "View Projects",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "WEB DESIGNER", 
      description: "Experienced UI/UX designer with multiple internships focused on creating intuitive user interfaces.",
      link: "https://www.linkedin.com/posts/activity-7194190319498809344-oBEo?utm_source=share&utm_medium=member_desktop",
      linkText: "View Work",
      technologies: ["Figma", "Adobe XD", "CSS", "Tailwind"]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "SOFTWARE DEVELOPER",
      description: "Proficient in C++, C, and JavaScript with experience in multiple software development internships.",
      link: "https://github.com/sarveshsinghthakur",
      linkText: "View Projects",
      technologies: ["C++", "C", "JavaScript", "Git"]
    },
    {
      icon: <FileCode2 className="h-8 w-8" />,
      title: "PYTHON DEVELOPER",
      description: "Expertise in Python and frameworks like Flask & Django with multiple completed projects and internships.",
      link: "https://github.com/sarveshsinghthakur",
      linkText: "View Projects",
      technologies: ["Python", "Django", "Flask", "ML/AI"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">SKILLS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse expertise across multiple domains of software development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="group glass-card hover-lift animate-slide-up border-0 shadow-elegant"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-secondary">
                      {skill.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      {skill.linkText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;