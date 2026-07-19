export interface SemesterResult {
  semester: string;
  session: string;
  sgpi: number;
  marksObtained: string;
  totalMarks: string;
  status: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  duration: string;
  period: string;
  grade?: string;
  certificateId: string;
  studentId?: string;
  verificationLink?: string;
  technologies: string[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "backend" | "cybersecurity";
  githubLink: string;
  liveLink?: string;
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: "award" | "hackathon" | "leadership" | "community";
  date: string;
  organizingBody: string;
  description: string;
  impact: string;
}

export const RINKAL_PROFILE = {
  name: "Rinkal Mishra",
  fullName: "Rinkal Radheraman Mishra",
  title: "B.E. IT | Aspiring Software Engineer",
  email: "rinkalmishra08@gmail.com",
  phone: "+91 7410732633",
  location: "Ambarnath, Maharashtra, India",
  github: "https://github.com/RinkalMishra03",
  linkedin: "https://linkedin.com/in/rinkal-mishra-674a14374",
  summary: "Motivated and detail-oriented Information Technology student with strong foundations in Java, Python, SQL, data structures, and networking concepts. Passionate about software development, cybersecurity, and backend technologies, with hands-on experience building desktop and web-based applications. Skilled in problem-solving, database management, and developing user-friendly solutions. Eager to contribute technical expertise, adaptability, and continuous learning mindset in a challenging software engineering role.",
  professionalGrowth: [
    "Exploring AI, cloud, and cybersecurity technologies through practical, hands-on learning.",
    "Strengthening backend engineering, fullstack system integration, and advanced problem-solving skills through continuous system development."
  ],
  education: [
    {
      institution: "A. P. Shah Institute of Technology, Thane (West)",
      degree: "Bachelor of Engineering (B.E.) in Information Technology",
      university: "University of Mumbai",
      collegeCode: "996",
      period: "2023 - Present",
      status: "Active (Pursuing)",
      results: [
        {
          semester: "Semester V",
          session: "Winter Session 2025",
          sgpi: 8.30,
          marksObtained: "599",
          totalMarks: "800",
          status: "Success",
          highlights: ["Internet Programming (A)", "Computer Network Security (B)", "Advanced Devops Lab (O)", "Advanced Data structures & Analysis (C)"]
        },
        {
          semester: "Semester IV",
          session: "Summer Session 2025",
          sgpi: 8.14,
          marksObtained: "570",
          totalMarks: "775",
          status: "Success",
          highlights: ["Python Lab (O)", "Unix Lab (O)", "Computer Network & Network Design (B)", "Microprocessor Lab (O)"]
        },
        {
          semester: "Semester III",
          session: "Winter Session 2024",
          sgpi: 8.57,
          marksObtained: "589",
          totalMarks: "775",
          status: "Success",
          highlights: ["Data Structure And Analysis (O)", "SQL Lab (O)", "Java Lab (O)", "Database Management System (B)"]
        },
        {
          semester: "Semester II",
          session: "Summer Session 2024",
          sgpi: 7.30,
          marksObtained: "481",
          totalMarks: "725",
          status: "Success",
          highlights: ["Engineering Mathematics-II (E)", "C Programming (B)", "Professional Communication & Ethics-I (C)"]
        },
        {
          semester: "Semester I",
          session: "Winter Session 2023",
          sgpi: 7.22,
          marksObtained: "444",
          totalMarks: "675",
          status: "Success",
          highlights: ["Engineering Mathematics-I (C)", "Basic Electrical Engineering (A)", "Basic Workshop Practice-I (O)"]
        }
      ] as SemesterResult[]
    }
  ]
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "gcloud-ai",
    title: "Google Cloud Generative AI Virtual Internship",
    issuer: "Google Cloud",
    duration: "10 Weeks",
    period: "April - June 2025",
    grade: "E (Excellent)",
    certificateId: "5efcf00b14d11a3131cd82bbf12261e2",
    studentId: "STU669b3c9c771c01721449628",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/5efcf00b14d11a3131cd82bbf12261e2",
    technologies: ["Google Cloud", "Generative AI", "LLMs", "Vertex AI", "Prompt Engineering"],
    description: "Rigorous 10-week virtual learning curriculum providing solid foundations in Google Cloud platform architecture and generative AI design, utilizing cloud-hosted model orchestration."
  },
  {
    id: "celonis-ba",
    title: "Business Analyst Virtual Internship",
    issuer: "Celonis",
    duration: "8 Weeks",
    period: "April - June 2026",
    grade: "E (Excellent)",
    certificateId: "4f8a86c3e66301037647",
    studentId: "STU669b3c9c771c01721449628",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/4f8a86c3e66301037647",
    technologies: ["Process Mining", "Celonis EMS", "Data Analytics", "KPI Auditing", "Business Operations"],
    description: "8-week intensive virtual internship exploring Process Mining theories, process analytics, and operational KPI dashboards to detect process bottlenecks and optimization vectors."
  },
  {
    id: "paloalto-cyber",
    title: "Cybersecurity Virtual Internship",
    issuer: "Palo Alto Networks",
    duration: "10 Weeks",
    period: "July - September 2024",
    grade: "P (Pass)",
    certificateId: "73b63befd11dd56a80a66af45465964d",
    studentId: "STU64f832ff4c3af1693987583",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/73b63befd11dd56a80a66af45465964d",
    technologies: ["Network Security", "Cloud Security", "SOC Operations", "Threat Intelligence", "Firewall Configuration"],
    description: "Structured cybersecurity exploration covering state-of-the-art cloud and corporate firewall setups, threat landscape intelligence, and SOC auditing patterns."
  },
  {
    id: "zscaler-zero",
    title: "Zero Trust Cloud Security Virtual Internship",
    issuer: "Zscaler",
    duration: "10 Weeks",
    period: "January - March 2026",
    grade: "B (Good)",
    certificateId: "46db6ed995bc7bca1f",
    studentId: "STU669b3c9c771c01721449628",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/46db6ed995bc7bca1f",
    technologies: ["Zero Trust Architecture", "ZIA", "ZPA", "Private Access Security", "Internet Access Security"],
    description: "10-week Zero Trust exploration focusing on secure cloud connectivity, isolating corporate applications, and implementing strict user-based and application-based authentication gates."
  },
  {
    id: "java-stack",
    title: "Java Full Stack Development + Project Program",
    issuer: "EduSkills Academy",
    duration: "8 Weeks",
    period: "Completed June 2026",
    certificateId: "2026-F3A7BE35A6",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/2026-F3A7BE35A6",
    technologies: ["HTML5", "CSS & Bootstrap", "JavaScript & jQuery", "Core Java & Advanced Java", "Spring Framework", "Spring Boot", "Hibernate", "MySQL", "Git"],
    description: "Comprehensive 8-week engineering track with hands-on fullstack design. Built and successfully submitted a complete web-based system: 'Log Statistics Mini Analyzer'."
  },
  {
    id: "nptel-dbms",
    title: "NPTEL Online DBMS Certification",
    issuer: "IIT Kharagpur & MoE (Govt of India)",
    duration: "8 Weeks",
    period: "July - September 2024",
    grade: "Consolidated Score: 52%",
    certificateId: "NPTEL24CS75S241901225",
    verificationLink: "https://nptel.ac.in/noc",
    technologies: ["Relational Database Design", "SQL Queries", "Transaction Isolation", "Indexing & Hashing", "E-R Model"],
    description: "Rigorous academic program spanning relational calculus, schema normalization, locking mechanisms, database transactions, and high-performance querying."
  },
  {
    id: "fortinet-sec",
    title: "Network Security Associate Virtual Internship",
    issuer: "Fortinet",
    duration: "10 Weeks",
    period: "January - March 2024",
    grade: "P (Pass)",
    certificateId: "dd97836dfae148ef7164b36a6e0ad092",
    studentId: "STU64f832ff4c38f1693987583",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/dd97836dfae148ef7164b36a6e0ad092",
    technologies: ["FortiOS", "Security Fabric", "Threat Prevention", "VPN", "UTM Concepts"],
    description: "Structured exploration of Fortinet threat management systems, building familiarity with VPN architectures, sandboxing, and enterprise network protection."
  },
  {
    id: "gdevelopers-android",
    title: "Android Developer Virtual Internship",
    issuer: "Google for Developers",
    duration: "10 Weeks",
    period: "October - December 2024",
    grade: "P (Pass)",
    certificateId: "4ad3f10ea95a896fa3944bec6c7b965b",
    studentId: "STU669b3c9c771c01721449628",
    verificationLink: "https://cert.eduskillsfoundation.org/verify/4ad3f10ea95a896fa3944bec6c7b965b",
    technologies: ["Android SDK", "Kotlin", "Jetpack Compose", "Mobile API Integration", "UI Layouts"],
    description: "10-week virtual learning pathway for modern Android development, creating highly responsive Kotlin applications with Material Design layout patterns."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-event-manager",
    title: "AI-Driven Smart Event Management & Analytics",
    shortDescription: "An AI-powered institutional platform for tracking events, internship logs, and real-time analytics with OCR and natural language database capabilities.",
    description: "Developed an AI-driven platform for smart event management, internship tracking, and analytics for educational institutions. Integrated AI-powered OCR to auto-scan and parse event details directly from poster uploads and leveraged Natural Language Processing (NLP) to compile registrations and generate direct SQL database insights. Framed in MVC architectural patterns to scale across college campuses securely.",
    technologies: ["React JS", "FastAPI", "Python", "SQLite", "Tailwind CSS", "Gemini API", "OCR", "NLP"],
    category: "fullstack",
    githubLink: "https://github.com/RinkalMishra03",
    liveLink: "#",
    problem: "College administrators and students face extreme coordination bottlenecks when tracking internships, organizing technical events, and validating registration details. Text and dates inside event posters are manually cataloged, causing heavy data overhead and frequent scheduling conflicts.",
    solution: "Designed a multi-module SaaS-like environment. Students can easily log their internship timelines, while administrators upload event posters. Behind the scenes, the poster is scanned using AI OCR to auto-fill the forms. A built-in NLP chatbot allows admins to write questions like 'How many CS students signed up for the workshop?' and auto-compiles the exact database query safely.",
    impact: [
      "Eliminated 90% of manual entry overhead during student event creation.",
      "Successfully integrated Google Gemini API to translate natural language user queries directly into SQLite insights safely.",
      "Designed clean, responsive dashboards for both administrative coordinates and student candidates."
    ],
    features: [
      "AI-Powered poster parsing (OCR) to extract dates, titles, and speakers.",
      "Natural Language to SQL compiler for quick registrar interrogation.",
      "Student Internship Log Tracker with automated timeline milestones."
    ]
  },
  {
    id: "cyberaware",
    title: "CyberAware - Cybersecurity Awareness Web App",
    shortDescription: "Interactive Django-based learning portal built to educate users on cybersecurity best practices, network safety, and threat mitigation.",
    description: "Built a fully interactive cybersecurity education web application using Django and MySQL. Integrated structured security modules, threat briefings, phishing simulators, and interactive quizzes with real-time scoring. Designed to promote digital hygiene and cloud infrastructure security practices among non-technical personnel.",
    technologies: ["Django", "Python", "MySQL", "HTML5/CSS3", "Bootstrap"],
    category: "cybersecurity",
    githubLink: "https://github.com/RinkalMishra03",
    liveLink: "#",
    problem: "With rising digital threat landscapes, everyday users remain the vulnerable primary target for cybercriminals. Standard corporate training consists of dry, static PDFs that fail to cultivate genuine security reflexes or practical defense hygiene.",
    solution: "Developed an interactive, game-based educational platform. Users undergo short, highly visual learning modules on topics like multi-factor authentication, phishing links, and strong password generation. Progress is audited using dynamic timed quizzes with instant visual feedback and score calculation cached on a structured MySQL backend.",
    impact: [
      "Secured structured data isolation for user progress profiles using relational database normalization.",
      "Built beautiful interactive simulations representing common email phishing patterns.",
      "Delivered a responsive learning UI which easily transitions from desktop monitors to mobile displays."
    ],
    features: [
      "Structured Security Briefings covering Ransomware, Phishing, and Zero-Trust.",
      "Interactive Quiz Engine with instant feedback and score auditing.",
      "Dashboard summary for students to inspect their security hygiene index."
    ]
  },
  {
    id: "smart-recruiter",
    title: "Smart Recruiter System",
    shortDescription: "A high-performance desktop application for candidate tracking, CV screening, and applicant pipeline management.",
    description: "Developed a desktop-based recruitment and candidate application tracking management system using Java and MySQL. Implemented rapid candidate search, normalized database operations for applicant profiles, automated screening filters, and custom tabular reports for hr personnel.",
    technologies: ["Java SE", "NetBeans", "MySQL", "JDBC", "SQLNormal Forms"],
    category: "backend",
    githubLink: "https://github.com/RinkalMishra03",
    liveLink: "#",
    problem: "Small to medium human resources departments are heavily bogged down by unorganized spreadsheets, misplaced CV folders, and slow applicant response pipelines, causing high hiring friction.",
    solution: "Created a solid, standalone Java desktop interface. Utilizing JDBC connection pooling and a meticulously normalized relational schema in MySQL, the application processes heavy applicant directories. High-efficiency filtering enables recruiters to screen and isolate top-tier candidates in under 3 seconds.",
    impact: [
      "Reduced recruiter search and screening durations by over 70% compared to typical manual directory review.",
      "Meticulously organized applicant records across tables with zero redundancy.",
      "Built a highly intuitive, secure Java Swing layout with persistent state indicators."
    ],
    features: [
      "Dynamic Candidate Search filtering by specific skills and years of experience.",
      "Interactive CV Pipeline Stage Controller (Applied, Screened, Interviewing, Offered).",
      "Automated PDF candidate brief generator for hiring manager reviews."
    ]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "cyber-challenge-1st",
    title: "1st Place Winner",
    category: "award",
    date: "May 2024",
    organizingBody: "Inter-College Technical Committee",
    description: "Secured first place in an intensive Inter-College Cybersecurity Coding Challenge. Successfully audited vulnerabilities, completed threat intelligence puzzles, and solved cryptography modules under tight competition timelines.",
    impact: "Outperformed participants from 15+ premier engineering institutions, securing the top score with precise problem-solving execution."
  },
  {
    id: "publicity-head",
    title: "Publicity & Literature Head",
    category: "leadership",
    date: "2024 - 2025",
    organizingBody: "Official College IT Association (APSIT)",
    description: "Selected to lead community communications, literature drafting, and digital public relations for official college technology events. Managed a multidisciplinary team of 6 coordinators to design campaigns and promote workshops.",
    impact: "Boosted college technology workshop registrations by 45% through highly tailored digital campaigns, increasing community turnout."
  },
  {
    id: "hackathon-ai",
    title: "AI Innovation Hackathon Runner-up",
    category: "hackathon",
    date: "April 2024",
    organizingBody: "A. P. Shah Institute of Technology",
    description: "Participated in an intense 24-hour development marathon. Teamed up with peer engineers to formulate, deploy, and showcase the initial proof-of-concept of the AI Event Management platform.",
    impact: "Recognized as a top-tier project by industry judges for its real-world educational deployment utility and FastAPI OCR performance."
  }
];

export const SKILLS_DATA = {
  programmingLanguages: [
    { name: "Java", proficiency: 90, icon: "Code" },
    { name: "Python", proficiency: 85, icon: "Code" },
    { name: "SQL", proficiency: 88, icon: "Database" },
    { name: "JavaScript", proficiency: 80, icon: "Code" },
    { name: "HTML5 & CSS3", proficiency: 95, icon: "Layout" }
  ],
  frameworks: [
    { name: "React.js", proficiency: 85, icon: "Cpu" },
    { name: "FastAPI", proficiency: 80, icon: "Zap" },
    { name: "Django", proficiency: 75, icon: "Cpu" },
    { name: "Spring Boot", proficiency: 75, icon: "Coffee" },
    { name: "Tailwind CSS", proficiency: 95, icon: "Paintbrush" }
  ],
  databases: [
    { name: "MySQL", proficiency: 88, icon: "Database" },
    { name: "SQLite", proficiency: 90, icon: "Database" },
    { name: "MongoDB", proficiency: 75, icon: "Database" },
    { name: "Hibernate (ORM)", proficiency: 80, icon: "Layers" }
  ],
  cyberSecurity: [
    { name: "Network Security", proficiency: 85, icon: "Shield" },
    { name: "Zero Trust Systems", proficiency: 80, icon: "Lock" },
    { name: "Threat Intelligence", proficiency: 75, icon: "Eye" },
    { name: "Cloud Security", proficiency: 80, icon: "Cloud" }
  ],
  tools: [
    { name: "Git & GitHub", proficiency: 90, icon: "GitBranch" },
    { name: "Vercel & Render", proficiency: 85, icon: "Globe" },
    { name: "Google Cloud Console", proficiency: 80, icon: "Cloud" },
    { name: "NetBeans & VS Code", proficiency: 95, icon: "Monitor" }
  ]
};
