import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ai-mock-interview-platform",
    title: "AI Mock Interview Platform",
    category: "AI Application",
    filterCategory: "ai",
    description:
      "An intelligent platform that simulates real interview scenarios and delivers structured, actionable feedback — helping candidates practice with confidence.",
    longDescription:
      "An AI-powered interview preparation platform that simulates real interview sessions and provides structured feedback — helping users build confidence and improve their responses over time.",
    challenge:
      "Interview preparation is often unstructured and inconsistent. Candidates need a way to practice realistically, receive actionable feedback, and track improvement without requiring a human interviewer every time.",
    approach:
      "Built a guided interview flow with AI-powered response analysis, clear feedback presentation, and a dashboard that makes progress easy to understand at a glance.",
    experience:
      "The interface prioritizes calm, focused interaction — large readable prompts, minimal distractions, and feedback presented in digestible sections rather than overwhelming technical output.",
    build:
      "Developed with Next.js, React, and TypeScript on the frontend, integrated with AI APIs for conversational analysis and feedback generation.",
    result:
      "A polished platform experience that feels professional and approachable — demonstrating how AI can support learning without sacrificing clarity or usability.",
    keyFeatures: [
      "AI-assisted interview simulations",
      "Structured feedback and scoring",
      "Session history and progress tracking",
      "Responsive dashboard interface",
      "Clean, distraction-free interview flow",
    ],
    technologies: ["Next.js", "React", "TypeScript", "AI APIs"],
    image: "/images/projects/ai-interview-1.png",
    images: [
      "/images/projects/ai-interview-1.png",
      "/images/projects/ai-interview-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: true,
    year: 2025,
    accentColor: "#4338CA",
  },
  {
    slug: "mern-portfolio-builder",
    title: "Portfolio Builder Platform",
    category: "Web Application",
    filterCategory: "applications",
    description:
      "A guided web platform that helps users build and publish professional portfolios through a structured, intuitive builder interface.",
    longDescription:
      "A portfolio creation platform that helps users build and customize professional websites through an intuitive builder interface — demonstrating product thinking and full-stack development.",
    challenge:
      "Many people struggle to present their work professionally online. The platform needed to simplify portfolio creation while still producing polished, credible results.",
    approach:
      "Created a step-by-step builder with preview capabilities, customizable sections, and templates designed to look professional out of the box.",
    experience:
      "The builder interface uses clear visual hierarchy, live preview feedback, and thoughtful defaults so users can create something impressive without design expertise.",
    build:
      "Full MERN stack application with dynamic content management, user accounts, and a React-based builder interface.",
    result:
      "A functional platform that showcases both technical depth and understanding of what makes a portfolio feel professional.",
    keyFeatures: [
      "Guided portfolio builder",
      "Live preview editing",
      "Customizable sections and themes",
      "User account management",
      "Export and sharing capabilities",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    image: "/images/projects/portfolio-builder-1.png",
    images: [
      "/images/projects/portfolio-builder-1.png",
      "/images/projects/portfolio-builder-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: true,
    year: 2024,
    accentColor: "#7C3AED",
  },
  {
    slug: "personalized-job-roadmap",
    title: "Personalized Job Roadmap",
    category: "Career Platform",
    filterCategory: "ai",
    description:
      "A career platform that generates personalized development roadmaps, skill recommendations, and structured guidance tailored to each user's goals.",
    longDescription:
      "A platform that helps users navigate their career development with personalized roadmaps, skill recommendations, and structured guidance tailored to their goals.",
    challenge:
      "Career development paths are often overwhelming and unstructured. Users need clear, personalized guidance that adapts to their background and aspirations.",
    approach:
      "Created a profile-based recommendation system that generates visual roadmaps, milestone tracking, and resource suggestions based on user input and goals.",
    experience:
      "The interface uses progressive disclosure — starting simple and revealing deeper guidance as users engage, keeping the experience approachable rather than intimidating.",
    build:
      "MERN stack foundation with AI integration via Hugging Face for personalized recommendations and content analysis.",
    result:
      "A thoughtful career platform that combines full-stack development with AI capabilities in a user-centered package.",
    keyFeatures: [
      "Personalized career roadmaps",
      "Skill gap analysis",
      "Learning resource recommendations",
      "Progress milestone tracking",
      "AI-powered guidance",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AI / Hugging Face"],
    image: "/images/projects/job-roadmap-1.png",
    images: [
      "/images/projects/job-roadmap-1.png",
      "/images/projects/job-roadmap-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: true,
    year: 2024,
    accentColor: "#0369A1",
  },
  {
    slug: "laravel-ecommerce-dashboard",
    title: "Laravel E-commerce Dashboard",
    category: "Web Application",
    filterCategory: "applications",
    description:
      "A full-featured e-commerce management dashboard built with Laravel — covering product management, orders, analytics, and admin controls.",
    longDescription:
      "A complete e-commerce backend and admin dashboard system built on Laravel, designed for business owners to manage products, track orders, and monitor performance from a clean admin interface.",
    challenge:
      "Business owners need a clear, organized view of their operations without technical complexity. The dashboard needed to surface the most important data while remaining easy to navigate.",
    approach:
      "Designed a structured admin experience with clear data tables, product management flows, and visual analytics — keeping the interface clean and actionable.",
    experience:
      "The dashboard uses consistent visual language, clear hierarchy, and responsive layouts that work on both desktop and tablet environments.",
    build:
      "Built with Laravel and PHP on the backend with a clean frontend dashboard interface for real-time data management.",
    result:
      "A professional admin system that demonstrates full-stack capability in a business-critical context — managing real product and order data.",
    keyFeatures: [
      "Product and inventory management",
      "Order tracking and management",
      "Sales analytics dashboard",
      "User and role management",
      "Responsive admin interface",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/images/projects/laravel-dashboard-1.png",
    images: [
      "/images/projects/laravel-dashboard-1.png",
      "/images/projects/laravel-dashboard-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: false,
    year: 2024,
    accentColor: "#BE185D",
  },
  {
    slug: "secure-multiprotocol-system",
    title: "SecureMultiProtocol System",
    category: "Systems Application",
    filterCategory: "other",
    description:
      "A secure multi-protocol communication system designed around reliable network communication, file transfer, and enterprise-grade security architecture.",
    longDescription:
      "A systems-level application implementing multi-protocol communication with secure data transfer, connection management, and real-time monitoring capabilities.",
    challenge:
      "Implementing reliable, secure communication across multiple protocols requires careful architectural decisions around connection handling, data integrity, and security.",
    approach:
      "Designed a layered architecture separating protocol handling, security, and user interface — with a clear dashboard for monitoring active connections and transfers.",
    experience:
      "The interface provides clear visibility into connection status, active transfers, and security metrics without exposing unnecessary technical complexity.",
    build:
      "Developed in C++ with a focus on low-level networking, protocol implementation, and secure data handling.",
    result:
      "A robust system demonstrating deep technical capability in network programming, security implementation, and systems development.",
    keyFeatures: [
      "Multi-protocol communication support",
      "Secure file transfer",
      "Connection monitoring dashboard",
      "Real-time status updates",
      "Security and authentication layer",
    ],
    technologies: ["C++", "Networking", "Security", "Systems Programming"],
    image: "/images/projects/secure-protocol-1.png",
    images: [
      "/images/projects/secure-protocol-1.png",
      "/images/projects/secure-protocol-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: false,
    year: 2024,
    accentColor: "#0F766E",
  },
  {
    slug: "email-spam-detector",
    title: "Email Spam Detector",
    category: "AI / ML Application",
    filterCategory: "ai",
    description:
      "A machine learning application that analyzes and classifies emails as spam or legitimate — with detection history and performance analytics.",
    longDescription:
      "An AI-powered email classification tool using machine learning algorithms to detect spam patterns and provide users with analysis history and detection confidence scores.",
    challenge:
      "Email spam detection needs to be accurate, fast, and transparent — users need to understand why an email is flagged, not just receive a binary result.",
    approach:
      "Built a clean analysis interface that presents detection results with confidence scores and highlights suspicious patterns — making the AI reasoning visible.",
    experience:
      "Clear result presentation with visual confidence indicators and a searchable history of past detections — designed for repeated, efficient use.",
    build:
      "Python and machine learning backend with NLP-based feature extraction, integrated with a clean frontend for analysis and results display.",
    result:
      "A practical ML application demonstrating ability to build data-driven tools with clear, user-centered result presentation.",
    keyFeatures: [
      "ML-powered spam classification",
      "Confidence scoring",
      "Detection history log",
      "Pattern highlighting",
      "Clean analysis interface",
    ],
    technologies: ["Python", "Machine Learning", "NLP", "Flask"],
    image: "/images/projects/email-spam-1.png",
    images: [
      "/images/projects/email-spam-1.png",
      "/images/projects/email-spam-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: false,
    year: 2024,
    accentColor: "#DC2626",
  },
  {
    slug: "robo-escape",
    title: "Robo Escape",
    category: "Game / Algorithm",
    filterCategory: "other",
    description:
      "A pathfinding game built around algorithmic navigation — demonstrating AI-driven movement, obstacle handling, and visual pathfinding logic.",
    longDescription:
      "An interactive game demonstrating pathfinding algorithms with a robot character navigating through obstacle-filled environments in real time.",
    challenge:
      "Making algorithmic logic visible and engaging requires translating complex pathfinding computation into a clear, animated visual experience.",
    approach:
      "Built a grid-based game interface where pathfinding decisions are rendered step-by-step, making the algorithm's logic visible and understandable.",
    experience:
      "Clean game board with clear robot movement, obstacle rendering, and real-time path visualization — making the technical logic intuitive.",
    build:
      "Implemented with pathfinding algorithms (BFS/DFS/A*) in a structured game architecture with visual state management.",
    result:
      "An engaging demonstration of algorithmic thinking applied to an interactive context — showing systems thinking beyond typical web projects.",
    keyFeatures: [
      "Real-time pathfinding visualization",
      "Multiple algorithm modes",
      "Obstacle placement and editing",
      "Step-by-step path animation",
      "Clean game board interface",
    ],
    technologies: ["C++", "Algorithms", "Pathfinding", "Game Logic"],
    image: "/images/projects/robo-escape-1.png",
    images: [
      "/images/projects/robo-escape-1.png",
      "/images/projects/robo-escape-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: false,
    year: 2024,
    accentColor: "#F59E0B",
  },
  {
    slug: "wordlie-ios",
    title: "Wordlie iOS Game",
    category: "Mobile Application",
    filterCategory: "other",
    description:
      "A Wordle-inspired iOS word puzzle game with clean mobile-first UI, game state management, and polished result animations.",
    longDescription:
      "A mobile word puzzle game inspired by Wordle, built for iOS with clean game mechanics, smooth animations, and a polished user experience.",
    challenge:
      "Mobile word games need to be instantly understandable, visually satisfying, and smooth on small screens — the interaction feedback must feel premium.",
    approach:
      "Focused on tactile feedback, clear color-coded results, and smooth state transitions that make each guess feel satisfying.",
    experience:
      "Compact, focused mobile interface with immediate visual feedback on each guess — designed around thumb-friendly interaction and legibility.",
    build:
      "Built for iOS with a focus on game state management, animation polish, and mobile-first layout.",
    result:
      "A polished mobile game demonstrating ability to build engaging, well-designed applications beyond traditional web projects.",
    keyFeatures: [
      "Wordle-style word puzzle gameplay",
      "Color-coded feedback system",
      "Game result and statistics screen",
      "Smooth animations",
      "Mobile-first design",
    ],
    technologies: ["iOS", "Mobile Development", "Game Logic"],
    image: "/images/projects/wordlie-1.png",
    images: [
      "/images/projects/wordlie-1.png",
      "/images/projects/wordlie-2.png",
    ],
    githubUrl: "[GITHUB_URL]",
    featured: false,
    year: 2024,
    accentColor: "#10B981",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export const projectFilters = [
  { label: "All", value: "all" as const },
  { label: "Applications", value: "applications" as const },
  { label: "AI & ML", value: "ai" as const },
  { label: "Other", value: "other" as const },
];
