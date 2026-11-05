/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Yahan aap apni saari details update kar sakte hain (Name, Bio, Skills,
 * Projects, Social Links, Experience, etc.).
 * Website automatically is data se dynamically update ho jayegi!
 * =======================================================================
 */

export const personalInfo = {
  name: "Priyanshu",
  role: "Full Stack Developer",
  tagline: "Building scalable web applications, sleek user experiences, and modern digital solutions.",
  shortBio: "Passionate software engineer dedicated to crafting clean, high-performance web applications with modern tech stacks. Focused on developer experience, user delight, and scalable architectures.",
  location: "New Delhi, India",
  email: "priyanshu.dev@example.com",
  phone: "+91 98765 43210",
  availability: "Available for Freelance & Full-time Roles",
  statusBadge: "Open to exciting opportunities",
  resumeUrl: "#", // Add link to your PDF resume (e.g., "/resume.pdf" in public folder)
  avatar: "/priyanshu.jpg",
  yearsOfExperience: "2+",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "Github",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter / X",
    url: "https://twitter.com",
    icon: "Twitter",
    color: "hover:text-sky-400",
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "Mail",
    color: "hover:text-teal-400",
  },
];

export const heroStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const aboutData = {
  heading: "About Me",
  subheading: "A glimpse into who I am, what drives me, and how I build things.",
  bioParagraphs: [
    "Hello! I am a full-stack developer who loves converting complex engineering challenges into elegant, intuitive digital experiences. My journey began with simple web scripts and evolved into architecting production-grade applications.",
    "I specialize in the modern JavaScript and TypeScript ecosystem, utilizing React, Next.js, Node.js, and cloud platforms. I focus heavily on writing readable, testable code, optimizing bundle sizes, and creating responsive interfaces.",
    "When I'm not coding, you can find me exploring open-source projects, reading tech blogs, tuning my terminal setup, or enjoying a good cup of coffee."
  ],
  highlights: [
    { title: "Clean Architecture", desc: "Writing modular, self-documenting code built for scale." },
    { title: "Performance First", desc: "Lightning fast load times with optimized rendering." },
    { title: "Modern UI/UX", desc: "Pixel-perfect interfaces with engaging micro-interactions." },
    { title: "Collaborative Mindset", desc: "Clear communication, Git workflows, and agile delivery." },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "State University / College Name",
      period: "2020 - 2024",
      score: "8.5 CGPA / Grade A",
    }
  ]
};

export const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2" },
      { name: "TypeScript", level: "Intermediate", icon: "FileCode" },
      { name: "Next.js", level: "Intermediate", icon: "Globe" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 & CSS3", level: "Master", icon: "Layout" },
      { name: "Redux / Zustand", level: "Intermediate", icon: "Cpu" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Layers" },
      { name: "RESTful APIs", level: "Advanced", icon: "Network" },
      { name: "GraphQL", level: "Familiar", icon: "Share2" },
      { name: "MongoDB", level: "Intermediate", icon: "Database" },
      { name: "PostgreSQL", level: "Intermediate", icon: "DatabaseBackup" },
      { name: "JWT & Auth", level: "Advanced", icon: "ShieldCheck" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Docker", level: "Intermediate", icon: "Box" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "Vite / Webpack", level: "Advanced", icon: "Zap" },
      { name: "Vercel / Netlify", level: "Advanced", icon: "Cloud" },
      { name: "Linux / Bash", level: "Intermediate", icon: "Terminal" },
    ],
  },
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Backend", "AI & Tools"];

export const projects = [
  {
    id: 1,
    title: "DevFlow - Developer Community & QA Platform",
    category: "Full Stack",
    description: "A community platform for software engineers to ask questions, share technical articles, and collaborate. Includes markdown editor, voting system, and real-time alerts.",
    longDescription: "DevFlow was built to emulate modern knowledge sharing platforms. Featuring role-based authentication, real-time upvotes, tags filtering, search indexing, and a rich markdown viewer with syntax highlighting.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/devflow",
    githubUrl: "https://github.com/example/devflow",
    featured: true,
  },
  {
    id: 2,
    title: "Nexus Dashboard - SaaS Analytics Suite",
    category: "Frontend",
    description: "An enterprise-grade SaaS analytics and operations dashboard with dynamic charts, dark mode, CSV exports, and responsive metrics grids.",
    longDescription: "An interactive dashboard visualizing real-time metrics, user growth, revenue churn, and geographic distribution. Highly responsive with custom theme toggling and animated widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Recharts", "Lucide Icons"],
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/example/nexus-dashboard",
    featured: true,
  },
  {
    id: 3,
    title: "PromptCraft - AI Prompt Engineering Studio",
    category: "AI & Tools",
    description: "A web utility enabling developers to test, version, and evaluate LLM system prompts with side-by-side output comparisons and token usage estimations.",
    longDescription: "PromptCraft streamlines AI prompt testing by providing automated variable substitution, cost calculation, response latency metrics, and team collaboration presets.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "OpenAI API", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com/promptcraft",
    githubUrl: "https://github.com/example/promptcraft",
    featured: true,
  },
  {
    id: 4,
    title: "CloudVault - Secure Encrypted File Storage",
    category: "Backend",
    description: "High-performance microservice architecture for file encryption, chunked streaming uploads, and short-lived secure download links.",
    longDescription: "CloudVault handles secure file uploads with client-side hashing, AWS S3 presigned URLs, Redis rate limiting, and end-to-end encryption for privacy-sensitive documents.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "AWS S3", "Redis", "Docker", "Express"],
    liveUrl: "https://example.com/cloudvault",
    githubUrl: "https://github.com/example/cloudvault-api",
    featured: false,
  },
  {
    id: 5,
    title: "ShopSphere - Headless E-commerce Store",
    category: "Full Stack",
    description: "Modern e-commerce storefront with instant instant product search, cart persistence, coupon codes, and Stripe checkout integration.",
    longDescription: "A full-featured shopping solution with responsive product galleries, real-time inventory checks, filtering by price and category, and automated order confirmation emails.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Stripe API", "Node.js"],
    liveUrl: "https://example.com/shopsphere",
    githubUrl: "https://github.com/example/shopsphere",
    featured: false,
  },
  {
    id: 6,
    title: "TaskPulse - Minimalist Kanban Workflow",
    category: "Frontend",
    description: "Fluid drag-and-drop task management tool with keyboard shortcuts, priority labels, activity logs, and local browser persistence.",
    longDescription: "Built for focused productivity, TaskPulse features smooth drag animations, column sorting, task timers, and offline capability without external dependencies.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Drag and Drop", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://example.com/taskpulse",
    githubUrl: "https://github.com/example/taskpulse",
    featured: false,
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote / Hybrid",
    period: "2023 - Present",
    description: "Building and maintaining core customer-facing web applications. Collaborating with product managers and UI designers to ship performant features.",
    achievements: [
      "Refactored legacy UI components into reusable React modules, boosting page load speeds by 38%.",
      "Designed and deployed RESTful microservices processing 50k+ daily requests.",
      "Integrated CI/CD pipelines reducing deployment friction across multiple staging environments."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Innovate Labs",
    location: "New Delhi, India",
    period: "2022 - 2023",
    description: "Assisted in engineering landing pages, component libraries, and interactive customer onboarding flows.",
    achievements: [
      "Built over 15+ responsive components adhering to strict accessibility (a11y) standards.",
      "Identified and eliminated memory leaks in complex client-side forms."
    ]
  }
];

export const services = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web apps built with modern React, robust Node.js backends, and reliable database architecture.",
    icon: "Layers",
  },
  {
    title: "Modern Frontend Engineering",
    description: "Pixel-perfect, ultra-fast, and responsive user interfaces crafted with Tailwind CSS and React ecosystem.",
    icon: "Layout",
  },
  {
    title: "API Design & Integration",
    description: "Secure, scalable REST & GraphQL APIs with seamless third-party service integration (Payment, Auth, Cloud).",
    icon: "Server",
  },
  {
    title: "Performance & SEO Optimization",
    description: "Speeding up web apps, optimizing Core Web Vitals, and implementing SEO best practices for high visibility.",
    icon: "Zap",
  },
];

export const testimonials = [
  {
    name: "Aman Sharma",
    role: "Founder, TechSprint",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    comment: "Priyanshu delivered our product ahead of schedule. The code quality, communication, and visual polish were truly top-notch. Highly recommended!",
  },
  {
    name: "Sneha Patel",
    role: "Product Manager, Apex Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    comment: "An exceptional developer who cares not just about writing code, but about user experience and business impact. Working together was seamless.",
  },
  {
    name: "Rahul Verma",
    role: "Lead Engineer, DevCorp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    comment: "Clean architecture, proactive problem-solving, and attention to detail. Priyanshu is a great asset for any development team.",
  },
];

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize primarily in the JavaScript/TypeScript ecosystem including React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS."
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes! I am open to freelance work, contract engagements, and full-time software engineering opportunities. Feel free to reach out via the contact form or email."
  },
  {
    question: "Can you help optimize my existing website?",
    answer: "Absolutely. I can audit your current codebase, improve bundle performance, optimize images and assets, fix UI responsiveness, and implement SEO enhancements."
  },
  {
    question: "How do we get started on a project?",
    answer: "Send me a message with your project requirements or idea. We will schedule a quick introductory chat to discuss timelines, tech stack, and milestones."
  }
];
