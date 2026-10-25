export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  status?: string;
  githubUrl?: string;
  prototypeUrl?: string;
  prototypeLabel?: string;
  highlights?: string[];
}

export interface EducationItem {
  id: string;
  level: string;
  degreeOrStage: string;
  institution: string;
  location?: string;
  year?: string;
  performance: {
    label: string;
    value: string;
  }[];
  details?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  recognition: string;
  year?: string;
  isHighlight?: boolean;
  category: string;
  description: string;
  prizeUrl?: string;
  prizeLabel?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "CHINMAYI AM",
    title: "Strive, Achieve, Conquer.",
    tagline: "AI Enthusiast | Developer | Innovator",
    heroDescription:
      "I'm an Information Science and Engineering student passionate about technology, software development, and building practical solutions. I enjoy exploring new ideas, developing projects, and learning how technology can solve real-world problems.",
    photoUrl: "/assets/aistudio/chinmayi_1633b890.jpeg",
    email: "chinmayiam14@gmail.com",
    linkedinUrl:
      "https://www.linkedin.com/in/chinmayi-a-m-430a67325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    githubUrl: "https://github.com/chinmayiam",
    location: "Karnataka, India",
    university: "GM University",
    department: "Information Science and Engineering",
  },

  about: {
    paragraphs: [
      "I'm Chinmayi AM, an Information Science and Engineering student at GM University. I'm interested in software development, artificial intelligence, data science, and technology-driven innovation.",
      "I enjoy turning ideas into practical projects, participating in technical competitions, and exploring solutions to real-world problems. Through my academic projects and hackathon experiences, I'm continuously improving my technical knowledge, problem-solving abilities, and development skills.",
      "My goal is to gain hands-on experience, build meaningful products, collaborate with other developers, and grow into a skilled technology professional.",
    ],
    infoCards: [
      {
        label: "Field",
        value: "Information Science and Engineering",
      },
      {
        label: "University",
        value: "GM University",
      },
      {
        label: "Interests",
        value: "AI, Software Development, Data Science",
      },
      {
        label: "Focus",
        value: "Projects, Innovation, and Continuous Learning",
      },
    ],
  },

  education: [
    {
      id: "btech",
      level: "Bachelor of Technology",
      degreeOrStage: "B.Tech in Information Science and Engineering",
      institution: "GM University",
      location: "Karnataka, India",
      performance: [
        { label: "First-Year CGPA", value: "8.42" },
        { label: "Second-Year CGPA", value: "7.80" },
      ],
      details:
        "Focusing on foundational software engineering, algorithms, database systems, networking, and applied computing methodologies.",
    },
    {
      id: "puc",
      level: "Pre-University Education",
      degreeOrStage: "Pre-University Course (Class 12)",
      institution: "Team Academy",
      year: "2024",
      performance: [{ label: "Class 12 Score", value: "90%" }],
      details:
        "Core science foundation with strong emphasis on mathematics and analytical reasoning.",
    },
    {
      id: "sslc",
      level: "Secondary Education",
      degreeOrStage: "Secondary School (Class 10)",
      institution: "Sri Someshwara Vidyalaya",
      year: "2022",
      performance: [{ label: "Class 10 Score", value: "80%" }],
      details:
        "Secondary academic foundation emphasizing scientific and quantitative disciplines.",
    },
  ] as EducationItem[],

  skills: [
    {
      title: "Programming Languages",
      skills: ["Python", "C fundamentals"],
    },
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React fundamentals",
        "Flask",
        "Django",
      ],
    },
    {
      title: "Database Technologies",
      skills: ["MySQL", "SQL", "Database Management"],
    },
    {
      title: "AI and Data Science",
      skills: [
        "Machine Learning fundamentals",
        "Data Science fundamentals",
        "AI-powered application development concepts",
        "Data analysis fundamentals",
      ],
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Additional Skills",
      skills: [
        "Networking Fundamentals",
        "Problem-Solving",
        "Project Development",
        "Technical Documentation",
        "Presentation and Team Collaboration",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "routebite",
      title: "RouteBite",
      category: "Startup / Food Technology",
      description:
        "A bus food delivery platform concept designed to help passengers order food during their journeys and collect it from restaurants at designated bus stops. The idea focuses on making food access more convenient for travelers.",
      longDescription:
        "RouteBite addresses a major pain point for long-distance highway bus travelers in India: unpredictable food quality and rushed stops. By integrating scheduled route milestones with local partner kitchens at bus halts, passengers can place orders in advance and pick up fresh meals hassle-free.",
      technologies: ["Startup Concept", "Food Logistics", "Route Scheduling", "Transit Commerce"],
      status: "Startup Concept / Validation",
      githubUrl: "https://github.com/chinmayiam/RouteBite",
      highlights: [
        "Pre-order meals tailored to travel itineraries",
        "Designated pickup coordination at scheduled stops",
        "Local vendor onboarding model for highway transit",
      ],
    },
    {
      id: "parking-sentinel",
      title: "AI-Powered Parking Sentinel Dashboard",
      category: "Artificial Intelligence / Smart Cities",
      description:
        "Designed a dynamic system to monitor parking violations, track live zones, manages cases, and estimate revenue. Integrated AI assistance for real-time alerts and insights, providing a seamless end-to-end solution for smart parking management.",
      longDescription:
        "Designed a dynamic system to monitor parking violations, track live zones, manages cases, and estimate revenue. Integrated AI assistance for real-time alerts and insights, providing a seamless end-to-end solution for smart parking management.",
      technologies: [
        "AI Monitoring",
        "Computer Vision Concepts",
        "Smart City",
        "Real-Time Alerts",
        "Dashboard Analytics",
      ],
      status: "Prototype & Analytics",
      githubUrl: "https://github.com/chinmayiam/AI-Powered-Parking-Sentinel-Dashboard",
      highlights: [
        "Live zone tracking and automated violation detection",
        "Integrated case management and revenue projection",
        "Real-time AI assistance for alerts and operational insights",
      ],
    },
    {
      id: "shopsmart-ai",
      title: "ShopSmart AI",
      category: "AI / E-Commerce",
      description:
        "An AI-assisted shopping application designed around intelligent product discovery and a user-friendly shopping experience. The project explores how AI can make online shopping more convenient and personalized.",
      longDescription:
        "ShopSmart AI examines intelligent recommendation algorithms and user-centric catalog search to deliver intuitive online shopping journeys. Designed to minimize decision fatigue through smart filtering and contextual product suggestions.",
      technologies: ["AI Search", "React", "E-Commerce", "Product Discovery", "Smart UX"],
      status: "Active Development",
      githubUrl: "https://github.com/chinmayiam/shopsmart-ai",
      highlights: [
        "Contextual product matching and filtering",
        "Clean, minimal checkout and cart flows",
        "Personalized recommendations based on preferences",
      ],
    },
    {
      id: "careercraft-ai",
      title: "CareerCraft AI",
      category: "Artificial Intelligence / EdTech",
      description:
        "An AI-powered career and education guidance platform concept designed to help students explore educational pathways, career opportunities, scholarships, examinations, and personalized learning roadmaps.",
      longDescription:
        "CareerCraft AI explores how artificial intelligence can democratize career counseling. It provides structured pathways across various technological and academic domains, helping learners discover tailored scholarships, target examinations, and track milestones along their growth journey.",
      technologies: ["Python", "AI Concepts", "EdTech", "Web Architecture", "Guidance Roadmaps"],
      status: "Concept & Prototyping",
      githubUrl: "https://github.com/chinmayiam/careercraft-ai",
      highlights: [
        "Interactive education roadmap exploration",
        "Curated examination and scholarship discovery",
        "Personalized learning trajectory planner",
      ],
    },
    {
      id: "smart-toll",
      title: "IoT – Energy-Regenerative Smart Toll System",
      category: "Internet of Things / Smart Transportation",
      description:
        "An IoT-based smart toll system concept exploring efficient toll operations, RFID-based vehicle identification, and energy regeneration. The project focuses on combining connected technologies with smarter transportation infrastructure.",
      longDescription:
        "This smart toll concept investigates self-sustaining transportation infrastructure. By pairing automated RFID vehicle identification with kinetic energy harvesting mechanisms embedded in deceleration lanes, the system demonstrates how transit checkpoints can offset operational energy costs while eliminating traffic congestion.",
      technologies: ["IoT Architecture", "RFID Systems", "Energy Regeneration", "Smart Infrastructure"],
      status: "Research & Hardware Concept",
      prototypeUrl: "https://lnkd.in/p/dP7sw3df",
      prototypeLabel: "Working Prototype",
      highlights: [
        "RFID-based contactless vehicle verification",
        "Kinetic energy capture mechanism concept",
        "Reduced queue delays and fuel consumption",
      ],
    },
  ] as Project[],

  achievements: [
    {
      id: "hackathon-1st",
      title: "Innovation Hackathon — 1st Place",
      recognition: "First place in Innovation Hackathon.",
      category: "Hackathon & Innovation",
      isHighlight: true,
      description:
        "Recognized with First Place for developing and pitching a high-impact technology solution addressing critical real-world challenges.",
      prizeUrl: "https://lnkd.in/p/dpQvhGym",
      prizeLabel: "View Prize & Recognition",
    },
    {
      id: "reverse-engineering-2nd",
      title: "Reverse Engineering — 2nd Place",
      recognition: "Second place in Reverse Engineering at Ignitron 2025.",
      year: "2025",
      category: "Technical Competition",
      isHighlight: false,
      description:
        "Secured Second Place at Ignitron 2025 by demonstrating analytical depth, system deconstruction, and technical problem-solving under competitive time constraints.",
      prizeUrl: "https://lnkd.in/p/dFhP2KCF",
      prizeLabel: "View Prize & Recognition",
    },
    {
      id: "google-arcade-2026",
      title: "Google Arcade Skill Badges — 2026",
      recognition: "Earned four Google Arcade skill badges in 2026.",
      year: "2026",
      category: "Certification & Cloud Skills",
      isHighlight: false,
      description:
        "Earned four Google Arcade skill badges in 2026, validating foundational competencies in cloud engineering and hands-on lab environments.",
    },
  ] as AchievementItem[],

  exploring: {
    items: [
      "Artificial Intelligence",
      "Data Science",
      "Full-Stack Development",
      "Hackathons and Innovation",
      "Technology Entrepreneurship",
      "Building Practical Software Products",
    ],
    statement:
      "I'm continuously learning, experimenting with new technologies, and working toward building useful digital products that address real-world needs.",
  },
};
