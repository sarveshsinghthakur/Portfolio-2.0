import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      year: "2022-2026",
      title: "COLLEGE",
      institution: "DCRUST University",
      description: "Pursuing BTech in Electronics and Communication Engineering at DCRUST University with a CGPA of 7.5.",
      grade: "7.5 CGPA",
      link: "https://www.dcrustedp.in/",
      isActive: true
    },
    {
      year: "2022",
      title: "INTER SCHOOL", 
      institution: "Dev Samaj Vidya Niketan School, Gurgaon",
      description: "Completed inter schooling from Dev Samaj Vidya Niketan School, Gurgaon with an overall percentage of 86%.",
      grade: "86%",
      link: "https://devsamajvidyaniketan.com/",
      isActive: false
    },
    {
      year: "2020",
      title: "HIGH SCHOOL",
      institution: "Dev Samaj Vidya Niketan School, Gurgaon", 
      description: "Completed high schooling from Dev Samaj Vidya Niketan School, Gurgaon with an overall percentage of 88%.",
      grade: "88%",
      link: "https://devsamajvidyaniketan.com/",
      isActive: false
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">EDUCATION</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic journey and achievements
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={edu.year}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                    edu.isActive 
                      ? 'bg-primary border-primary shadow-glow animate-pulse' 
                      : 'bg-muted border-muted-foreground'
                  }`}></div>

                  {/* Content Card */}
                  <div className="ml-20">
                    <Card className={`group glass-card hover-lift border-0 shadow-elegant ${
                      edu.isActive ? 'ring-2 ring-primary/20' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <Badge 
                              variant={edu.isActive ? "default" : "secondary"}
                              className="mb-2"
                            >
                              {edu.year}
                            </Badge>
                            <h3 className="text-xl font-bold text-secondary mb-1">
                              {edu.title}
                            </h3>
                            <p className="text-muted-foreground font-medium">
                              {edu.institution}
                            </p>
                          </div>
                          
                          {/* Grade Display */}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {edu.grade}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <GraduationCap className="h-3 w-3 mr-1" />
                              Grade
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {edu.description}
                        </p>

                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                          className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                        >
                          <a href={edu.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Institution
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;