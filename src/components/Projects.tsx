import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = ['All Projects', 'Web Development', 'Machine Learning', 'Deep Learning', 'Software Development'];

  const projects = [
    {
      title: "BOOM - ZOOM Clone",
      description: "BOOM is an alternative version of Zoom, providing web-based conference calls and created using Next.js",
      category: "Web Development",
      technologies: ["TypeScript", "Next.js", "WebRTC"],
      githubUrl: "https://github.com/sarveshsinghthakur/BOOM---ZOOM_Clone---",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "FashionFusion",
      description: "FashionFusion created by using Django. This is an Ecommerce website having both Frontend as well as Backend.",
      category: "Web Development", 
      technologies: ["Django", "Python", "HTML", "CSS"],
      githubUrl: "https://github.com/sarveshsinghthakur/FashionFusion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Livedocs",
      description: "Live docs created by using Next js for real-time collaborative document editing.",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "Real-time"],
      githubUrl: "https://github.com/sarveshsinghthakur/Livedocs",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Facial Recognition",
      description: "Python attendance system by facial recognition created using Python and OpenCV.",
      category: "Machine Learning",
      technologies: ["Python", "OpenCV", "ML"],
      githubUrl: "https://github.com/sarveshsinghthakur/Facial_Recognition",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Gemini Clone",
      description: "AI-powered conversational interface clone built with Django, featuring modern UI and AI integration capabilities.",
      category: "Machine Learning",
      technologies: ["Django", "Python", "AI", "HTML"],
      githubUrl: "https://github.com/sarveshsinghthakur/gemini-clone",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Volume Control Gesture",
      description: "Volume control gesture system created using Python and computer vision techniques.",
      category: "Machine Learning",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      githubUrl: "https://github.com/sarveshsinghthakur/Volume-Control-Gesture",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "DALLE Clone",
      description: "AI image generator using OpenAI's DALL-E API built with Flask. Generate stunning images from text descriptions.",
      category: "Machine Learning",
      technologies: ["Flask", "OpenAI API", "Python", "HTML"],
      githubUrl: "https://github.com/sarveshsinghthakur/DALLE-Clone",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Soocial Chat App",
      description: "Real-time chat application developed with Django featuring instant messaging and live communication.",
      category: "Web Development",
      technologies: ["Django", "WebSockets", "HTML", "Real-time"],
      githubUrl: "https://github.com/sarveshsinghthakur/Soocial",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "NewsLoop",
      description: "Modern news application built with React.js to stay updated with latest news from multiple sources.",
      category: "Web Development",
      technologies: ["React.js", "JavaScript", "News API", "Bootstrap"],
      githubUrl: "https://github.com/sarveshsinghthakur/NewsLoop",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Toolspedia",
      description: "Comprehensive tools collection website built with React.js featuring multiple utility tools in one platform.",
      category: "Web Development",
      technologies: ["React.js", "JavaScript", "CSS", "Utility Tools"],
      githubUrl: "https://github.com/sarveshsinghthakur/Toolspedia",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Music Recommender",
      description: "Machine learning-based music recommendation system to discover new music based on user preferences.",
      category: "Machine Learning",
      technologies: ["Python", "Jupyter Notebook", "ML Algorithms", "Data Science"],
      githubUrl: "https://github.com/sarveshsinghthakur/Music_Recommender",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Movies Recommender",
      description: "Intelligent movie recommendation system using machine learning algorithms and comprehensive data analysis.",
      category: "Machine Learning",
      technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/sarveshsinghthakur/Movies_Recommender",
      image: "https://images.unsplash.com/photo-1489599511986-1b3c5d86e47b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "PDF Utils",
      description: "Python project for PDF manipulation with voice assistant featuring robotic speaker integration.",
      category: "Software Development",
      technologies: ["Python", "PDF Processing", "Text-to-Speech", "GUI"],
      githubUrl: "https://github.com/sarveshsinghthakur/PDF-Utils",
      image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Chat Room",
      description: "Real-time chat room application built with Node.js featuring multi-user chat and instant messaging.",
      category: "Web Development",
      technologies: ["Node.js", "Socket.io", "HTML", "Real-time"],
      githubUrl: "https://github.com/sarveshsinghthakur/Chat_room",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Toffeshare File Sharing",
      description: "Secure file sharing application built with Node.js providing fast and reliable file transfer solutions.",
      category: "Software Development",
      technologies: ["Node.js", "JavaScript", "File Upload", "Express"],
      githubUrl: "https://github.com/sarveshsinghthakur/Toffeshare-it",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Locator App",
      description: "Location-based application built with Node.js for tracking and location services.",
      category: "Software Development",
      technologies: ["Node.js", "JavaScript", "Geolocation", "Maps API"],
      githubUrl: "https://github.com/sarveshsinghthakur/Locator",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "AJIO Clone",
      description: "E-commerce website clone of AJIO built with HTML, CSS and JavaScript featuring responsive design.",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/sarveshsinghthakur/AJIO-clone",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Media Control Gesture",
      description: "Media control gesture system created using Python for hands-free media control and interaction.",
      category: "Machine Learning",
      technologies: ["Python", "OpenCV", "Gesture Recognition"],
      githubUrl: "https://github.com/sarveshsinghthakur/media-control-gesture",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Deep Learning",
      description: "Comprehensive deep learning projects and implementations using various neural network architectures.",
      category: "Deep Learning",
      technologies: ["Python", "TensorFlow", "Jupyter"],
      githubUrl: "https://github.com/sarveshsinghthakur/Deep-Learning",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "TO-DO List",
      description: "Interactive task management application built with HTML and CSS featuring modern responsive design.",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      githubUrl: "https://github.com/sarveshsinghthakur/TO-DO_List",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Responsive Time",
      description: "Responsive time display application created using HTML, CSS and JavaScript with beautiful animations.",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript", "Animations"],
      githubUrl: "https://github.com/sarveshsinghthakur/RESPONSIVE-TIME",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">PROJECTS</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of innovative solutions and creative implementations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="hover-lift"
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group glass-card hover-lift animate-slide-up border-0 shadow-elegant overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-card/90 backdrop-blur-sm"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-muted text-muted-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;