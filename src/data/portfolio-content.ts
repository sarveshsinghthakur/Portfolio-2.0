/**
 * Central portfolio data — generated from Sarvesh Singh's resume & professional profiles.
 * Series edition inspired by portfolio_series design authority.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sarvesh Singh',
  displayName: 'Sarvesh Singh',
  firstName: 'SARVESH',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SARVESH ORIGINAL',
  role: 'Full-Stack Software Engineer | Data Scientist | B.Tech ECE',
  tagline: ['Full-Stack Developer', 'Python Developer', 'Data Scientist', 'Cyber Security Engineer'],
  intro:
    'Software Developer & Cyber Security Engineer at Grand Ortus Solution, with a B.Tech in Electronics & Communication Engineering from DCRUST (CGPA 7.75) — building full-stack platforms with FastAPI, Django, Next.js and React, plus ML and retrieval systems with Python, LangGraph, Qdrant and OpenCV.',
  location: 'Gurugram, Haryana, India',
  email: 'sarvesh8882589477@gmail.com',
  phone: '+91 8882589477',
  website: 'https://sarveshsingh09.netlify.app',
  githubHandle: 'sarveshsinghthakur',
  githubStats: { publicRepos: 54, followers: 3, following: 1, joined: 'July 2024' },
  links: {
    linkedin: 'https://www.linkedin.com/in/sarvesh-singh-1a751a28b/',
    github: 'https://github.com/sarveshsinghthakur',
    leetcode: 'https://leetcode.com/u/sarvesh8882589477/',
    instagram: 'https://www.instagram.com/s.sarvesh_singh/',
  },
  resumePdf: '/Sarvesh_Singh_Resume.pdf',
  portrait: {
    src: '/assets/me.jpeg',
    srcSet: '/assets/me.jpeg',
    alt: 'Portrait of Sarvesh Singh',
  },
  interests: ['System Design', 'AI & Machine Learning', 'Cloud Computing (AWS)', 'Data Science'],
};

export const education = [
  {
    school: 'Deenbandhu Chhotu Ram University of Science & Technology (DCRUST)',
    place: 'Murthal, Haryana',
    degree: 'Bachelor of Technology (B.Tech) in Electronics & Communication Engineering',
    period: 'November 2022 – June 2026',
    score: 'CGPA 7.75',
  },
  {
    school: 'Dev Samaj Vidya Niketan School',
    place: 'Gurgaon',
    degree: 'Inter Schooling — CBSE',
    period: 'Completed 2022',
    score: 'Score 86%',
  },
  {
    school: 'Dev Samaj Vidya Niketan School',
    place: 'Gurgaon',
    degree: 'High Schooling — CBSE',
    period: 'Completed 2020',
    score: 'Score 88%',
  },
];

export const experience = [
  {
    company: 'Grand Ortus Solution Private Limited',
    role: 'Software Developer & Cyber Security Engineer',
    period: 'October 2026 – Present',
    points: [
      "Work directly with the company's cyber security clients as a cyber security engineer.",
      'Manage and maintain the company website and other company-related websites, including adding new features and add-ons.',
      'Handle SEO and AEO tasks on the company website.',
    ],
  },
  {
    company: 'VCBay Solutions Pvt Ltd',
    role: 'Data Science Intern',
    place: 'Gurugram, Haryana',
    period: 'March 2026 – September 2026',
    points: [
      'Worked on analytics and data science assignments for the client Maxify, using Python and structured data-processing workflows.',
      'Cleaned and preprocessed datasets, ran exploratory analysis and engineered features for predictive modeling.',
      'Contributed to machine-learning and internal automation projects, checking dataset quality and the outputs of the analysis.',
    ],
  },
  {
    company: 'Celebal Technologies',
    role: 'Data Science Intern',
    place: 'Remote',
    period: 'June 2025 – August 2025',
    points: [
      'Applied machine learning and statistical analysis to solve real-world business problems.',
      'Performed EDA, data preprocessing, and feature engineering on large structured datasets.',
      'Built predictive models using Python, Pandas, NumPy, and Scikit-learn improving analytical insights.',
      'Generated actionable dashboards and reports to support data-driven decision making.',
    ],
  },
  {
    company: 'CodeAlpha',
    role: 'Full-Stack / Django Developer Intern',
    place: 'Remote',
    period: 'May 2024 – August 2024',
    points: [
      'Developed scalable full-stack web applications using Django, Next.js, and PostgreSQL.',
      'Built FashionFusion, an e-commerce platform with authentication, product management, and order workflows.',
      'Created Gemini Clone, an AI-based chat system with real-time conversations and context-aware responses.',
    ],
  },
  {
    company: 'AmpleTrails Biometric System',
    role: 'Technical Support Specialist',
    place: 'Gurugram, Haryana',
    period: 'July 2024 – August 2024',
    points: [
      'Provided technical troubleshooting, deployment assistance, and system configuration for enterprise biometric solutions.',
      'Helped configure production-ready systems for reliable real-world usage.',
    ],
  },
  {
    company: 'LetGlobe',
    role: 'UI/UX & Web Developer Intern',
    place: 'Remote',
    period: 'November 2023 – December 2023',
    points: [
      'Designed UI and UX flows aligned with product needs and user clarity.',
      'Worked on feature development using React and REST APIs.',
    ],
  },
  {
    company: 'Bharat Internships',
    role: 'Frontend Developer Intern',
    place: 'Remote',
    period: 'October 2023 – November 2023',
    points: [
      'Developed three production-ready React applications with responsive UI components.',
      'Toolspedia: Text transformation utilities with reusable component architecture.',
      'Newsloop: Real-time news aggregation platform integrated with News API.',
      'Chat-Room: Live messaging web app using React, Node.js, and WebSocket communication.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'codeforge-ai',
    title: 'CodeForge AI',
    year: '2026',
    genre: 'FastAPI • Next.js • PostgreSQL • Redis',
    logline: 'Coding practice platform with a Monaco editor, AI-assisted coding, problem generation and Docker-isolated code execution.',
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Mistral'],
    build: [
      'Built a coding practice platform with a Monaco Editor, AI-assisted coding, problem generation, activity tracking and JWT authentication.',
      'Split the backend into API routes, services, repositories, schemas and models, with PostgreSQL, Redis and database migrations.',
      'Designed Docker-isolated code execution with resource limits, protected test cases and role-based administration.',
    ],
    features: [
      'Monaco editor with AI-assisted coding',
      'Docker-isolated execution sandbox',
      'JWT auth with role-based administration',
      'Activity tracking & auto-generated problems',
    ],
    metrics: [
      { value: 'Docker', label: 'isolated execution' },
      { value: 'JWT', label: 'auth & roles' },
      { value: 'Redis', label: 'caching layer' },
    ],
    github: 'https://github.com/sarveshsinghthakur/codeforge-ai',
    palette: crimson,
    motif: 'tenants',
  },
  {
    id: 'boom-zoom',
    title: 'BOOM - ZOOM Clone',
    year: '2025',
    genre: 'WebRTC • Next.js • TypeScript',
    logline: 'An alternative version of Zoom providing web-based conference calls built using Next.js and WebRTC.',
    stack: ['Next.js', 'TypeScript', 'WebRTC', 'Tailwind CSS'],
    build: [
      'Built a fully responsive video conferencing platform with real-time peer-to-peer WebRTC streams.',
      'Engineered conference room creation, secure participant links, and audio/video controls.',
    ],
    features: [
      'Real-time video & audio streaming',
      'Instant meeting room creation',
      'Participant controls & state management',
    ],
    metrics: [
      { value: '100%', label: 'real-time sync' },
      { value: 'WebRTC', label: 'protocol' },
    ],
    github: 'https://github.com/sarveshsinghthakur/BOOM---ZOOM_Clone---',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'fashionfusion',
    title: 'FashionFusion',
    year: '2024',
    genre: 'Django • E-Commerce • Python',
    logline: 'An e-commerce platform with authentication, product catalog management, and order workflows.',
    stack: ['Django', 'Python', 'HTML5', 'CSS3', 'SQLite'],
    build: [
      'Developed full-stack e-commerce web application with user authentication and role-based permissions.',
      'Implemented product search, filtering, shopping cart, and order checkout database models.',
    ],
    features: [
      'Secure user auth & profiles',
      'Product catalog & categories',
      'Shopping cart & order checkout',
    ],
    metrics: [
      { value: 'Full', label: 'stack Django app' },
      { value: '100%', label: 'custom workflows' },
    ],
    github: 'https://github.com/sarveshsinghthakur/FashionFusion',
    palette: amber,
    motif: 'tenants',
  },
  {
    id: 'livedocs',
    title: 'Livedocs',
    year: '2025',
    genre: 'Real-Time • Next.js • TypeScript',
    logline: 'Real-time collaborative document editing web application inspired by modern productivity suites.',
    stack: ['Next.js', 'TypeScript', 'Liveblocks', 'Tailwind CSS'],
    build: [
      'Architected live collaborative document editing with presence indicators and concurrent user edits.',
      'Integrated rich text editing capabilities and lightning-fast cloud synchronization.',
    ],
    features: [
      'Live cursor presence & active users',
      'Real-time document synchronization',
      'Clean modern dashboard UI',
    ],
    metrics: [
      { value: 'Real-time', label: 'collaboration' },
      { value: 'Next.js', label: 'App Router' },
    ],
    github: 'https://github.com/sarveshsinghthakur/Livedocs',
    palette: violet,
    motif: 'flow',
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition Attendance',
    year: '2024',
    genre: 'Python • OpenCV • Machine Learning',
    logline: 'Automated attendance marking system powered by computer vision and facial recognition.',
    stack: ['Python', 'OpenCV', 'NumPy', 'Face Recognition'],
    build: [
      'Created automated facial detection and recognition pipeline matching faces against authorized database.',
      'Generated timestamped attendance logs automatically exported to spreadsheet reports.',
    ],
    features: [
      'Real-time face detection & encoding',
      'Automated attendance CSV logging',
      'High accuracy under varied lighting',
    ],
    metrics: [
      { value: '98.5%', label: 'detection accuracy' },
      { value: '0.2s', label: 'recognition latency' },
    ],
    github: 'https://github.com/sarveshsinghthakur/Facial_Recognition',
    palette: jade,
    motif: 'shield',
  },
  {
    id: 'gemini-clone',
    title: 'Gemini Clone',
    year: '2024',
    genre: 'AI • Django • LLM Integration',
    logline: 'Conversational AI web assistant clone featuring prompt history and responsive chat interface.',
    stack: ['Django', 'Python', 'AI API', 'Tailwind CSS'],
    build: [
      'Integrated generative AI APIs into a custom Django backend with session history storage.',
      'Designed a sleek, minimalist chat UI replicating modern assistant experiences.',
    ],
    features: [
      'Conversational prompt history',
      'Markdown response rendering',
      'Responsive dark interface',
    ],
    metrics: [
      { value: 'AI', label: 'powered responses' },
      { value: 'Fast', label: 'message rendering' },
    ],
    github: 'https://github.com/sarveshsinghthakur/gemini-clone',
    palette: crimson,
    motif: 'flow',
  },
  {
    id: 'volume-control',
    title: 'Volume Control Gesture',
    year: '2024',
    genre: 'Computer Vision • Python • MediaPipe',
    logline: 'Hands-free OS volume control using webcam hand gesture tracking and computer vision.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'PyCaw'],
    build: [
      'Tracked hand landmarks in real-time using MediaPipe framework to calculate thumb-index distance.',
      'Mapped finger distance directly to Windows/Linux system volume controls smoothly.',
    ],
    features: [
      'Real-time hand landmark tracking',
      'Smooth volume scaling',
      'Zero hardware requirements beyond webcam',
    ],
    metrics: [
      { value: '30+ FPS', label: 'processing speed' },
      { value: 'Real-time', label: 'gesture mapping' },
    ],
    github: 'https://github.com/sarveshsinghthakur/Volume-Control-Gesture',
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    year: '2026',
    genre: 'Python • Pandas • Scikit-learn',
    logline: 'Classification workflow covering transaction-data preprocessing, feature preparation and model evaluation to flag likely fraud.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    build: [
      'Built a classification workflow covering transaction-data preprocessing, feature preparation and model evaluation.',
      'Compared candidate models on imbalanced transaction data and reported precision/recall trade-offs for flagging fraud.',
    ],
    features: [
      'Transaction data cleaning & feature preparation',
      'Classification model evaluation on imbalanced data',
      'Reproducible Python pipeline',
    ],
    metrics: [
      { value: 'ML', label: 'classification pipeline' },
      { value: 'EDA', label: 'feature preparation' },
    ],
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'healthcare-backend',
    title: 'Healthcare Backend',
    year: '2026',
    genre: 'Django • DRF • PostgreSQL • JWT',
    logline: 'Healthcare REST API with patients, doctors and patient-doctor assignments — documented 39 tests covering auth and access control.',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT'],
    build: [
      'Implemented registration, login, token refresh and authenticated CRUD APIs for patients, doctors and patient-doctor assignments.',
      'Added ownership checks, duplicate prevention, input validation and consistent error handling.',
      'The repository documents 39 tests covering authentication, validation, access control and mapping.',
    ],
    features: [
      'JWT login, refresh & protected routes',
      'Patients / doctors / mappings APIs',
      '39 documented tests across auth & access control',
    ],
    metrics: [
      { value: '39', label: 'documented tests' },
      { value: 'JWT', label: 'auth flow' },
      { value: '3', label: 'core domains' },
    ],
    github: 'https://github.com/sarveshsinghthakur/healthcare-backend',
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'dotrag',
    title: 'DotRAG',
    year: '2026',
    genre: 'RAG • FastAPI • LangGraph • Qdrant',
    logline: 'PDF ingestion and retrieval app: chunking, embeddings and semantic search grounded by LangGraph workflows.',
    stack: ['Python', 'FastAPI', 'React', 'LangGraph', 'Mistral', 'Qdrant'],
    build: [
      'Built PDF ingestion and retrieval: text extraction, chunking, embeddings and semantic search on Mistral and Qdrant.',
      'Added LangGraph workflows for summarization, document comparison and information extraction, with source citations and streaming over REST and SSE.',
    ],
    features: [
      'PDF ingestion with chunking & embeddings',
      'Semantic search with source citations',
      'Streaming responses over REST and SSE',
    ],
    metrics: [
      { value: 'RAG', label: 'architecture' },
      { value: 'FastAPI', label: 'backend' },
    ],
    github: 'https://github.com/sarveshsinghthakur/dotrag',
    palette: violet,
    motif: 'flow',
  },
  {
    id: 'vitto-loan',
    title: 'Vitto Loan Repayment Service',
    year: '2026',
    genre: 'Next.js • PostgreSQL • Firebase • Fintech',
    logline: 'Repayment schedules, payment allocation, outstanding-balance tracking and overdue calculations behind authenticated APIs.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Firebase'],
    build: [
      'Built repayment schedules, payment allocation, outstanding-balance tracking and overdue calculations behind authenticated APIs.',
      'Added idempotency controls to block duplicate payments, plus unit tests, PostgreSQL integration tests and CI checks for migrations, tests and builds.',
    ],
    features: [
      'Repayment schedule & overdue calculations',
      'Idempotent payment posting',
      'Unit + PostgreSQL integration tests with CI',
    ],
    metrics: [
      { value: 'EMI', label: 'schedule math' },
      { value: 'CI', label: 'tests & builds' },
    ],
    github: 'https://github.com/sarveshsinghthakur/vitto-loan-repayment-service',
    palette: amber,
    motif: 'tenants',
  },
  {
    id: 'sms-spam',
    title: 'SMS Spam Classifier',
    year: '2026',
    genre: 'ML • FastAPI • Naive Bayes • TF-IDF',
    logline: 'Text classification service that flags SMS spam with a Naive Bayes model behind a FastAPI web UI.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'TF-IDF'],
    build: [
      'Trained a Multinomial Naive Bayes classifier on TF-IDF vectors for high-precision spam detection.',
      'Wrapped the model in a FastAPI service with a lightweight web UI for live predictions.',
    ],
    features: [
      'TF-IDF feature extraction',
      'Live single-message prediction UI',
      'Deployed demo on Render',
    ],
    metrics: [
      { value: 'NB', label: 'classifier' },
      { value: 'TF-IDF', label: 'features' },
    ],
    github: 'https://github.com/sarveshsinghthakur/sms-spam-classifier',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'soocial',
    title: 'Soocial',
    year: '2024',
    genre: 'Django • Real-Time • Chat',
    logline: 'Real-time chat application developed with Django and WebSockets.',
    stack: ['Django', 'Python', 'WebSockets', 'HTML'],
    build: [
      'Built live conversation rooms with Django channels and websocket messaging.',
      'Implemented user sessions, message history and a clean dark chat interface.',
    ],
    features: [
      'Real-time message delivery',
      'Conversation history',
      'Session-based authentication',
    ],
    metrics: [
      { value: 'Live', label: 'messaging' },
      { value: 'Django', label: 'framework' },
    ],
    github: 'https://github.com/sarveshsinghthakur/Soocial',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'dalle-clone',
    title: 'DALL·E Clone',
    year: '2024',
    genre: 'Flask • OpenAI • Image Gen',
    logline: 'AI image generator built with Flask that turns text prompts into generated artwork.',
    stack: ['Python', 'Flask', 'OpenAI API', 'HTML'],
    build: [
      'Integrated the OpenAI image API into a Flask backend with prompt validation and error handling.',
      'Designed a minimal prompt-to-canvas UI with gallery history of generated images.',
    ],
    features: [
      'Text-to-image generation',
      'Prompt history gallery',
      'Deployed demo on Render',
    ],
    metrics: [
      { value: 'AI', label: 'image gen' },
      { value: 'Flask', label: 'backend' },
    ],
    github: 'https://github.com/sarveshsinghthakur/DALLE-Clone',
    palette: violet,
    motif: 'flow',
  },
  {
    id: 'newsloop',
    title: 'NewsLoop',
    year: '2024',
    genre: 'React • News API • Frontend',
    logline: 'Real-time news aggregation platform built with React and integrated with the News API.',
    stack: ['React', 'JavaScript', 'News API', 'CSS3'],
    build: [
      'Aggregated live headlines across categories and sources with search and category filtering.',
      'Built reusable card components and responsive layouts for mobile and desktop reading.',
    ],
    features: [
      'Live headline feed',
      'Search & category filters',
      'Responsive reading layout',
    ],
    metrics: [
      { value: 'Live', label: 'news feed' },
      { value: 'React', label: 'frontend' },
    ],
    github: 'https://github.com/sarveshsinghthakur/NewsLoop',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'toolspedia',
    title: 'Toolspedia',
    year: '2024',
    genre: 'React • Utilities • Component Design',
    logline: 'Text transformation utility hub with a reusable component architecture.',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
    build: [
      'Shipped a suite of text tools — case conversion, counters, cleaners — as independent React components.',
      'Structured shared state and routing so each tool stays small, testable and fast.',
    ],
    features: [
      'Multiple text utilities in one hub',
      'Reusable component architecture',
      'Deployed on Vercel',
    ],
    metrics: [
      { value: '10+', label: 'text tools' },
      { value: 'React', label: 'components' },
    ],
    github: 'https://github.com/sarveshsinghthakur/Toolspedia',
    palette: jade,
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ey-techathon',
    title: '3rd Position — Meme Mastermind',
    org: 'EY Techathon 4.0 & IIT Patna',
    detail: 'Demonstrated creative technical strategy and secured podium finish among competitive national participants.',
    laurel: 'Podium Finish',
  },
  {
    id: 'tcs-codevita',
    title: 'Global Rank 12,583',
    org: 'TCS CodeVita Season 13',
    detail: 'Competed globally among elite coding talent in advanced algorithmic problem solving.',
    laurel: 'Global Contest',
  },
  {
    id: 'leetcode-solver',
    title: '650+ Problems Solved',
    org: 'LeetCode Profile',
    detail: 'Consistent problem solver across arrays, strings, hash tables, and dynamic programming.',
    laurel: 'Competitive Coding',
    link: 'https://leetcode.com/u/sarvesh8882589477/',
  },
  {
    id: 'github-catalogue',
    title: '54 Public Repositories',
    org: 'GitHub · sarveshsinghthakur',
    detail: '54 public repositories spanning full-stack, data science, computer vision and GenAI — most with live deployments.',
    laurel: 'Open Source',
    link: 'https://github.com/sarveshsinghthakur',
  },
  {
    id: 'iim-ambassador',
    title: 'Campus Ambassador',
    org: 'IIM Calcutta (7 Lakes Fest)',
    detail: 'Recognized for leadership and outstanding performance in festival outreach and management.',
    laurel: 'Leadership',
  },
  {
    id: 'dcrust-ece',
    title: 'B.Tech ECE Scholar',
    org: 'DCRUST University',
    detail: 'Maintained strong academic standing (7.75 CGPA) while delivering 20+ software and ML projects.',
    laurel: 'University Scholar',
  },
];

export type Certification = { issuer: string; name: string; link?: string; issued?: string; skills?: string[] };

/** LinkedIn “Licenses & certifications”, newest first, plus resume-sourced credentials. */
export const certifications: Certification[] = [
  { issuer: 'Tata Consultancy Services', name: 'Tata CodeVita', issued: 'Jul 2026', link: 'https://www.tcs.com/' },
  { issuer: 'Forage', name: 'Deloitte Australia — Data Analytics Job Simulation', issued: 'Mar 2026', link: 'https://www.theforage.com/' },
  { issuer: 'LangChain', name: 'LangChain: Deep Agents', issued: 'Mar 2026', link: 'https://www.langchain.com/', skills: ['Agentic AI Development', 'Deep Agents'] },
  { issuer: 'Anthropic', name: 'Claude with the Anthropic API', issued: 'Mar 2026', link: 'https://www.anthropic.com/' },
  { issuer: 'Anthropic', name: 'AI Fluency: Framework & Foundations', issued: 'Mar 2026', link: 'https://www.anthropic.com/' },
  { issuer: 'Anthropic', name: 'Introduction to Model Context Protocol', issued: 'Mar 2026', link: 'https://www.anthropic.com/' },
  { issuer: 'Anthropic', name: 'Claude 101', issued: 'Mar 2026', link: 'https://www.anthropic.com/' },
  { issuer: 'Anthropic', name: 'Claude Code in Action', issued: 'Mar 2026', link: 'https://www.anthropic.com/' },
  { issuer: 'GeeksforGeeks', name: '160 Days of Problem Solving', link: 'https://www.geeksforgeeks.org/', skills: ['DSA', 'C++'] },
  { issuer: 'GeeksforGeeks', name: 'Agentic AI', link: 'https://www.geeksforgeeks.org/', skills: ['Python', 'n8n'] },
  { issuer: 'OneRoadmap', name: 'Data Analyst', issued: 'Sep 2025', skills: ['Python', 'Data Analysis'] },
  { issuer: 'HackerRank', name: 'SQL (Advanced)', issued: 'May 2025', link: 'https://www.hackerrank.com/', skills: ['MySQL', 'PostgreSQL'] },
  { issuer: 'HackerRank', name: 'JavaScript (Basic)', issued: 'May 2025', link: 'https://www.hackerrank.com/', skills: ['JavaScript', 'TypeScript'] },
  { issuer: 'HackerRank', name: 'JavaScript (Intermediate)', issued: 'May 2025', link: 'https://www.hackerrank.com/', skills: ['JavaScript', 'TypeScript'] },
  { issuer: 'HackerRank', name: 'Python', issued: 'Apr 2025', link: 'https://www.hackerrank.com/', skills: ['Python'] },
  { issuer: 'HackerRank', name: 'Software Engineer', issued: 'Mar 2025', link: 'https://www.hackerrank.com/', skills: ['C++'] },
  { issuer: 'Great Learning', name: 'Python Fundamentals for Beginners', link: 'https://www.greatlearning.in/', skills: ['Python'] },
  { issuer: 'LinkedIn', name: 'Introduction to Career Skills in Data Analytics', link: 'https://www.linkedin.com/' },
  { issuer: 'Great Learning', name: 'Front End Development - HTML', link: 'https://www.greatlearning.in/' },
  { issuer: 'Great Learning', name: 'Front End Development - CSS', link: 'https://www.greatlearning.in/' },
  { issuer: 'Great Learning', name: 'Introduction to JavaScript', link: 'https://www.greatlearning.in/' },
  { issuer: 'Great Learning', name: 'Data Structures in C', link: 'https://www.greatlearning.in/' },
  { issuer: 'DevTown', name: 'Backend Web Development using Express & Node.js', link: 'https://www.devtown.in/' },
  { issuer: 'DevTown', name: 'JavaScript & React.js Bootcamp', link: 'https://www.devtown.in/' },
  { issuer: 'DevTown', name: 'Python and Artificial Intelligence Bootcamp', link: 'https://www.devtown.in/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is primary',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C++', mono: 'C+' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Frameworks',
    subtitle: 'Full-stack development',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'Daily' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Django', mono: 'Dj', note: 'Expert' },
      { name: 'Django REST Framework', mono: 'DR' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'datascience',
    title: 'Data Science & AI',
    subtitle: 'ML workflows & retrieval',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Qdrant', mono: 'Qd' },
      { name: 'Embeddings', mono: 'Em' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Cache',
    subtitle: 'Structured storage',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Web Ops',
    subtitle: 'Current role focus',
    skills: [
      { name: 'Cyber Security', mono: 'Cs' },
      { name: 'JWT Authentication', mono: 'Jw' },
      { name: 'SEO', mono: 'Se' },
      { name: 'AEO', mono: 'Ae' },
      { name: 'API Testing', mono: 'At' },
    ],
  },
  {
    id: 'tools',
    title: 'Infra & Tools',
    subtitle: 'Deployment & collaboration',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'Linux (Ubuntu)', mono: 'Ln' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'SSE', mono: 'Ss' },
      { name: 'CI Checks', mono: 'Ci' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Grand Ortus Solution', 'VCBay Solutions', 'Celebal Technologies', 'CodeForge AI'],
  JavaScript: ['Bharat Internships', 'Toolspedia', 'Newsloop'],
  TypeScript: ['BOOM - ZOOM Clone', 'Livedocs', 'CodeForge AI', 'Vitto Loan Service'],
  SQL: ['Healthcare Backend', 'Vitto Loan Service', 'HackerRank SQL (Advanced)'],
  'C++': ['LeetCode 650+ solved', 'HackerRank Software Engineer'],
  'React.js': ['Bharat Internships', 'Toolspedia', 'DotRAG'],
  'Next.js': ['BOOM - ZOOM Clone', 'Livedocs', 'CodeForge AI', 'Vitto Loan Service'],
  FastAPI: ['CodeForge AI', 'DotRAG', 'SMS Spam Classifier'],
  Django: ['CodeAlpha Intern', 'FashionFusion', 'Gemini Clone'],
  'Django REST Framework': ['Healthcare Backend API'],
  'Node.js': ['Chat Room', 'Real-Time Chat App'],
  Pandas: ['VCBay Solutions', 'Celebal Technologies', 'Credit Card Fraud Detection'],
  'Scikit-learn': ['Celebal Technologies', 'Credit Card Fraud Detection', 'SMS Spam Classifier'],
  OpenCV: ['Facial Recognition', 'Volume Control Gesture'],
  LangGraph: ['DotRAG'],
  Qdrant: ['DotRAG'],
  Embeddings: ['DotRAG'],
  PostgreSQL: ['Healthcare Backend', 'Vitto Loan Service', 'CodeForge AI'],
  Redis: ['CodeForge AI'],
  'Cyber Security': ['Grand Ortus Solution'],
  'JWT Authentication': ['Healthcare Backend', 'CodeForge AI'],
  SEO: ['Grand Ortus Solution'],
  AEO: ['Grand Ortus Solution'],
  'API Testing': ['Healthcare Backend', 'Vitto Loan Service'],
  'CI Checks': ['Vitto Loan Service'],
  Docker: ['CodeForge AI', 'Infrastructure & Tools'],
  AWS: ['Cloud & Deployment'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'School Foundations',
    period: '2020 – 2022',
    synopsis: 'High school and inter schooling at Dev Samaj Vidya Niketan School, Gurgaon — scoring 88% and 86%.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The High School Years',
        description: 'Dev Samaj Vidya Niketan School, Gurgaon — completed high school with 88% and inter school with 86%.',
        tags: ['CBSE', 'Gurgaon'],
        runtime: '2020 – 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'University & Core Engineering',
    period: '2022 – 2026',
    synopsis: 'Completed B.Tech in Electronics & Communication Engineering at DCRUST University with a 7.75 CGPA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Entering DCRUST',
        description: 'Studied B.Tech in Electronics & Communication Engineering (ECE) at Deenbandhu Chhotu Ram University of Science & Technology, Murthal.',
        tags: ['B.Tech ECE', 'DCRUST'],
        runtime: 'Nov 2022 – Jun 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Competitive Programming',
        description: 'Solved 650+ problems on LeetCode and secured global rank 12,583 in TCS CodeVita Season 13.',
        tags: ['LeetCode', 'TCS CodeVita', 'Algorithms'],
        runtime: '650+ Solved',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Career Arc',
    period: '2023 – Present',
    synopsis: 'Six internships across Data Science, Full-Stack Development, UI/UX and Technical Support — now a full-time Software Developer & Cyber Security Engineer.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Frontend & Web Training',
        description: 'Bharat Internships & LetGlobe — built React apps, Toolspedia, Newsloop, and Chat Room.',
        tags: ['React', 'JavaScript', 'Tailwind'],
        runtime: 'Oct 2023 – Dec 2023',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Full-Stack & Django Builder',
        description: 'CodeAlpha — developed FashionFusion e-commerce and Gemini AI Chat Clone with Django & Next.js.',
        tags: ['Django', 'Next.js', 'PostgreSQL'],
        runtime: 'May 2024 – Aug 2024',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'Data Science Professional',
        description: 'Celebal Technologies & VCBay Solutions Pvt Ltd — applied Pandas, NumPy, Scikit-learn, and ML models for client Maxify.',
        tags: ['Data Science', 'Pandas', 'ML'],
        runtime: 'Jun 2025 – Sep 2026',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'Software Developer & Cyber Security Engineer',
        description: "Grand Ortus Solution Private Limited — security clients, company websites, SEO/AEO and new feature work.",
        tags: ['Cyber Security', 'Web', 'SEO'],
        runtime: 'Oct 2026 – Present',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Projects & National Honors',
    period: '2024 – 2026',
    synopsis: '20+ built projects, 3rd position at EY Techathon 4.0 / IIT Patna, and IIM Calcutta Campus Ambassadorship.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Project Catalog',
        description: 'CodeForge AI, DotRAG, Healthcare Backend, BOOM-ZOOM, Livedocs, Facial Recognition and 20+ more.',
        tags: ['FastAPI', 'RAG', 'Next.js'],
        runtime: '20+ Projects',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Podium Finishes',
        description: '3rd Position in Meme Mastermind at EY Techathon 4.0 / IIT Patna and IIM Calcutta Fest Ambassador.',
        tags: ['EY Techathon', 'IIM Calcutta'],
        runtime: 'National stage',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Exploring advanced System Design, Agentic AI, RAG architectures, and Cloud Computing.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Frontier',
        description: 'Building intelligent production systems combining full-stack speed with data science depth.',
        tags: ['System Design', 'Agentic AI', 'Cloud (AWS)'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Grand Ortus', detail: 'Software Developer & Cyber Security Engineer', palette: crimson },
  { label: 'Primary language', title: 'Python', detail: 'Primary language for ML, Django & FastAPI', palette: amber },
  { label: 'Top Data Science role', title: 'VCBay Solutions', detail: 'Data Science Intern for client Maxify', palette: jade },
  { label: 'Biggest stage', title: 'EY Techathon 4.0', detail: '3rd Position at IIT Patna', palette: crimson },
  { label: 'Coding milestone', title: '650+ LeetCode', detail: 'Consistent algorithmic problem solver', palette: ocean },
  { label: 'Full-stack original', title: 'FashionFusion', detail: 'Django e-commerce platform', palette: violet },
  { label: 'AI vision project', title: 'Facial Recognition', detail: 'Automated attendance system with OpenCV', palette: jade },
  { label: 'Global contest', title: 'TCS CodeVita', detail: 'Global rank 12,583', palette: amber },
  { label: 'University degree', title: 'DCRUST ECE', detail: 'B.Tech ECE, DCRUST (7.75 CGPA)', palette: ocean },
  { label: 'Collaboration tool', title: 'Livedocs', detail: 'Real-time Next.js document editor', palette: violet },
  { label: 'Current focus', title: 'System Design', detail: 'Full-stack engineering & Agentic AI', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['DCRUST University, Murthal, Haryana', 'November 2022 – June 2026'],
    chips: ['CGPA 7.75'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Python, JavaScript, TypeScript, SQL, C++', 'FastAPI, Django, Next.js, React, PostgreSQL, Redis', 'Pandas, Scikit-learn, LangGraph, Qdrant, OpenCV'],
    chips: ['Python', 'FastAPI', 'Django', 'Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    kicker: 'Experience',
    title: 'Now shipping',
    lines: ['Software Developer & Cyber Security Engineer · Grand Ortus Solution', 'Data Science Intern · VCBay Solutions & Celebal Technologies', 'Full-Stack Django Developer · CodeAlpha'],
  },
  {
    kicker: 'Projects',
    title: '20+ Built Products',
    lines: ['CodeForge AI · FastAPI, Next.js & Docker', 'DotRAG · LangGraph, Qdrant & Mistral', 'Healthcare Backend · DRF, JWT & 39 tests'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['3rd Position · EY Techathon 4.0 (IIT Patna)', 'Global Rank 12,583 · TCS CodeVita', 'Campus Ambassador · IIM Calcutta'],
  },
  {
    kicker: 'Problem Solving',
    title: '650+ LeetCode',
    lines: ['Active competitive programmer and algorithmic problem solver'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Agentic AI · Cloud Computing (AWS)'],
  },
];

export type ProfileId = 'sarvesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sarvesh',
    name: 'Sarvesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${experience.length} Roles`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length}+ Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `Top ${topPicks.length} from resume & profile`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: 'Awards • EY Techathon • LeetCode', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
