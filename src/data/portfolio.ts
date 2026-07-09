import { leetcodeSnapshot as liveLeetcodeSnapshot } from "./leetcode-snapshot";

export type SocialLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type SkillItem = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  technologies: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
  grade: string;
  link: string;
  isActive: boolean;
};

export type ProjectItem = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  image: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  paragraphs: string[];
};

export const personalInfo = {
  name: "Sarvesh Singh",
  headline: "Full-Stack Developer | Data Scientist | Software Engineer",
  shortHeadline: "Software Developer - Data Science Enthusiast - Problem Solver",
  summary:
    "Passionate developer with expertise in web development, machine learning, and software engineering. I love creating innovative solutions to complex problems.",
  location: "Gurugram, Haryana, India",
  email: "sarvesh8882589477@gmail.com",
  phone: "+91 88825 89477",
  school: "Deenbandhu Chhotu Ram University of Science & Technology",
  degree: "B.Tech in Electronics & Communication Engineering",
  graduation: "2022 - 2026",
  cgpa: "7.75 CGPA",
  quote: "Tracking the ( bugs x life check )",
  github: "https://github.com/sarveshsinghthakur",
  instagram: "https://www.instagram.com/s.sarvesh_singh/?igsh=a2FlcmtldWRramZ5#",
  linkedin: "https://www.linkedin.com/in/sarvesh-singh-1a751a28b/",
  leetcode: "https://leetcode.com/u/sarvesh8882589477/",
  portfolio: "https://sarveshsingh09.netlify.app",
};

export const primaryNavItems = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Projects", href: "/#projects" },
  { label: "LeetCode", href: "/#leetcode" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personalInfo.github },
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "LeetCode", href: personalInfo.leetcode },
  { label: "Instagram", href: personalInfo.instagram },
];

export const quickStats: StatItem[] = [
  { value: "20+", label: "Completed Projects" },
  { value: "6", label: "Internships & Roles" },
  { value: String(liveLeetcodeSnapshot.solved), label: "LeetCode Problems Solved" },
  { value: "2026", label: "Expected Graduation" },
];

export const sidebarDetails = [
  { label: "Residence", value: "India" },
  { label: "City", value: "Gurugram" },
  { label: "Degree", value: "B.Tech ECE" },
  { label: "University", value: "DCRUST" },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Django",
  "Python",
  "Machine Learning",
  "Data Science",
  "Tailwind CSS",
  "OpenCV",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "C++",
  "Git",
  "REST APIs",
];

export const expertiseLevels = [
  { title: "Full-Stack Development", level: "90%" },
  { title: "Data Science & ML", level: "86%" },
  { title: "Frontend Engineering", level: "88%" },
  { title: "Problem Solving", level: "92%" },
];

export const heroRoles = [
  "Software Developer",
  "Machine Learning Enthusiast",
  "Python Developer",
  "Full-Stack Engineer",
  "Data Science Explorer",
];

export const expertiseItems: SkillItem[] = [
  {
    title: "WEB DEVELOPER",
    description:
      "Full stack web developer with expertise in frontend development and multiple completed projects.",
    link: "https://github.com/sarveshsinghthakur?tab=repositories",
    linkText: "View Projects",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "WEB DESIGNER",
    description:
      "Experienced UI/UX designer with multiple internships focused on creating intuitive user interfaces.",
    link: "https://www.linkedin.com/posts/activity-7194190319498809344-oBEo?utm_source=share&utm_medium=member_desktop",
    linkText: "View Work",
    technologies: ["Figma", "Adobe XD", "CSS", "Tailwind"],
  },
  {
    title: "SOFTWARE DEVELOPER",
    description:
      "Proficient in C++, C, and JavaScript with experience in multiple software development internships.",
    link: "https://github.com/sarveshsinghthakur",
    linkText: "View Projects",
    technologies: ["C++", "C", "JavaScript", "Git"],
  },
  {
    title: "PYTHON DEVELOPER",
    description:
      "Expertise in Python and frameworks like Flask & Django with multiple completed projects and internships.",
    link: "https://github.com/sarveshsinghthakur",
    linkText: "View Projects",
    technologies: ["Python", "Django", "Flask", "ML/AI"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Data Science Intern",
    company: "VCBay Solutions Pvt Ltd",
    duration: "Mar 2026 - Jul 2026",
    summary:
      "Delivered data science and analytics solutions for client Maxify, focusing on end-to-end ML workflows.",
    highlights: [
      "Handled client Maxify, delivering data science and analytics solutions using Python, Pandas, and Machine Learning.",
      "Performed data preprocessing, EDA, and feature engineering on structured datasets; built predictive models.",
      "Contributed to internal side projects involving automation and machine learning workflows.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Celebal Technologies",
    duration: "Jun 2025 - Aug 2025",
    summary:
      "Applied machine learning and statistical analysis to business problems using structured data workflows.",
    highlights: [
      "Performed exploratory data analysis, preprocessing, and feature engineering on large structured datasets.",
      "Built predictive models with Python, Pandas, NumPy, and Scikit-learn to improve analytical insights.",
      "Generated dashboards and reports that supported data-driven decision-making.",
    ],
  },
  {
    role: "Full-Stack / Django Developer Intern",
    company: "CodeAlpha",
    duration: "May 2024 - Aug 2024",
    summary:
      "Developed scalable web applications and AI-driven product experiences across backend and frontend layers.",
    highlights: [
      "Built FashionFusion, an e-commerce platform with authentication, product management, and order workflows.",
      "Created Gemini Clone, an AI chat system with real-time conversations and context-aware responses.",
      "Designed RESTful APIs and optimized database queries for performance and scalability.",
    ],
  },
  {
    role: "Technical Support Specialist",
    company: "AmpleTrails Biometric System",
    duration: "Jul 2024 - Aug 2024",
    summary:
      "Provided deployment support, troubleshooting, and system configuration for enterprise biometrics solutions.",
    highlights: [
      "Assisted with technical issue diagnosis and guided deployment setups.",
      "Helped configure production-ready systems for reliable real-world usage.",
      "Strengthened system support and implementation quality through direct troubleshooting.",
    ],
  },
  {
    role: "UI/UX & Web Developer",
    company: "LetGlobe",
    duration: "Nov 2023 - Dec 2023",
    summary:
      "Contributed to both product design and feature delivery with a frontend-first mindset.",
    highlights: [
      "Designed UI and UX flows aligned with product needs and user clarity.",
      "Worked on feature development using React and REST APIs.",
      "Collaborated on GitHub workflows, debugging, and deployment tasks.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bharat Internships",
    duration: "Oct 2023 - Nov 2023",
    summary:
      "Built production-ready React applications with reusable components and responsive interfaces.",
    highlights: [
      "Created Toolspedia with reusable text transformation utilities.",
      "Built NewsLoop using News API for real-time news aggregation.",
      "Worked on a Chat Room project using React, Node.js, and WebSocket communication.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    year: "2022-2026",
    title: "COLLEGE",
    institution: "DCRUST University",
    description:
      "Pursuing BTech in Electronics and Communication Engineering at DCRUST University with a CGPA of 7.75.",
    grade: "7.75 CGPA",
    link: "https://www.dcrustedp.in/",
    isActive: true,
  },
  {
    year: "2022",
    title: "INTER SCHOOL",
    institution: "Dev Samaj Vidya Niketan School, Gurgaon",
    description:
      "Completed inter schooling from Dev Samaj Vidya Niketan School, Gurgaon with an overall percentage of 86%.",
    grade: "86%",
    link: "https://devsamajvidyaniketan.com/",
    isActive: false,
  },
  {
    year: "2020",
    title: "HIGH SCHOOL",
    institution: "Dev Samaj Vidya Niketan School, Gurgaon",
    description:
      "Completed high schooling from Dev Samaj Vidya Niketan School, Gurgaon with an overall percentage of 88%.",
    grade: "88%",
    link: "https://devsamajvidyaniketan.com/",
    isActive: false,
  },
];

export const projectFilters = [
  "All Projects",
  "Web Development",
  "Machine Learning",
  "Deep Learning",
  "Software Development",
];

export const projectItems: ProjectItem[] = [
  {
    title: "BOOM - ZOOM Clone",
    description:
      "BOOM is an alternative version of Zoom, providing web-based conference calls and created using Next.js",
    category: "Web Development",
    technologies: ["TypeScript", "Next.js", "WebRTC"],
    githubUrl: "https://github.com/sarveshsinghthakur/BOOM---ZOOM_Clone---",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "FashionFusion",
    description:
      "FashionFusion created by using Django. This is an Ecommerce website having both Frontend as well as Backend.",
    category: "Web Development",
    technologies: ["Django", "Python", "HTML", "CSS"],
    githubUrl: "https://github.com/sarveshsinghthakur/FashionFusion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Livedocs",
    description:
      "Live docs created by using Next js for real-time collaborative document editing.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Real-time"],
    githubUrl: "https://github.com/sarveshsinghthakur/Livedocs",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Facial Recognition",
    description:
      "Python attendance system by facial recognition created using Python and OpenCV.",
    category: "Machine Learning",
    technologies: ["Python", "OpenCV", "ML"],
    githubUrl: "https://github.com/sarveshsinghthakur/Facial_Recognition",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Gemini Clone",
    description:
      "AI-powered conversational interface clone built with Django, featuring modern UI and AI integration capabilities.",
    category: "Machine Learning",
    technologies: ["Django", "Python", "AI", "HTML"],
    githubUrl: "https://github.com/sarveshsinghthakur/gemini-clone",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Volume Control Gesture",
    description:
      "Volume control gesture system created using Python and computer vision techniques.",
    category: "Machine Learning",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/sarveshsinghthakur/Volume-Control-Gesture",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "DALLE Clone",
    description:
      "AI image generator using OpenAI's DALL-E API built with Flask. Generate stunning images from text descriptions.",
    category: "Machine Learning",
    technologies: ["Flask", "OpenAI API", "Python", "HTML"],
    githubUrl: "https://github.com/sarveshsinghthakur/DALLE-Clone",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Soocial Chat App",
    description:
      "Real-time chat application developed with Django featuring instant messaging and live communication.",
    category: "Web Development",
    technologies: ["Django", "WebSockets", "HTML", "Real-time"],
    githubUrl: "https://github.com/sarveshsinghthakur/Soocial",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "NewsLoop",
    description:
      "Modern news application built with React.js to stay updated with latest news from multiple sources.",
    category: "Web Development",
    technologies: ["React.js", "JavaScript", "News API", "Bootstrap"],
    githubUrl: "https://github.com/sarveshsinghthakur/NewsLoop",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Toolspedia",
    description:
      "Comprehensive tools collection website built with React.js featuring multiple utility tools in one platform.",
    category: "Web Development",
    technologies: ["React.js", "JavaScript", "CSS", "Utility Tools"],
    githubUrl: "https://github.com/sarveshsinghthakur/Toolspedia",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Music Recommender",
    description:
      "Machine learning-based music recommendation system to discover new music based on user preferences.",
    category: "Machine Learning",
    technologies: ["Python", "Jupyter Notebook", "ML Algorithms", "Data Science"],
    githubUrl: "https://github.com/sarveshsinghthakur/Music_Recommender",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Movies Recommender",
    description:
      "Intelligent movie recommendation system using machine learning algorithms and comprehensive data analysis.",
    category: "Machine Learning",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/sarveshsinghthakur/Movies_Recommender",
    image:
      "https://images.unsplash.com/photo-1489599511986-1b3c5d86e47b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "PDF Utils",
    description:
      "Python project for PDF manipulation with voice assistant featuring robotic speaker integration.",
    category: "Software Development",
    technologies: ["Python", "PDF Processing", "Text-to-Speech", "GUI"],
    githubUrl: "https://github.com/sarveshsinghthakur/PDF-Utils",
    image:
      "https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Chat Room",
    description:
      "Real-time chat room application built with Node.js featuring multi-user chat and instant messaging.",
    category: "Web Development",
    technologies: ["Node.js", "Socket.io", "HTML", "Real-time"],
    githubUrl: "https://github.com/sarveshsinghthakur/Chat_room",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Toffeshare File Sharing",
    description:
      "Secure file sharing application built with Node.js providing fast and reliable file transfer solutions.",
    category: "Software Development",
    technologies: ["Node.js", "JavaScript", "File Upload", "Express"],
    githubUrl: "https://github.com/sarveshsinghthakur/Toffeshare-it",
    image:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Locator App",
    description:
      "Location-based application built with Node.js for tracking and location services.",
    category: "Software Development",
    technologies: ["Node.js", "JavaScript", "Geolocation", "Maps API"],
    githubUrl: "https://github.com/sarveshsinghthakur/Locator",
    image:
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "AJIO Clone",
    description:
      "E-commerce website clone of AJIO built with HTML, CSS and JavaScript featuring responsive design.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/sarveshsinghthakur/AJIO-clone",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Media Control Gesture",
    description:
      "Media control gesture system created using Python for hands-free media control and interaction.",
    category: "Machine Learning",
    technologies: ["Python", "OpenCV", "Gesture Recognition"],
    githubUrl: "https://github.com/sarveshsinghthakur/media-control-gesture",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Deep Learning",
    description:
      "Comprehensive deep learning projects and implementations using various neural network architectures.",
    category: "Deep Learning",
    technologies: ["Python", "TensorFlow", "Jupyter"],
    githubUrl: "https://github.com/sarveshsinghthakur/Deep-Learning",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "TO-DO List",
    description:
      "Interactive task management application built with HTML and CSS featuring modern responsive design.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
    githubUrl: "https://github.com/sarveshsinghthakur/TO-DO_List",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Responsive Time",
    description:
      "Responsive time display application created using HTML, CSS and JavaScript with beautiful animations.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Animations"],
    githubUrl: "https://github.com/sarveshsinghthakur/RESPONSIVE-TIME",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1000&q=80",
  },
];

export const leetcodeSnapshot = {
  username: "sarvesh8882589477",
  name: "Sarvesh Singh",
  ranking: "235,603",
  solved: 443,
  totalSubmissions: 786,
  easy: 205,
  medium: 213,
  hard: 25,
  totalBadges: 5,
  currentBadge: "50 Days Badge 2026",
  avatar:
    "https://assets.leetcode.com/users/sarvesh8882589477/avatar_1774209861.png",
  about: "Full-Stack Software Engineer & Data Scientist",
  school: "Dcrust university",
  country: "India",
  languages: [
    { name: "Python3", solved: 325 },
    { name: "C++", solved: 131 },
    { name: "MySQL", solved: 6 },
    { name: "JavaScript", solved: 6 },
  ],
  focusTags: ["Full Stack", "Frontend", "RAG", "Data Scientist", "Agentic AI"],
  strongTopics: [
    { name: "Array", solved: 269 },
    { name: "String", solved: 98 },
    { name: "Hash Table", solved: 96 },
    { name: "Math", solved: 89 },
    { name: "Sorting", solved: 55 },
  ],
  lastSyncedLabel: "Public profile snapshot • Apr 10, 2026",
};

export const blogPosts: BlogPost[] = [
  {
    id: "full-stack-ai",
    title: "Full-Stack Development In The AI Era",
    excerpt:
      "Modern full-stack work is no longer only about shipping screens and APIs. It is about building intelligent systems that learn, automate, and support better product decisions.",
    readTime: "6 min read",
    tags: ["Full Stack", "AI", "Engineering"],
    paragraphs: [
      "Full-stack development today demands far more than connecting a frontend to a backend. Teams now expect developers to understand product thinking, performance, cloud deployment, observability, and the user journey from the first click to the last API response.",
      "AI has become a practical layer inside this workflow. On the frontend it powers smarter search, recommendation systems, adaptive interfaces, and assistants that help users act faster. On the backend it improves automation, classification, summarization, and anomaly detection. This means a full-stack developer can now build systems that feel more responsive and intelligent instead of simply functional.",
      "The biggest shift is that AI reduces repetitive work while raising the importance of engineering judgment. Boilerplate generation, test drafting, content assistance, and debugging support can all speed up delivery, but architecture, security, data quality, and user trust still depend on the developer. The strongest full-stack engineers use AI as acceleration, not replacement.",
      "For a portfolio, this creates a powerful story. A developer who understands React, Node.js, Django, APIs, databases, and product UX can now combine that foundation with AI workflows to create apps that are faster to build, easier to maintain, and more valuable to real users.",
    ],
  },
  {
    id: "data-science-impact",
    title: "Data Science From Insight To Product Impact",
    excerpt:
      "Data science matters most when analysis moves beyond notebooks and becomes part of a real product, business workflow, or decision system.",
    readTime: "5 min read",
    tags: ["Data Science", "ML", "Analytics"],
    paragraphs: [
      "Data science starts with curiosity, but it creates value through disciplined execution. That means cleaning raw data, understanding patterns, engineering features, validating assumptions, comparing models, and explaining outcomes clearly enough that people can act on them.",
      "AI strengthens data science by helping teams process larger datasets, automate repetitive analysis, surface hidden relationships, and move faster from experimentation to deployment. Tasks like classification, forecasting, anomaly detection, recommendation, and natural language analysis become more scalable when machine learning workflows are paired with strong data pipelines.",
      "What separates strong data scientists from casual model builders is the ability to think in terms of reliability. Good results are not only about accuracy. They also depend on meaningful metrics, fair evaluation, sensible feature choices, reproducibility, and business relevance.",
      "When data science is combined with full-stack development, the result is even stronger. Insights can be turned into dashboards, prediction services, or real-time user features. That bridge between analysis and implementation is where modern engineers can stand out the most.",
    ],
  },
  {
    id: "ai-across-fields",
    title: "How AI Is Transforming Every Field",
    excerpt:
      "AI is no longer limited to research labs. It is reshaping how industries learn, automate, personalize, and make decisions at scale.",
    readTime: "7 min read",
    tags: ["AI", "Industry", "Future of Work"],
    paragraphs: [
      "In healthcare, AI helps analyze scans, support diagnosis, prioritize patient cases, and improve monitoring workflows. In finance, it is used for fraud detection, risk analysis, intelligent support systems, and pattern recognition across huge transaction volumes. In education, it supports adaptive learning, feedback generation, and personalized study plans.",
      "E-commerce uses AI for recommendation engines, search optimization, smart inventory decisions, and customer behavior analysis. Cybersecurity teams use it to detect anomalies and respond faster to suspicious activity. Content and media platforms use AI for moderation, generation, classification, and audience personalization.",
      "The most important truth is that AI does not overcome a field by replacing the people inside it. It overcomes bottlenecks. It reduces manual effort, accelerates pattern recognition, and gives experts better tools to make decisions. Human expertise, ethics, and accountability still matter at every step.",
      "For developers and data scientists, this creates responsibility as well as opportunity. Building with AI means thinking about data privacy, bias, transparency, and long-term reliability. The future belongs to builders who can combine technical depth with thoughtful product judgment.",
    ],
  },
];
